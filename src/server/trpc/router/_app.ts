import { router } from "../trpc";
import { contactRouter } from "./contact";
import { imagekitRouter } from "./imagekit";
import { notionRouter } from "./notion";
import { currentliesRouter, workRouter } from "./sanity";
import { spotifyRouter } from "./spotify";

export const appRouter = router({
  imageKit: imagekitRouter,
  work: workRouter,
  currentlies: currentliesRouter,
  spotify: spotifyRouter,
  notion: notionRouter,
  contact: contactRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
