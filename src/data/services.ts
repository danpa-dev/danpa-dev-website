export type Service = {
	title: string;
	description: string;
};

/** Home-page consulting offerings (no detail routes). */
export const services: Service[] = [
	{
		title: 'Healthtech Integrations',
		description:
			'Untangle the handoffs between healthcare systems, vendor APIs, files, internal tools, and downstream data workflows. Make integrations easier to understand, monitor, debug, and improve.',
	},
	{
		title: 'Data & Operational Workflows',
		description:
			'Strengthen the data workflows that reporting, operations, and decision-making depend on. Reduce brittle pipelines, unclear cleanup steps, and recurring fixes that slow the team down.',
	},
	{
		title: 'Internal Tools & Automation',
		description:
			'Build practical internal software for work that has outgrown spreadsheets, manual checks, or one-off scripts. Focused tools that save time, reduce mistakes, and fit the way the team already works.',
	},
	{
		title: 'AI-Assisted Team Workflows',
		description:
			'Bring AI into engineering and operational workflows in a way people can actually trust. Useful context, clear review habits, documentation, and approval points around real team processes.',
	},
];

export const bookingCallUrl = 'https://calendar.app.google/gzidTQLoDv7DLnGz5';
