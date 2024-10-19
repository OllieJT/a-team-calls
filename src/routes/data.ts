import ben from '$images/ben-burns.jpeg?enhanced';
import stephanie from '$images/stephanie-owens.jpeg?enhanced';
import xavier from '$images/xavier-ah-hot.jpeg?enhanced';
import { getMostRecentDate } from '$lib/datetime';
import { differenceInMinutes } from 'date-fns';
import spacetime from 'spacetime';
import type { Picture } from 'vite-imagetools';

const timezone = {
	PST: 'America/Los_Angeles',
	EST: 'America/New_York',
	London: 'Europe/London',
	Paris: 'Europe/Paris'
} as const;
export type Timezone = (typeof timezone)[keyof typeof timezone];

export type Color = 'primary' | 'orange';

function friday_calls(): Date[] {
	const nearest = spacetime(new Date(), timezone.PST).day('friday').hour(12).minute(0).second(0);
	const next = nearest.clone().add(1, 'week');
	return [nearest.toNativeDate(), next.toNativeDate()];
}

function xavier_calls(): Date[] {
	const now = new Date();
	// set now date to first of the month
	now.setDate(1);

	const nearest = spacetime(now, timezone.PST)
		.startOf('month')
		.day('monday')
		.add(3, 'week')
		.hour(13)
		.minute(0)
		.second(0);
	const next = nearest.clone().add(4, 'week');

	return [nearest.toNativeDate(), next.toNativeDate()];
}

export type Person = {
	name: string;
	image: Picture;
	url: string;
};

export const PERSON = {
	ben: {
		name: 'Ben Burns',
		image: ben,
		url: 'https://mrbenburns.com'
	},
	stephanie: {
		name: 'Stephanie Owens',
		image: stephanie,
		url: 'https://goldsheepdesign.com'
	},
	xavier: {
		name: 'Xavier Ah-Hot',
		image: xavier,
		url: 'https://www.ahhotman.com'
	}
} satisfies Record<string, Person>;

export type Event = {
	type: 'guide' | 'coach';
	title: string;
	authors: Person[];
	date: Date | null;
	timezone: Timezone;
	color: Color;
};

export const EVENTS = (
	[
		{
			type: 'coach',
			title: 'Community Coaching',
			authors: [PERSON.ben, PERSON.stephanie],
			date: getMostRecentDate(friday_calls()),
			timezone: timezone.PST,
			color: 'primary'
		},
		{
			type: 'guide',
			title: 'Module 2 Monthly Meeting',
			authors: [PERSON.xavier],
			date: getMostRecentDate(xavier_calls()),
			timezone: timezone.PST,
			color: 'orange'
		}
	] satisfies Event[]
).map((event) => {
	return {
		...event,
		minutes_until: differenceInMinutes(event.date || new Date(), new Date())
	};
});
