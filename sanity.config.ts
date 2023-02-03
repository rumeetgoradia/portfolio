import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { clientEnv } from "@/env/schema.mjs";
import { codeInput } from "@sanity/code-input";
import { schemaTypes } from "./sanity/schemas";

const projectId = clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = clientEnv.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Rumeet_Goradia_Portfolio_Studio",
  title: "Portfolio Studio",
  projectId,
  dataset,

  plugins: [deskTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
});
