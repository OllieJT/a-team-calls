<script lang="ts">
	import '$lib/datetime';
	import { cn } from '$lib/utils';
	import Authors from './Authors.svelte';
	import Countdown from './Countdown.svelte';
	import { EVENTS } from './data';
	import Timezone from './Timezone.svelte';

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
				<li class="grid border-t border-mono-900 first-of-type:border-t-0">
					<!-- top -->
					<div class="flex items-center justify-between gap-8 px-4 py-6">
						<!-- Overview -->
						<div class="flex items-center gap-6">
							<!-- <div class="w-20 h-20 rounded-xl bg-mono-800"></div> -->
							<h2 class="text-2xl leading-tight">{event.title}</h2>
						</div>

						<!-- Authors -->
						<Authors people={event.authors} />
					</div>

					<!-- bottom -->
					<div
						class={cn(
							'relative rounded-xl overflow-hidden ring-1 ring-primary-600/20 p-4 flex items-center justify-between gap-8 z-0',
							event.color === 'orange' && 'ring-orange-600/20'
						)}
					>
						<!-- Timezones -->
						<div class="flex flex-col gap-2">
							<Timezone label="PST" timezone={event.timezone} date={event.date} />
							<Timezone label="Local" timezone={null} date={event.date} />
						</div>

						<!-- Countdown -->
						<Countdown date={event.date} />

						<!-- Progress -->
						<div
							class={cn(
								'inset-0 right-auto bg-primary-600/40 absolute -z-10 rounded-xl',
								event.color === 'orange' && 'bg-orange-600/40'
							)}
							style="width: {((COUNTDOWN_RANGE - event.minutes_until) / COUNTDOWN_RANGE) *
								100}%; a:{event.minutes_until}; b: {COUNTDOWN_RANGE}"
						></div>
						<div
							class={cn(
								'inset-0 w-full bg-primary-600/10 absolute -z-10 rounded-xl',
								event.color === 'orange' && 'bg-orange-600/10'
							)}
						></div>
					</div>
				</li>
			{/if}
		{/each}
	</ul>
</main>
