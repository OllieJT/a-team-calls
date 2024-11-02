<script lang="ts">
	import type { Person } from '$lib/data.create';
	import { cn } from '$lib/utils';

	const { class: className, people }: { class?: string; people: Person[] } = $props();
</script>

<div class={cn('flex items-center pl-2', className)}>
	{#each people as person}
		<div
			class="relative -ml-2 overflow-hidden rounded-full bg-mono-800 ring-2 ring-mono-950 ~size-8/10"
		>
			<enhanced:img src={person.image} class="absolute inset-0 h-full w-full object-cover"
			></enhanced:img>
		</div>
	{/each}
</div>
