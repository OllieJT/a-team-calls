import { PERSON } from '$data/people';
import { createEvent, type Event } from '$lib/data.create';

export const EVENT = {
	fridayCoaching: createEvent({
		type: 'coach',
		module: [],
		title: 'Community Coaching',
		guides: [PERSON.ben, PERSON.stephanie],
		color: 'blue',
		cadence: 'Weekly',
	}),
	A01: createEvent({
		type: 'guide',
		module: ['A01'],
		title: 'Getting Started',
		color: 'blue',
		guides: [PERSON.lisa],
		cadence: 'Monthly',
	}),
	A02: createEvent({
		type: 'guide',
		module: ['A02'],
		title: 'Portfolio Building',
		guides: [PERSON.xavier],
		color: 'orange',
		cadence: 'Monthly',
	}),
	A03: createEvent({
		type: 'guide',
		module: ['A03'],
		title: 'Case Studies & Capabilities',
		guides: [PERSON.stephen],
		color: 'yellow',
		cadence: 'Monthly',
	}),
	A04_A06: createEvent({
		type: 'guide',
		module: ['A04', 'A06'],
		title: 'Networking and Outreach',
		guides: [PERSON.tony, PERSON.zach],
		color: 'lime',
		cadence: 'Monthly',
	}),
	A05: createEvent({
		type: 'guide',
		module: ['A05'],
		title: 'Business Foundations',
		guides: [PERSON.jenny, PERSON.monte],
		color: 'fuchsia',
		cadence: 'Monthly',
	}),
	A07: createEvent({
		type: 'guide',
		module: ['A07'],
		title: 'Portfolio Website',
		guides: [PERSON.ollie],
		color: 'rose',
		cadence: 'Monthly',
	}),
} satisfies Record<string, Event>;
