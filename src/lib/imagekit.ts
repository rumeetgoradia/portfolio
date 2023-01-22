import { env } from "@/env/server.mjs";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: env.IMAGEKIT_PUBLIC_KEY,
  privateKey: env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: env.IMAGEKIT_URL_ENDPOINT,
});

export default imagekit;

export type ImageKitResponse = {
  width: number;
  height: number;
  url: string;
  filePath: string;
};
