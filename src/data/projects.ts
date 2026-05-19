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
		title: 'Netflix Resume',
		description: 'Interactive Netflix-style portfolio and resume.',
		tags: ['React', 'TypeScript', 'Vite'],
		postUrl: '/projects/netflix-resume',
		liveUrl: 'https://resume.danpa.dev',
	},
];

/** Home page shows the first N projects from the same list. */
export const homeProjectCount = 3;

/** Resolve listing metadata for a project detail page by URL slug. */
export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.postUrl === `/projects/${slug}`);
}
