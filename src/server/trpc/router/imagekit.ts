import type { CarouselImage } from "@/components/Home";
import { type ImageKitResponse } from "@/lib/imagekit";
import { publicProcedure, router } from "../trpc";

export const imagekitRouter = router({
  carousel: publicProcedure.query(async ({ ctx: { imagekitClient } }) => {
    const carouselImages: CarouselImage[] = [];
    await imagekitClient
      .listFiles({
        path: "carousel",
      })
      .then(async (result: ImageKitResponse[]) => {
        for (const item of result) {
          const { width, height, url } = item;
          carouselImages.push({
            src: url,
            width,
            height,
          });
        }
      })
      .catch((error: any) => console.error(error));

    return carouselImages;
  }),
});
