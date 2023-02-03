import { Work } from "@/types/sanity.d";
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
            builtWith[] ->
        } | order(_updatedAt desc)[0...2]
    `;

    const featuredWork = await ctx.sanityClient.fetch(query);
    return featuredWork as Work[];
  }),
  all: publicProcedure.query(() => {}),
});
