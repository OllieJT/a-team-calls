export const prerender = false;
export const ssr = true;

import { EVENT } from '$data/event';
import { PERSON } from '$data/people';
import { SCHEDULE } from '$data/schedule';
import { isPast } from 'date-fns';
import groupBy from 'just-group-by';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const sortedSchedule = SCHEDULE.sort((a, b) => {
		const aTime = a.schedule?.datetime.getTime() || -Infinity;
		const bTime = b.schedule?.datetime.getTime() || -Infinity;
		return aTime - bTime;
	});

	const { future, past } = groupBy(sortedSchedule, (call) => {
		const callTime = call.schedule?.datetime;
		if (!callTime) return 'invalid';

		if (isPast(callTime)) return 'past';
		return 'future';
	});

	return {
		people: Object.values(PERSON),
		events: Object.values(EVENT),
		scheduledEvents: {
			past,
			future,
		},
	};
}) satisfies LayoutServerLoad;
