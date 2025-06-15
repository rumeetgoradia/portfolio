import type { Track, Artist } from "~/types/spotify";

export const getSpotifyUrl = (track: Track | null): string => {
  if (!track) {
    return "https://open.spotify.com";
  }

  return track.link ?? "https://open.spotify.com";
};

export const getJoinedArtists = (track: Track | null): string => {
  if (!track?.artists?.length) {
    return "";
  }

  return track.artists.join(", ");
};

