export interface Track {
  album: {
    name: string;
    external_urls: {
      spotify: string;
    };
  };
  artists: {
    name: string;
    external_urls: {
      spotify: string;
    };
  }[];
  external_urls: {
    spotify: string;
  };
  name: string;
}

export interface NowPlayingTrack {
  currently_playing_type: "track" | "podcast";
  is_playing: boolean;
  item: Track;
}
