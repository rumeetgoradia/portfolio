import { router } from "../trpc";
import { imagekitRouter } from "./imagekit";
import { workRouter } from "./work";

export const appRouter = router({
  imageKit: imagekitRouter,
  work: workRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
