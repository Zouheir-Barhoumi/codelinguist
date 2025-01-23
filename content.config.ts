import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        title: z.string(),
        date: z.string(),
        draft: z.boolean(),
        excerpt: z.string(),
        slug: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
      }),
    }),
  },
});
