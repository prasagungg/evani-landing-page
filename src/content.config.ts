import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const eventsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    location: z.string(),
    coverImage: z.string(),
    tags: z.array(z.string()),
    isUpcoming: z.boolean(),
  }),
});

const articlesCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  'events': eventsCollection,
  'articles': articlesCollection,
};
