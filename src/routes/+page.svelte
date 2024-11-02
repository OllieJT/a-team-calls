<script lang="ts">
	import Authors from '$components/Authors.svelte';
	import Countdown from '$components/Countdown.svelte';
	import Progress from '$components/Progress.svelte';
	import Timezone from '$components/Timezone.svelte';
	import '$lib/datetime';
	import { differenceInMinutes } from 'date-fns';

	const { data } = $props();
</script>

<main class="mx-auto w-full max-w-7xl ~px-0/8 ~py-4/16">
	<ul class="grid w-full gap-8">
		{#each data.scheduledEvents.future as { event, hosts, schedule }}
			{#if schedule}
				<li class="grid gap-4 ~p-1/4">
					<!-- Overview -->
					<div
						class="flex flex-col items-center justify-between gap-x-8 ~gap-y-2/4 ~p-2/4 md:flex-row"
					>
						<h2 class="flex-auto text-2xl leading-tight">{event.title}</h2>
						<Authors class="w-max" people={hosts} />
					</div>
					<div
						class="frid-cols-1 grid grid-rows-2 gap-px overflow-hidden rounded-xl border border-mono-800 bg-mono-800 md:grid-cols-2 md:grid-rows-1"
					>
						<div
							class="flex flex-col items-center justify-center gap-4 bg-mono-950 ~p-2/4 md:items-start md:justify-start"
						>
							<Timezone label="PST" timezone={schedule.timezone} date={schedule.datetime} />
							<Timezone label="Local" timezone={null} date={schedule.datetime} />
						</div>
						<div class="grid place-items-center gap-4 bg-mono-950 ~p-2/4">
							<Countdown date={schedule.datetime} />
						</div>
					</div>

					<!-- bottom -->
					<Progress
						color={event.color}
						minutes={differenceInMinutes(schedule.datetime, new Date())}
					/>
				</li>
			{/if}
		{/each}
	</ul>
</main>
