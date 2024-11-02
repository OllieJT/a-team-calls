export const TIMEZONE = [
	'America/Los_Angeles',
	'America/New_York',
	'Europe/London',
	'Europe/Paris',
] as const;
export type Timezone = (typeof TIMEZONE)[number];

export const TAILWIND_COLOR = [
	// 'red',
	'orange',
	// 'amber',
	'yellow',
	'lime',
	// 'green',
	// 'emerald',
	'teal',
	// 'cyan',
	// 'sky',
	'blue',
	// 'indigo',
	'violet',
	// 'purple',
	'fuchsia',
	// 'pink',
	'rose',
];
export type TailwindColor = (typeof TAILWIND_COLOR)[number];
