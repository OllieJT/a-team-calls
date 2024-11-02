import { EVENT } from '$data/event';
import { PERSON } from '$data/people';
import { createOneCall, createWeeklyCall, type ScheduledCall } from '$lib/data.create';

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
	createOneCall({
		event: EVENT.A02,
		schedule: {
			day: 6,
			month: 11,
			year: 2024,
			hour: 13,
			minute: 30,
			tz: 'America/Los_Angeles',
		},
	}),
	createOneCall({
		event: EVENT.A02,
		schedule: {
			day: 21,
			month: 10,
			year: 2024,
			hour: 13,
			minute: 0,
			tz: 'America/Los_Angeles',
		},
	}),

	// A03
	createOneCall({
		event: EVENT.A03,
		schedule: {
			day: 6,
			month: 11,
			year: 2024,
			hour: 12,
			minute: 0,
			tz: 'America/Los_Angeles',
		},
		hosts: [PERSON.stephen, PERSON.monte],
	}),

	// A04 + A06
	createOneCall({
		event: EVENT.A04_A06,
		schedule: {
			day: 6,
			month: 11,
			year: 2024,
			hour: 10,
			minute: 30,
			tz: 'America/Los_Angeles',
		},
	}),
] satisfies ScheduledCall[];
