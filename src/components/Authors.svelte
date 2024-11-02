<script lang="ts">
	import type { Person } from '$lib/data.create';
	import { cn } from '$lib/utils';

	const { class: className, people }: { class?: string; people: Person[] } = $props();
</script>

<div class={cn('flex items-center gap-4', className)}>
	<div class="flex items-center pl-2">
		{#each people as person}
			<div
				class="w-10 h-10 relative -ml-2 rounded-full ring-2 ring-mono-950 bg-mono-800 overflow-hidden"
			>
				<enhanced:img src={person.image} class="absolute w-full h-full inset-0 object-cover"
				></enhanced:img>
			</div>
		{/each}
	</div>
	<h2 class="text-lg text-mono-400 flex flex-wrap items-center gap-1">
		{#each people as person, ix}
			<a
				href={person.url}
				class="hover:text-white hover:decoration-primary-500 underline-offset-2 hover:underline decoration-2"
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
