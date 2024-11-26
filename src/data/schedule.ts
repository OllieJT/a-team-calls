import { EVENT } from '$data/event';
import { PERSON } from '$data/people';
import {
	createMonthlyCall,
	createOneCall,
	createWeeklyCall,
	type ScheduledCall,
} from '$lib/data.create';

export const SCHEDULE = [
	createWeeklyCall({
		event: EVENT.fridayCoaching,
		schedule: {
			weekday: 'friday',
			hour: 12,
			minute: 0,
			tz: 'America/Los_Angeles',
		},
	}),

	// A02
	createMonthlyCall({
		event: EVENT.A02,
		schedule: {
			weekday: 'monday',
			hour: 13,
			minute: 0,
			tz: 'America/Los_Angeles',
		},
	}),

	// A03
	createMonthlyCall({
		event: EVENT.A03,
		schedule: {
			weekday: 'wednesday',
			hour: 12,
			minute: 0,
			tz: 'America/Los_Angeles',
		},
		hosts: [PERSON.stephen, PERSON.monte],
	}),

	// A04 + A06
	createMonthlyCall({
		event: EVENT.A04_A06,
		schedule: {
			weekday: 'wednesday',
			hour: 10,
			minute: 30,
			tz: 'America/Los_Angeles',
		},
	}),

	// A07
	createOneCall({
		event: EVENT.A07,
		schedule: {
			day: 3,
			month: 12,
			year: 2024,
			hour: 10,
			minute: 0,
			tz: 'America/Los_Angeles',
		},
	}),
] satisfies ScheduledCall[];
