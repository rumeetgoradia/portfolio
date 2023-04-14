import { clientEnv } from "@/env/schema.mjs";
import { createClient } from "next-sanity";

export const projectId = clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = clientEnv.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = clientEnv.NEXT_PUBLIC_SANITY_API_VERSION;

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
