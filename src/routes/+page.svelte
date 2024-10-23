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

<main class="~py-4/16 ~px-0/8 w-full max-w-7xl mx-auto">
	<ul class="grid w-full gap-8">
		{#each EVENTS as event}
			{#if event.date}
				<li class="grid gap-4 ~p-1/4">
					<!-- Overview -->
					<div
						class="flex flex-col items-center justify-between gap-x-8 ~gap-y-2/4 ~p-2/4 md:flex-row"
					>
						<h2 class="text-2xl flex-auto leading-tight">{event.title}</h2>
						<Authors class="w-max" people={event.authors} />
					</div>
					<div
						class="grid frid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 rounded-xl overflow-hidden border bg-mono-800 gap-px border-mono-800"
					>
						<div
							class="flex flex-col items-center justify-center md:justify-start md:items-start gap-4 ~p-2/4 bg-mono-950"
						>
							<Timezone label="PST" timezone={event.timezone} date={event.date} />
							<Timezone label="Local" timezone={null} date={event.date} />
						</div>
						<div class="grid ~p-2/4 gap-4 place-items-center bg-mono-950">
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
