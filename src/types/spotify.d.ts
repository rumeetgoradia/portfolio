export interface Track {
  album: {
    name: string;
    type: "album";
    external_urls: {
      spotify: string;
    };
  };
  artists: [
    {
      name: string;
      external_urls: {
        spotify: string;
      };
      type: "artist";
    }
  ];
  external_urls: {
    spotify: string;
  };
  name: string;
  type: "track";
}

export interface NowPlayingTrack {
  currently_playing_type: "track" | "podcast";
  is_playing: boolean;
  item: Track;
}
