import { env } from "~/env";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { type Track } from "~/types/spotify";

interface CachedToken {
  access_token: string;
  expires_at: number;
}

type NowPlayingResult = {
  is_playing: boolean;
  item: Track | null;
  currently_playing_type: "track" | "episode" | "ad" | "unknown" | null;
};

// Zod Schemas
const SpotifyTrackSchema = z.object({
  id: z.string(),
  name: z.string(),
  artists: z
    .array(
      z.object({
        name: z.string(),
        external_urls: z.object({ spotify: z.string().url() }),
      }),
    )
    .min(1),
  album: z.object({
    name: z.string(),
    external_urls: z.object({ spotify: z.string().url() }),
    images: z
      .array(
        z.object({
          url: z.string().url(),
          width: z.number(),
          height: z.number(),
        }),
      )
      .optional(),
  }),
  external_urls: z.object({
    spotify: z.string().url(),
  }),
});

const SpotifyTopTracksResponseSchema = z.object({
  items: z.array(SpotifyTrackSchema),
});

const SpotifyNowPlayingResponseSchema = z.object({
  is_playing: z.boolean(),
  item: SpotifyTrackSchema.nullable(),
  currently_playing_type: z.enum(["track", "episode", "ad", "unknown"]),
});

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

// Helper function to transform Zod-validated track to your Track interface
const transformToTrack = (
  spotifyTrack: z.infer<typeof SpotifyTrackSchema>,
): Track => ({
  name: spotifyTrack.name,
  artists: spotifyTrack.artists.map((artist) => ({
    name: artist.name,
    external_urls: artist.external_urls,
  })) as Track["artists"],
  album: {
    name: spotifyTrack.album.name,
    external_urls: spotifyTrack.album.external_urls,
    image:
      spotifyTrack.album.images && spotifyTrack.album.images.length > 0
        ? spotifyTrack.album.images[0]
        : undefined,
  },
  external_urls: spotifyTrack.external_urls,
});

// Router
export const spotifyRouter = createTRPCRouter({
  topTracks: publicProcedure.query(async (): Promise<Track[]> => {
    try {
      const accessToken = await getValidAccessToken();
      const endpoint =
        "https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term";

      const data = await fetchSpotifyAPI<unknown>(endpoint, accessToken);
      const validatedData = SpotifyTopTracksResponseSchema.parse(data);

      return validatedData.items.map(transformToTrack);
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

  nowPlaying: publicProcedure.query(async (): Promise<NowPlayingResult> => {
    try {
      const accessToken = await getValidAccessToken();
      const endpoint = "https://api.spotify.com/v1/me/player/currently-playing";

      const data = await fetchSpotifyAPI<unknown>(endpoint, accessToken);

      if (data === null) {
        return {
          is_playing: false,
          item: null,
          currently_playing_type: null,
        };
      }

      const validatedData = SpotifyNowPlayingResponseSchema.parse(data);

      return {
        is_playing: validatedData.is_playing,
        item: validatedData.item ? transformToTrack(validatedData.item) : null,
        currently_playing_type: validatedData.currently_playing_type,
      };
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
