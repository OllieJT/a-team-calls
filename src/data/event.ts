import { PERSON } from '$data/people';
import { createEvent, type Event } from '$lib/data.create';

export const EVENT = {
	fridayCoaching: createEvent({
		type: 'coach',
		title: 'Community Coaching',
		guides: [PERSON.ben, PERSON.stephanie],
		color: 'blue',
		cadence: 'Weekly',
	}),
	A01: createEvent({
		type: 'guide',
		title: 'Getting Started',
		color: 'blue',
		guides: [PERSON.lisa],
		cadence: 'Monthly',
	}),
	A02: createEvent({
		type: 'guide',
		title: 'Portfolio Building',
		guides: [PERSON.xavier],
		color: 'orange',
		cadence: 'Monthly',
	}),
	A03: createEvent({
		type: 'guide',
		title: 'Case Studies & Capabilities',
		guides: [PERSON.stephen],
		color: 'yellow',
		cadence: 'Monthly',
	}),
	A04_A06: createEvent({
		type: 'guide',
		title: 'Networking and Outreach',
		guides: [PERSON.tony, PERSON.zach],
		color: 'lime',
		cadence: 'Monthly',
	}),
	A05: createEvent({
		type: 'guide',
		title: 'Business Foundations',
		guides: [PERSON.jenny, PERSON.monte],
		color: 'fuchsia',
		cadence: 'Monthly',
	}),
	A07: createEvent({
		type: 'guide',
		title: 'Portfolio Website',
		guides: [PERSON.ollie],
		color: 'rose',
		cadence: 'Monthly',
	}),
} satisfies Record<string, Event>;
