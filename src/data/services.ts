export type Service = {
	title: string;
	description: string;
};

/** Home-page consulting offerings (no detail routes). */
export const services: Service[] = [
	{
		title: 'Healthtech Integrations',
		description:
			'Make healthcare integrations less painful to run and improve. Untangle messy handoffs between vendor EHR systems and client systems to create reliable healthcare data movement.',
	},
	{
		title: 'Data Infrastructure & Workflow Automation',
		description:
			'Build and improve backend systems for large-scale data work: ETL pipelines, internal APIs, CI/CD, observability, and workflow automation for data, forecasting, and operations teams.',
	},
	{
		title: 'Internal Tools & Automation',
		description:
			'Replace time-consuming, repetitive manual work with automated tools. Create practical software that saves time, reduces avoidable mistakes, and fits the way the team already works.',
	},
	{
		title: 'AI-Assisted Team Workflows',
		description:
			'Bring AI agents into real team workflows in a way that is reliable, useful, and easy to trust. Focus on practical adoption, clear review points, strong context, and measurable value in day-to-day work.',
	},
];

export const bookingCallUrl = 'https://calendar.app.google/gzidTQLoDv7DLnGz5';
