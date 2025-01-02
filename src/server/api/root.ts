import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { imagekitRouter } from "~/server/api/routers/imagekit";
import {s3Router} from "~/server/api/routers/s3";
import {plaiceholderRouter} from "~/server/api/routers/plaiceholder";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  imagekit: imagekitRouter,
  s3: s3Router,
  plaiceholder: plaiceholderRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
