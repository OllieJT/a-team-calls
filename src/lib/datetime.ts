import {
	addDays,
	addMonths,
	differenceInHours,
	getDaysInMonth,
	isAfter,
	isFriday,
	nextFriday,
	setDay,
	startOfDay
} from 'date-fns';

type Timestamp = `${number}${number}:${number}${number}`;

/**
 * Gets the next two occurrences of a weekly event.
 * @param eventTime - Time of the event in 'HH:MM' format.
 * @param timezone - The timezone of the event, e.g., 'America/New_York'.
 */
export function getNextFridayEvents({
	eventTime,
	timezone
}: {
	eventTime: Timestamp;
	timezone: string;
}): Date[] {
	const now = new Date();

	// Calculate next occurrence of the day (like Friday)
	const nextOccurrence = isFriday(now) ? now : nextFriday(now);

	// Convert time string to Date object
	const [hours, minutes] = eventTime.split(':').map(Number);
	nextOccurrence.setHours(hours, minutes);

	const firstOccurrence = new Date(nextOccurrence.getTime());

	// Calculate the following occurrence by adding 7 days
	const secondOccurrence = addDays(nextOccurrence, 7);

	// Return an array of the next two occurrences in the local timezone.
	return [
		new Date(firstOccurrence.toLocaleString('en-US', { timeZone: timezone })),
		new Date(secondOccurrence.toLocaleString('en-US', { timeZone: timezone }))
	];
}

/**
 * Gets the next two occurrences of a monthly event.
 * @param weekday - The weekday for the event (0 = Sunday, 1 = Monday, ..., 6 = Saturday).
 * @param weekNumber - The week of the month for the event (1st week = 1, 2nd week = 2, ..., 4th week = 4).
 * @param eventTime - Time of the event in 'HH:MM' format.
 * @param timezone - The timezone of the event, e.g., 'America/New_York'.
 */
export function getNextMonthlyEvents({
	eventTime,
	timezone,
	weekNumber,
	weekday
}: {
	weekday: number;
	weekNumber: number;
	eventTime: Timestamp;
	timezone: string;
}): Date[] {
	const now = new Date();

	// Find the first occurrence (3rd Tuesday of the current or next month)
	let nextOccurrence = getNthWeekdayOfMonth(now, weekday, weekNumber);

	if (nextOccurrence < now) {
		nextOccurrence = getNthWeekdayOfMonth(addMonths(now, 1), weekday, weekNumber);
	}

	// Convert time string to Date object
	const [hours, minutes] = eventTime.split(':').map(Number);
	nextOccurrence.setHours(hours, minutes);

	const firstOccurrence = new Date(nextOccurrence.getTime());

	// Calculate the next month's occurrence
	const secondOccurrence = getNthWeekdayOfMonth(addMonths(firstOccurrence, 1), weekday, weekNumber);
	secondOccurrence.setHours(hours, minutes);

	return [
		new Date(firstOccurrence.toLocaleString('en-US', { timeZone: timezone })),
		new Date(secondOccurrence.toLocaleString('en-US', { timeZone: timezone }))
	];
}

/**
 * Helper function to get the Nth occurrence of a weekday in a given month.
 * @param date - The starting date (usually current date).
 * @param dayOfWeek - The day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday).
 * @param n - The occurrence of the weekday (1st, 2nd, 3rd, etc.).
 * @returns The date of the Nth occurrence of the weekday.
 */
function getNthWeekdayOfMonth(date: Date, dayOfWeek: number, n: number): Date {
	const firstDayOfMonth = startOfDay(new Date(date.getFullYear(), date.getMonth(), 1));
	let occurrence = setDay(firstDayOfMonth, dayOfWeek, { weekStartsOn: 0 });

	if (occurrence < firstDayOfMonth) {
		occurrence = addDays(occurrence, 7);
	}

	occurrence = addDays(occurrence, (n - 1) * 7);
	return occurrence;
}

/**
 * Returns the most recent date from an array that is within the last 2 hours.
 * @param dates - Array of Date objects.
 * @returns The most recent valid date or null if none are within the last 2 hours.
 */
export function getMostRecentDate(dates: Date[]): Date | null {
	const now = new Date();

	// Filter out dates more than 2 hours ago
	const validDates = dates.filter((date) => {
		if (isAfter(date, now)) return true;
		if (differenceInHours(now, date) <= 2) return true;
		return false;
	});

	console.log('[validDates]', validDates);

	if (validDates.length === 0) {
		return null; // Return null if no valid dates are found
	}

	return validDates[0];

	// Return the most recent valid date
	return validDates.reduce(
		(mostRecent, current) => (isAfter(current, mostRecent) ? current : mostRecent),
		validDates[0]
	);
}

/**
 * Returns the number of hours in the current month.
 * @param date - The date object representing the current date.
 * @returns The total number of hours in the month.
 */
export function getHoursInCurrentMonth(date: Date): number {
	const daysInMonth = getDaysInMonth(date); // Get the number of days in the current month
	const hoursInMonth = daysInMonth * 24; // Multiply days by 24 to get the number of hours
	return hoursInMonth;
}

const MINUTE = 1;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = WEEK * 4;

/**
 * Normalizes the distance to a value between 0 and 1, where:
 * - 1 represents 0 minutes remaining (event happening now)
 * - 0 represents the maximum minutes remaining.
 *
 * @param distance_in_minutes - The minutes until the event starts.
 * @param max_minutes - The maximum possible time until an event.
 * @returns The normalized percentage value between 0 and 1.
 */
export function normalize_distance(
	distance_in_minutes: number,
	max_minutes: number = MONTH // 1 month in minutes
): number {
	// Clamp the distance so that anything more than max_minutes is considered as max_minutes
	const clamped_distance = Math.min(Math.max(distance_in_minutes, 0), max_minutes);

	// Calculate the normalized value: 1 for now (0 minutes), 0 for the maximum distance
	return 1 - clamped_distance / max_minutes;
}
