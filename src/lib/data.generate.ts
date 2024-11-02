import type { Timezone } from '$lib/data.constants';
import spacetime from 'spacetime';

export function generateWeeklyCallDates({
	day,
	hour,
	minute,
	tz,
}: {
	day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
	hour: number;
	minute: number;
	tz: Timezone;
}): Date[] {
	const nearest = spacetime(new Date(), tz).day(day).hour(hour).minute(minute).second(0);
	const next = nearest.clone().add(1, 'week');
	return [nearest.toNativeDate(), next.toNativeDate()];
}
