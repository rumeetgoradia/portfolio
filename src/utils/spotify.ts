export const getSpotifyUrl = (track: {
  external_urls: { spotify: string };
}): string => {
  return track?.external_urls?.spotify || "https://spotify.com";
};

export const getJoinedArtists = (track: {
  artists: [{ name: string }];
}): string => {
  return track?.artists.map((a) => a.name).join(", ") || "";
};
