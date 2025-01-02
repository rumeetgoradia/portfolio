import ImageKit from "imagekit";
import { env } from "~/env";

export const imagekit = new ImageKit({
  publicKey: env.IMAGEKIT_PUBLIC_KEY,
  privateKey: env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: env.IMAGEKIT_URL_ENDPOINT,
});

export type ImageKitResponse = {
  width: number;
  height: number;
  url: string;
  filePath: string;
};
