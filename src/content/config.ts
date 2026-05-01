import { defineCollection, z } from 'astro:content';

/**
 * Essays and longform — `src/content/writings/*.md` → /writings/[slug]
 */
const writings = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		tags: z.array(z.string()).default([]),
	}),
});

/**
 * Project case studies — `src/content/project/*.md` → /projects/[slug]
 * Card copy and live URLs live in `src/data/projects.ts`; slug must match filename.
 */
const project = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		tags: z.array(z.string()).default([]),
		/** Short line under the title (e.g. role or timeframe). */
		context: z.string().optional(),
	}),
});

export const collections = { writings, project };
