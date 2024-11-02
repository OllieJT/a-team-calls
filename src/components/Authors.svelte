<script lang="ts">
	import type { Person } from '$lib/data.create';
	import { cn } from '$lib/utils';

	const { class: className, people }: { class?: string; people: Person[] } = $props();
</script>

<div class={cn('flex items-center gap-4', className)}>
	<div class="flex items-center pl-2">
		{#each people as person}
			<div
				class="relative -ml-2 h-10 w-10 overflow-hidden rounded-full bg-mono-800 ring-2 ring-mono-950"
			>
				<enhanced:img src={person.image} class="absolute inset-0 h-full w-full object-cover"
				></enhanced:img>
			</div>
		{/each}
	</div>
	<h2 class="flex flex-wrap items-center gap-1 text-lg text-mono-400">
		{#each people as person, ix}
			<a
				href={person.url}
				class="decoration-2 underline-offset-2 hover:text-white hover:underline hover:decoration-primary-500"
				target="_blank"
				rel="noopener"
			>
				{person.name}
			</a>
			{#if ix !== people.length - 1}
				<span>&</span>
			{/if}
		{/each}
	</h2>
</div>
