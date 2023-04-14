import { Client } from "@notionhq/client";

import { env } from "@/env/server.mjs";

const { NOTION_KEY } = env;

// Initializing a client
const notionClient = new Client({
  auth: NOTION_KEY,
});

export default notionClient;

export type CurrentlyItem = {
  title: string;
  subtitle?: string;
  tags: string[];
};
