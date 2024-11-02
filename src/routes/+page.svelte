<script lang="ts">
	import Authors from '$components/Authors.svelte';
	import Countdown from '$components/Countdown.svelte';
	import Progress from '$components/Progress.svelte';
	import Timezone from '$components/Timezone.svelte';
	import '$lib/datetime';
	import { differenceInMinutes } from 'date-fns';

	const { data } = $props();
</script>

<main class="~py-4/16 ~px-0/8 w-full max-w-7xl mx-auto">
	<ul class="grid w-full gap-8">
		{#each data.scheduledEvents.future as { event, hosts, schedule }}
			{#if schedule}
				<li class="grid gap-4 ~p-1/4">
					<!-- Overview -->
					<div
						class="flex flex-col items-center justify-between gap-x-8 ~gap-y-2/4 ~p-2/4 md:flex-row"
					>
						<h2 class="text-2xl flex-auto leading-tight">{event.title}</h2>
						<Authors class="w-max" people={hosts} />
					</div>
					<div
						class="grid frid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 rounded-xl overflow-hidden border bg-mono-800 gap-px border-mono-800"
					>
						<div
							class="flex flex-col items-center justify-center md:justify-start md:items-start gap-4 ~p-2/4 bg-mono-950"
						>
							<Timezone label="PST" timezone={schedule.timezone} date={schedule.datetime} />
							<Timezone label="Local" timezone={null} date={schedule.datetime} />
						</div>
						<div class="grid ~p-2/4 gap-4 place-items-center bg-mono-950">
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
