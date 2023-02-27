import { router } from "../trpc";
import { imagekitRouter } from "./imagekit";
import { spotifyRouter } from "./spotify";
import { workRouter } from "./work";

export const appRouter = router({
  imageKit: imagekitRouter,
  work: workRouter,
  spotify: spotifyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
