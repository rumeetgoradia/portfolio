import { env } from "~/env";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

interface CachedToken {
  access_token: string;
  expires_at: number;
}
let tokenCache: CachedToken | null = null;
const getValidAccessToken = async (): Promise<string> => {
  const now = Date.now();
  if (tokenCache && tokenCache.expires_at > now + 60000)
    return tokenCache.access_token;
  console.log("Fetching new Spotify token");
  const basic = Buffer.from(
    `${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`,
  ).toString("base64");
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: env.SPOTIFY_REFRESH_TOKEN,
  });
  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });
    if (!response.ok) {
      console.error(
        `Spotify Token Error: ${response.status} ${response.statusText}`,
        await response.text(),
      );
      throw new Error(`Failed to refresh Spotify token`);
    }
    const TokenResponseSchema = z.object({
      access_token: z.string(),
      expires_in: z.number(),
    });
    const tokenData = TokenResponseSchema.parse(await response.json());
    tokenCache = {
      access_token: tokenData.access_token,
      expires_at: Date.now() + tokenData.expires_in * 1000,
    };
    return tokenCache.access_token;
  } catch (error) {
    tokenCache = null;
    console.error("Error fetching/parsing Spotify token:", error);
    throw new Error("Could not obtain Spotify access token.");
  }
};

// --- Helper for Spotify API Calls ---
async function fetchSpotifyAPI<T>(
  endpoint: string,
  accessToken: string,
  options: RequestInit = {},
): Promise<T | null> {
  /* ... same ... */
  const response = await fetch(endpoint, {
    ...options,
    headers: { ...options.headers, Authorization: `Bearer ${accessToken}` },
  });
  if (response.status === 204) return null;
  if (!response.ok) {
    console.error(
      `Spotify API Error: ${response.status} ${response.statusText}`,
      await response.text(),
    );
    throw new TRPCError({
      message: `Spotify API request failed: ${response.statusText} (Status: ${response.status})`,
      code: "INTERNAL_SERVER_ERROR",
    });
  }
  // IMPORTANT: Keep the 'as T' here for the helper's generic signature,
  // but we will validate with Zod *after* calling this helper.
  return (await response.json()) as T;
}

// --- Define Zod Schemas for API Validation ---

// Zod schema for validating a single Track from Spotify API
const SpotifyTrackSchema = z.object({
  id: z.string(), // Essential for keys/links
  name: z.string(),
  artists: z
    .array(
      z.object({
        name: z.string(),
        external_urls: z.object({ spotify: z.string().url() }),
        // type: z.literal("artist"), // Optional: Keep if needed, otherwise remove
      }),
    )
    .min(1),
  album: z.object({
    name: z.string(),
    external_urls: z.object({ spotify: z.string().url() }),
    // type: z.literal("album"), // Optional: Keep if needed
  }),
  external_urls: z.object({
    spotify: z.string().url(),
  }),
  // type: z.literal("track"), // Optional: Keep if needed
});
// Infer the TS type from the Zod schema for internal use
type ValidatedTrack = z.infer<typeof SpotifyTrackSchema>;

// Zod schema for validating the response of the /top/tracks endpoint
const SpotifyTopTracksResponseSchema = z.object({
  items: z.array(SpotifyTrackSchema), // Use the track schema here
});

// Zod schema for validating the response of the /currently-playing endpoint
// This reflects the structure Spotify *should* send when status is 200
const SpotifyNowPlayingResponseSchema = z.object({
  is_playing: z.boolean(),
  item: SpotifyTrackSchema.nullable(), // Validate the nested track, can be null
  currently_playing_type: z.enum(["track", "episode", "ad", "unknown"]), // Use Spotify's known types
});

// Define the specific structure the `nowPlaying` procedure will *always* return
// This handles both the "playing" and "not playing" (204) cases consistently.
type NowPlayingProcedureResult = {
  is_playing: boolean;
  item: ValidatedTrack | null; // Use the inferred track type
  // Make type nullable to handle the 204 case where we don't have this info
  currently_playing_type: "track" | "episode" | "ad" | "unknown" | null;
};

// --- tRPC Router ---
export const spotifyRouter = createTRPCRouter({
  topTracks: publicProcedure.query(async (): Promise<ValidatedTrack[]> => {
    // Return array of validated tracks
    try {
      const accessToken = await getValidAccessToken();
      const endpoint = `https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term`;

      // Fetch data, expecting the structure defined by SpotifyTopTracksResponseSchema
      const data = await fetchSpotifyAPI<unknown>(endpoint, accessToken);

      // Validate the entire response structure with Zod
      const validatedData = SpotifyTopTracksResponseSchema.parse(data);

      // Return only the array of items (tracks)
      return validatedData.items;
    } catch (error) {
      console.error("Error in topTracks procedure:", error);
      if (error instanceof z.ZodError) {
        // More specific error for bad data structure
        throw new TRPCError({
          message:
            "Received invalid data structure from Spotify for top tracks.",
          code: "INTERNAL_SERVER_ERROR",
          cause: error,
        });
      }
      if (error instanceof TRPCError) throw error;
      // Generic error for token issues or other fetch problems
      throw new TRPCError({
        message: "Failed to fetch top tracks from Spotify.",
        code: "INTERNAL_SERVER_ERROR",
        cause: error instanceof Error ? error : undefined,
      });
    }
  }),

  // Update the procedure's return type to the consistent structure
  nowPlaying: publicProcedure.query(
    async (): Promise<NowPlayingProcedureResult> => {
      try {
        const accessToken = await getValidAccessToken();
        const endpoint =
          "https://api.spotify.com/v1/me/player/currently-playing";

        // Fetch data, expecting the structure defined by SpotifyNowPlayingResponseSchema or null (for 204)
        const data = await fetchSpotifyAPI<unknown>(endpoint, accessToken);

        // Handle 204 No Content case -> return the "not playing" structure
        if (data === null) {
          return {
            is_playing: false,
            item: null,
            currently_playing_type: null, // Set type to null for consistency
          };
        }

        // If data exists (status 200), validate it with Zod
        // Return the validated data, conforming to NowPlayingProcedureResult
        // All fields from validatedData are present here.
        return SpotifyNowPlayingResponseSchema.parse(data);
      } catch (error) {
        console.error("Error in nowPlaying procedure:", error);
        if (error instanceof z.ZodError) {
          // Specific error for bad data structure
          throw new TRPCError({
            message:
              "Received invalid data structure from Spotify for now playing.",
            code: "INTERNAL_SERVER_ERROR",
            cause: error,
          });
        }
        if (error instanceof TRPCError) throw error;
        // Generic error
        throw new TRPCError({
          message: "Failed to fetch currently playing track from Spotify.",
          code: "INTERNAL_SERVER_ERROR",
          cause: error instanceof Error ? error : undefined,
        });
      }
    },
  ),
});