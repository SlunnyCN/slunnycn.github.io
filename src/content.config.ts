
import { defineCollection } from 'astro:content';

import { glob, file } from 'astro/loaders';

import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hasGithub: z.boolean(),
    githubLink: z.url().optional(),
    hasExternal: z.boolean(),
    externalLink: z.url().optional(),
    associatedDate: z.date(),
    image: z.string(),
  }),
});

export const collections = { projects };