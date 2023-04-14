import { router } from "../trpc";
import { contactRouter } from "./contact";
import { imagekitRouter } from "./imagekit";
import { notionRouter } from "./notion";
import { sanityRouter } from "./sanity";
import { spotifyRouter } from "./spotify";

export const appRouter = router({
  imageKit: imagekitRouter,
  work: sanityRouter,
  spotify: spotifyRouter,
  notion: notionRouter,
  contact: contactRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
