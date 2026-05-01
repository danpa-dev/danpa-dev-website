export type Project = {
	title: string;
	description: string;
	tags: string[];
	postUrl: string;
	liveUrl: string;
};

/** All projects; order matches the projects listing page. */
export const projects: Project[] = [
	{
		title: 'Project Atlas',
		description: 'Edge-rendered UI with Astro and Vercel.',
		tags: ['Astro', 'Vercel', 'Edge UI'],
		postUrl: '/blog/project-atlas',
		liveUrl: 'https://example.com',
	},
	{
		title: 'Neon Grove',
		description: 'Realtime data layer powered by Supabase.',
		tags: ['Supabase', 'API', 'Realtime'],
		postUrl: '/blog/neon-grove',
		liveUrl: 'https://example.com',
	},
	{
		title: 'Signal Raft',
		description: 'Static documentation and reference site.',
		tags: ['Cloudflare', 'Static', 'Docs'],
		postUrl: '/blog/signal-raft',
		liveUrl: 'https://example.com',
	},
	{
		title: 'Juniper Studio',
		description: 'Lightweight CMS for design content.',
		tags: ['Netlify', 'Design', 'CMS'],
		postUrl: '/blog/juniper-studio',
		liveUrl: 'https://example.com',
	},
];

/** Home page shows the first N projects from the same list. */
export const homeProjectCount = 3;
