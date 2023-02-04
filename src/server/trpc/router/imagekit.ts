import type { CarouselImage } from "@/components/Home";
import imagekit, { type ImageKitResponse } from "@/lib/imagekit";
import { getPlaiceholder } from "plaiceholder";

import { publicProcedure, router } from "../trpc";

export const imagekitRouter = router({
  carousel: publicProcedure.query(async () => {
    const carouselImages: CarouselImage[] = [];
    await imagekit
      .listFiles({
        path: "carousel",
      })
      .then(async (result: ImageKitResponse[]) => {
        for (const item of result) {
          const { width, height, url } = item;
          const { base64 } = await getPlaiceholder(url);
          carouselImages.push({
            src: url,
            width,
            height,
            blurDataUrl: base64,
          });
        }
      })
      .catch((error: any) => console.error(error));

    return carouselImages;
  }),
});