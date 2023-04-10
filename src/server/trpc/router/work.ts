import { type Work } from "@/types/sanity.d";
import { groq } from "next-sanity";
import { publicProcedure, router } from "../trpc";

export const workRouter = router({
  featured: publicProcedure.query(async ({ ctx }) => {
    // Up to 3 featured works, in descending order of updated time
    const query = groq`
        *
        [   _type=="work" 
            && isFeatured==true
        ] {   ...,
            categories[] ->
        } | order(_updatedAt desc)[0...3]
    `;

    const featuredWork = await ctx.sanityClient.fetch(query);
    return featuredWork as Work[];
  }),
  all: publicProcedure.query(async ({ ctx }) => {
    const query = groq`
        *
        [   _type=="work" 
        ] {   ...,
            categories[] ->
        } | order(publishedAt desc)
    `;

    const allWork = await ctx.sanityClient.fetch(query);
    return allWork as Work[];
  }),
});
