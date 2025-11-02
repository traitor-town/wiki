// @ts-ignore
import { defineCollection, z } from "astro:content";

const maps = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    creators: z.string(),
    authors: z.array(
      z.object({
        name: z.string(),
        slug: z.string(),
        avatar: z.string(),
      })
    ),
  }),
});

export const collections = { maps };
