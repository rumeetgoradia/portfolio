import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { getPlaiceholder } from "plaiceholder";

export const plaiceholderRouter = createTRPCRouter({
  process: publicProcedure
    .input(z.object({ src: z.string().url() }))
    .query(async ({ input: { src } }) => {
      const buffer = await fetch(src).then(async (res) =>
        Buffer.from(await res.arrayBuffer()),
      );

      const {
        metadata: { height, width },
        ...plaiceholder
      } = await getPlaiceholder(buffer, { size: 10 });

      return {
        ...plaiceholder,
        src,
        height,
        width,
      };
    }),
});
