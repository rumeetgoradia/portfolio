import { env } from "~/env";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { type Artist, type Track } from "~/types/spotify";

interface CachedToken {
  access_token: string;
  expires_at: number;
}

// Zod Schemas
const SpotifyApiImagesSchema = z.array(
  z.object({
    url: z.string().url(),
    height: z.number(),
    width: z.number(),
  }),
);

const SpotifyApiArtistSchema = z.object({
  name: z.string(),
});

const SpotifyApiTrackSchema = z.object({
  id: z.string(),
  name: z.string(),
  artists: z.array(SpotifyApiArtistSchema),
  album: z.object({
    name: z.string(),
    external_urls: z.object({ spotify: z.string().url() }),
    images: SpotifyApiImagesSchema,
  }),
  external_urls: z.object({
    spotify: z.string().url(),
  }),
});

const SpotifyApiNowPlayingSchema = z.discriminatedUnion("is_playing", [
  z.object({
    is_playing: z.literal(true),
    currently_playing_type: z.literal("track"),
    item: SpotifyApiTrackSchema,
  }),
  z.object({
    is_playing: z.literal(false),
  }),
]);

// Token Management
let tokenCache: CachedToken | null = null;

const getValidAccessToken = async (): Promise<string> => {
  const now = Date.now();
  if (tokenCache && tokenCache.expires_at > now + 60000) {
    return tokenCache.access_token;
  }

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
      const errorText = await response.text();
      console.error(
        `Spotify Token Error: ${response.status} ${response.statusText}`,
        errorText,
      );
      throw new Error("Failed to refresh Spotify token");
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
    throw new Error("Could not obtain Spotify access token");
  }
};

// API Helper
async function fetchSpotifyAPI<T>(
  endpoint: string,
  accessToken: string,
  options: RequestInit = {},
): Promise<T | null> {
  const response = await fetch(endpoint, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (response.status === 204) return null;

  if (!response.ok) {
    const errorText = await response.text();
    console.error(
      `Spotify API Error: ${response.status} ${response.statusText}`,
      errorText,
    );
    throw new TRPCError({
      message: `Spotify API request failed: ${response.statusText} (Status: ${response.status})`,
      code: "INTERNAL_SERVER_ERROR",
    });
  }

  return (await response.json()) as T;
}

const mapTrack = (
  spotifyTrack: z.infer<typeof SpotifyApiTrackSchema>,
): Track => {
  return {
    name: spotifyTrack.name,
    artists: spotifyTrack.artists.map((a) => a.name),
    album: {
      name: spotifyTrack.album.name,
      image: {
        url: spotifyTrack.album.images[0].url,
        width: spotifyTrack.album.images[0].width,
        height: spotifyTrack.album.images[0].height,
      },
    },
    link: spotifyTrack.external_urls.spotify,
  };
};

// Router
export const spotifyRouter = createTRPCRouter({
  topTracks: publicProcedure
    .input(z.object({ limit: z.number() }))
    .query(async ({ input: { limit } }): Promise<Track[]> => {
      try {
        const accessToken = await getValidAccessToken();
        const endpoint = `https://api.spotify.com/v1/me/top/tracks?limit=${limit}&time_range=short_term`;

        const data = await fetchSpotifyAPI<unknown>(endpoint, accessToken);
        const validatedData = z
          .object({ items: z.array(SpotifyApiTrackSchema) })
          .parse(data);

        return validatedData.items.map(mapTrack);
      } catch (error) {
        console.error("Error in topTracks procedure:", error);

        if (error instanceof z.ZodError) {
          throw new TRPCError({
            message:
              "Received invalid data structure from Spotify for top tracks",
            code: "INTERNAL_SERVER_ERROR",
            cause: error,
          });
        }

        if (error instanceof TRPCError) throw error;

        throw new TRPCError({
          message: "Failed to fetch top tracks from Spotify",
          code: "INTERNAL_SERVER_ERROR",
          cause: error instanceof Error ? error : undefined,
        });
      }
    }),

  nowPlaying: publicProcedure.query(async (): Promise<Track | null> => {
    try {
      const accessToken = await getValidAccessToken();
      const endpoint = "https://api.spotify.com/v1/me/player/currently-playing";

      const data = await fetchSpotifyAPI<unknown>(endpoint, accessToken);

      if (data === null) {
        return null;
      }

      const validatedData = SpotifyApiNowPlayingSchema.safeParse(data);
      console.log(validatedData.error);

      if (validatedData.success && validatedData.data.is_playing) {
        return mapTrack(validatedData.data.item);
      }

      return null;
    } catch (error) {
      console.error("Error in nowPlaying procedure:", error);

      if (error instanceof z.ZodError) {
        throw new TRPCError({
          message:
            "Received invalid data structure from Spotify for now playing",
          code: "INTERNAL_SERVER_ERROR",
          cause: error,
        });
      }

      if (error instanceof TRPCError) throw error;

      throw new TRPCError({
        message: "Failed to fetch currently playing track from Spotify",
        code: "INTERNAL_SERVER_ERROR",
        cause: error instanceof Error ? error : undefined,
      });
    }
  }),
});
