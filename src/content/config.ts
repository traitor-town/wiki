// @ts-ignore
import { defineCollection, z } from "astro:content";

const maps = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      creators: z.string(),
      image: image(),
    }),
});

export const collections = { maps };
