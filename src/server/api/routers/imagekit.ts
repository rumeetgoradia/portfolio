import type { ImageKitResponse } from "~/server/imagekit";
import { createTRPCRouter, publicProcedure } from "../trpc";

import { imagekit } from "~/server/imagekit";
import { z } from "zod";

export const imagekitRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ directory: z.enum(["carousel", "work"]) }))
    .query(async ({ input: { directory } }) => {
      return await Promise.all(
        (await imagekit.listFiles({
          path: directory,
        })) as ImageKitResponse[],
      );
    }),
});
