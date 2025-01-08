import { env } from "~/env";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { NowPlayingTrack, Track } from "~/types/spotify";
import { TRPCError } from "@trpc/server";

const getAccessToken = async (): Promise<{ access_token: string }> => {
  const basic = Buffer.from(
    `${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`,
  ).toString("base64");
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: env.SPOTIFY_REFRESH_TOKEN,
  });

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch access token: ${response.statusText}`);
  }

  return response.json() as Promise<{ access_token: string }>;
};

export const spotifyRouter = createTRPCRouter({
  topTracks: publicProcedure.query(async () => {
    const endpoint = `https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term`;
    const { access_token } = await getAccessToken();

    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      throw new TRPCError({
        message: `Failed to fetch top tracks: ${response.statusText}`,
        code: "INTERNAL_SERVER_ERROR",
      });
    }

    const data: { items: Track[] } = (await response.json()) as {
      items: Track[];
    };
    return data.items.slice(0, 10);
  }),
  nowPlaying: publicProcedure.query(async () => {
    const endpoint = "https://api.spotify.com/v1/me/player/currently-playing";
    const { access_token } = await getAccessToken();

    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!response.ok) {
      throw new TRPCError({
        message: `Failed to fetch now playing: ${response.statusText}`,
        code: "INTERNAL_SERVER_ERROR",
      });
    }

    return (await response.json()) as NowPlayingTrack;
  }),
});
