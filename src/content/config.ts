import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string().min(5),
      description: z.string().min(20),
      subtitle: z.string().optional(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      category: z.string().optional(),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      canonical: z.string().url().optional(),
      ogImage: image().optional(),
      readingTime: z.string().optional(),
      author: z
        .object({
          name: z.string(),
          title: z.string().optional(),
          avatar: image().optional(),
        })
        .optional(),
    }),
});

export const collections = { blog };
