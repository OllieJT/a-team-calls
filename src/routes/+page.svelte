<script lang="ts">
	import AvatarStack from '$components/AvatarStack.svelte';
	import Badge from '$components/Badge.svelte';
	import Countdown from '$components/Countdown.svelte';
	import Timezone from '$components/Timezone.svelte';
	import texture from '$images/texture.png?enhanced';
	import { TIMEZONE_LABEL } from '$lib/data.constants.js';
	import '$lib/datetime';

	const { data } = $props();
</script>

<div class="fixed inset-0 -z-10">
	<enhanced:img
		id="bg-texture"
		src={texture}
		class="relative z-0 h-auto w-full rounded-full opacity-35 blur-6xl"
	/>
	<div
		class="absolute inset-0 z-10 bg-gradient-to-t from-mono-950/90 via-mono-950/60 to-mono-950/0"
	></div>
</div>

<main class="relative z-10 mx-auto w-full max-w-7xl ~space-y-6/12 ~px-0/8 ~py-4/16">
	<header>
		<h1 class="max-w-160 text-balance font-semibold text-white ~text-xl/4xl">
			Upcoming calls for the Futur Accelerator
		</h1>
	</header>

	<ol class="grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
		{#each data.scheduledEvents.future as { event, hosts, schedule }}
			{#if schedule}
				<li
					class="flex flex-col items-stretch divide-y divide-mono-800 rounded-2xl bg-mono-900 ring-1 ring-mono-800 backdrop-blur-md"
					aria-label={event.title}
				>
					<!-- Title -->
					<div class="flex items-center justify-between ~gap-2/4 ~p-4/6">
						<h2 class="flex-auto font-medium text-white ~text-lg/xl">{event.title}</h2>
						<div class="flex shrink-0 grow-0 items-center justify-end gap-1">
							{#if event.module.length}
								{#each event.module as module}
									<Badge color={event.color}>
										{module}
									</Badge>
								{/each}
							{:else}
								<Badge color={event.color}>A-Team</Badge>
							{/if}
						</div>
					</div>

					<!-- Countdown -->
					<div class="flex flex-auto items-center justify-center ~gap-2/4 ~p-4/6">
						<h3 class="sr-only">Countdown</h3>
						<Countdown date={schedule.datetime} />
					</div>

					<!-- Times -->
					<div class="flex flex-col items-stretch ~gap-2/4 ~p-4/6">
						<h3 class="sr-only">Times</h3>

						<Timezone
							label={TIMEZONE_LABEL[schedule.timezone]}
							timezone={schedule.timezone}
							date={schedule.datetime}
						/>
						<hr class="border-mono-800" />
						<Timezone label="Local" timezone={null} date={schedule.datetime} />
					</div>

					<!-- Hosts -->
					<div class="flex items-center justify-between ~gap-2/4 ~p-4/6">
						<h3 class="sr-only">Call Hosts</h3>
						<AvatarStack people={hosts} class="shrink-0 grow-0" />

						<p class="flex flex-auto flex-wrap items-center gap-1 text-mono-400 ~text-base/lg">
							<span>With</span>
							{#each hosts as person, ix}
								<a
									href={person.url}
									class="text-mono-300 decoration-2 underline-offset-2 hover:text-white hover:underline hover:decoration-primary-500"
									target="_blank"
									rel="noopener"
								>
									{person.name}
								</a>
								{#if ix !== hosts.length - 1}
									<span>&</span>
								{/if}
							{/each}
						</p>
					</div>
				</li>
			{/if}
		{/each}
	</ol>
</main>

<style lang="postcss">
	@keyframes Rotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	#bg-texture {
		animation: Rotate 60s linear infinite;
	}
</style>
