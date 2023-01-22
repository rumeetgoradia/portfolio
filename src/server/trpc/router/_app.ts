import { router } from "../trpc";
import { imagekitRouter } from "./imagekit";

export const appRouter = router({
  imageKit: imagekitRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
