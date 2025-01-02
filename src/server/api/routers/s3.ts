import { createTRPCRouter, publicProcedure } from "../trpc";

import { s3, Bucket } from "~/server/s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { z } from "zod";
import { GetObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { getPlaiceholder } from "plaiceholder";

export const s3Router = createTRPCRouter({
  images: publicProcedure
    .input(z.object({ directory: z.enum(["carousel", "work"]) }))
    .query(async ({ input: { directory } }) => {
      const listBucketReq = new ListObjectsV2Command({
        Bucket,
        Prefix: directory + "/",
      });

      const listContents = (await s3.send(listBucketReq))?.Contents ?? [];

      return await Promise.all(
        listContents
          .filter((content) => content.Key !== directory + "/")
          .map(async (content) => {
            const getObjectReq = new GetObjectCommand({
              Key: content.Key,
              Bucket,
            });

            const src = await getSignedUrl(s3, getObjectReq, {
              expiresIn: 60 * 60,
            });

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
      );
    }),
});
