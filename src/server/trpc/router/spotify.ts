import { TOP_TRACKS_LIMIT } from "@/constants/spotify";
import { getAccessToken } from "@/lib/spotify";
import { type NowPlayingTrack, type Track } from "@/types/spotify";
import { publicProcedure, router } from "../trpc";

export const spotifyRouter = router({
  nowPlaying: publicProcedure.query(async () => {
    const endpoint = "https://api.spotify.com/v1/me/player/currently-playing";
    const { access_token } = await getAccessToken();

    try {
      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const data: NowPlayingTrack = await response.json();
      return data;
    } catch (e) {
      return null;
    }
  }),
  topTracks: publicProcedure.query(async () => {
    const endpoint = `https://api.spotify.com/v1/me/top/tracks?limit=${TOP_TRACKS_LIMIT}&time_range=short_term`;
    const { access_token } = await getAccessToken();

    const body = new URLSearchParams();
    body.append("limit", TOP_TRACKS_LIMIT.toString());
    body.append("time_range", "short_term");
    try {
      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        // body,
      });

      const data: { items: Track[] } = await response.json();
      return data.items.slice(0, TOP_TRACKS_LIMIT);
    } catch (e) {
      console.error("Encountered error when fetching top tracks", e);
      return null;
    }
  }),
});
