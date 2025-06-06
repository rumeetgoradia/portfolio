export interface Track {
  album: {
    name: string;
    external_urls: {
      spotify: string;
    };
    image?: {
      url: string;
      width: number;
      height: number;
    };
  };
  artists: [
    {
      name: string;
      external_urls: {
        spotify: string;
      };
    },
  ];
  external_urls: {
    spotify: string;
  };
  name: string;
}
