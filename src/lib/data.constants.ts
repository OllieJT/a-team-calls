export const TIMEZONE = [
	'America/Los_Angeles',
	'America/New_York',
	'Europe/London',
	'Europe/Paris',
] as const;
export type Timezone = (typeof TIMEZONE)[number];

export const TIMEZONE_LABEL = {
	'America/Los_Angeles': 'PST',
	'America/New_York': 'EST',
	'Europe/London': 'BST',
	'Europe/Paris': 'CET',
} satisfies Record<Timezone, string>;

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
