import { getAccessToken } from "@/lib/spotify";
import { NowPlayingTrack } from "@/types/spotify";
import { publicProcedure, router } from "../trpc";

export const spotifyRouter = router({
  nowPlaying: publicProcedure.query(async () => {
    const endpoint = "https://api.spotify.com/v1/me/player/currently-playing";
    const { access_token } = await getAccessToken();

    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    try {
      const data: NowPlayingTrack = await response.json();
      return data;
    } catch (e) {
      return undefined;
    }
  }),
  topTracks: publicProcedure.query(async () => {
    const endpoint = "https://api.spotify.com/v1/me/top/tracks";
    const { access_token } = await getAccessToken();

    return await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }),
});
