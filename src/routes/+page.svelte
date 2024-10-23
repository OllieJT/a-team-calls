<script lang="ts">
	import Authors from '$components/Authors.svelte';
	import Countdown from '$components/Countdown.svelte';
	import Progress from '$components/Progress.svelte';
	import Timezone from '$components/Timezone.svelte';
	import { EVENTS } from '$lib/data';
	import '$lib/datetime';

	const MINUTE = 1;
	const HOUR = 60 * MINUTE;
	const DAY = 24 * HOUR;
	const WEEK = 7 * DAY;

	const COUNTDOWN_RANGE =
		EVENTS.reduce((acc, event) => {
			if (event.minutes_until > acc) return event.minutes_until;
			return acc;
		}, 0) * 2;
</script>

<main class="py-16 px-8 w-full max-w-7xl mx-auto">
	<ul class="grid w-full gap-8">
		{#each EVENTS as event}
			{#if event.date}
				<li class="grid gap-4 p-4">
					<!-- Overview -->
					<div class="flex items-center justify-between gap-8 p-4">
						<h2 class="text-2xl leading-tight">{event.title}</h2>
						<Authors people={event.authors} />
					</div>
					<div
						class="grid grid-cols-2 rounded-xl overflow-hidden border bg-mono-800 gap-px border-mono-800"
					>
						<div class="flex flex-col justify-center gap-4 p-4 bg-mono-950">
							<Timezone label="PST" timezone={event.timezone} date={event.date} />
							<Timezone label="Local" timezone={null} date={event.date} />
						</div>
						<div class="grid p-4 py-8 gap-4 place-items-center bg-mono-950">
							<Countdown date={event.date} />
						</div>
					</div>

					<!-- bottom -->
					<Progress color={event.color} minutes={event.minutes_until} />
				</li>
			{/if}
		{/each}
	</ul>
</main>
