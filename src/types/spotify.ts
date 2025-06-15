export interface SpotifyImage {
  url: string;
  width: number;
  height: number;
}

export interface Track {
  name: string;
  link: string;
  artists: string[];
  album: {
    name: string;
    image: SpotifyImage;
  };
}
