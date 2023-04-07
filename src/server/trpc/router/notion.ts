import { env } from "@/env/server.mjs";
import { type CurrentlyItem } from "@/lib/notion";
import { publicProcedure, router } from "../trpc";

const { NOTION_READING_DB_ID, NOTION_WATCHING_DB_ID } = env;

export const notionRouter = router({
  currentlyReading: publicProcedure.query(async ({ ctx: { notionClient } }) => {
    const { results } = await notionClient.databases.query({
      database_id: NOTION_READING_DB_ID,
      filter: {
        property: "Status",
        select: {
          equals: "In Progress",
        },
      },
      sorts: [
        {
          property: "Status",
          timestamp: "last_edited_time",
          direction: "descending",
        },
      ],
    });

    try {
      const currentlyReading: CurrentlyItem[] = [];
      results.forEach((result) => {
        currentlyReading.push({
          // @ts-ignore
          title: result.properties["Title"].title[0]["plain_text"],
          // @ts-ignore
          subtitle: result.properties["Author"]["rich_text"][0]["plain_text"],
          // @ts-ignore
          tags: result.properties["Genre"]["multi_select"].map(
            (genreObject: { name: string }) => genreObject.name
          ),
        });
      });

      return currentlyReading;
    } catch (e) {
      console.error("Could not fetch currently reading from Notion", e);
      return [] as CurrentlyItem[];
    }
  }),
  currentlyWatching: publicProcedure.query(
    async ({ ctx: { notionClient } }) => {
      const { results } = await notionClient.databases.query({
        database_id: NOTION_WATCHING_DB_ID,
        filter: {
          property: "Status",
          select: {
            equals: "In Progress",
          },
        },
        sorts: [
          {
            property: "Status",
            timestamp: "last_edited_time",
            direction: "ascending",
          },
        ],
      });

      try {
        const currentlyReading: CurrentlyItem[] = [];
        results.forEach((result) => {
          currentlyReading.push({
            // @ts-ignore
            title: result.properties["Title"].title[0]["plain_text"],
            // @ts-ignore
            subtitle: result.properties["Platform"].select?.name,
            // @ts-ignore
            tags: result.properties["Genre"]["multi_select"].map(
              (genreObject: { name: string }) => genreObject.name
            ),
          });
        });

        return currentlyReading;
      } catch (e) {
        console.error("Could not fetch currently reading from Notion", e);
        return [] as CurrentlyItem[];
      }
    }
  ),
});
