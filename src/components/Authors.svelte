<script lang="ts">
	import AvatarStack from '$components/AvatarStack.svelte';
	import type { Person } from '$lib/data.create';
	import { cn } from '$lib/utils';

	const { class: className, people }: { class?: string; people: Person[] } = $props();
</script>

<div class={cn('flex items-center gap-4', className)}>
	<AvatarStack {people} />
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
