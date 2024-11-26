import { type TailwindColor, type Timezone } from '$lib/data.constants';
import { generateWeeklyCallDates } from '$lib/data.generate';
import { getMostRecentDate } from '$lib/datetime';
import spacetime from 'spacetime';
import type { Picture } from 'vite-imagetools';

export function createPerson(data: { name: string; image: Picture; url: string }) {
	const url = new URL(data.url);
	url.searchParams.set('utm_source', 'accelerator');
	url.searchParams.set('utm_medium', 'website');
	url.searchParams.set('utm_campaign', 'A-Team-Calls');

	return {
		...data,
		url: url.toString(),
	};
}
export type Person = ReturnType<typeof createPerson>;

export function createEvent(data: {
	type: 'guide' | 'coach';
	module: string[];
	title: string;
	guides: Person[];
	color: TailwindColor;
	cadence: 'Weekly' | 'Monthly';
}) {
	return data;
}
export type Event = ReturnType<typeof createEvent>;

type CallType<D> = { event: Event; schedule: D; hosts?: Person[] | undefined | null };
export type ScheduledCall = {
	event: Event;
	schedule: { datetime: Date; timezone: Timezone } | null;
	hosts: Person[];
};

export function createOneCall({
	schedule: { day, hour, minute, month, year, tz },
	event,
	hosts = null,
}: CallType<{
	hour: number;
	minute: number;
	day: number;
	month: number;
	year: number;
	tz: Timezone;
}>): ScheduledCall {
	const datetime = spacetime({ year, month: month - 1, date: day, hour, minute }, tz).goto('UTC');

	return {
		event,
		schedule: {
			datetime: datetime.toNativeDate(),
			timezone: tz,
		},
		hosts: hosts || event.guides,
	};
}

export function createWeeklyCall({
	schedule: { hour, minute, tz, weekday },
	event,
	hosts = null,
}: CallType<{
	hour: number;
	minute: number;
	weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
	tz: Timezone;
}>): ScheduledCall {
	const weeklyCalls = generateWeeklyCallDates({
		day: weekday,
		hour: hour,
		minute: minute,
		tz: tz,
	});

	const nextCall = getMostRecentDate(weeklyCalls);

	return {
		event,
		schedule: nextCall
			? {
					datetime: nextCall,
					timezone: tz,
				}
			: null,
		hosts: hosts || event.guides,
	};
}
export function createMonthlyCall({
	schedule: { hour, minute, tz, weekday },
	event,
	hosts = null,
}: CallType<{
	hour: number;
	minute: number;
	weekday: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
	tz: Timezone;
}>): ScheduledCall {
	const now = spacetime.now(tz);
	const firstDayOfMonth = now.startOf('month');

	// Convert weekday string to number (0-6)
	const weekdayNum = [
		'sunday',
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
	].indexOf(weekday.toLowerCase());

	// Find first occurrence of weekday in current month
	let targetDate = firstDayOfMonth;
	while (targetDate.day() !== weekdayNum) {
		targetDate = targetDate.add(1, 'day');
	}

	// Set the time
	targetDate = targetDate.hour(hour).minute(minute);

	// If we've already passed this month's occurrence, move to next month
	if (targetDate.isBefore(now)) {
		targetDate = targetDate.add(1, 'month').startOf('month');
		while (targetDate.day() !== weekdayNum) {
			targetDate = targetDate.add(1, 'day');
		}
		targetDate = targetDate.hour(hour).minute(minute);
	}

	const datetime = targetDate.goto('UTC');

	return {
		event,
		schedule: {
			datetime: datetime.toNativeDate(),
			timezone: tz,
		},
		hosts: hosts || event.guides,
	};
}
