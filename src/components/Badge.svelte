<script lang="ts">
	import type { TailwindColor } from '$lib/data.constants';
	import '$lib/datetime';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	const {
		color,
		children,
		class: className,
	}: {
		color?: TailwindColor;
		children: Snippet;
		class?: string;
	} = $props();
</script>

<span
	class={cn(
		'rounded-md bg-mono-800 px-2 py-1.5 font-mono text-xs font-semibold uppercase leading-none tracking-widest',
		color === 'orange' && 'bg-orange-400 text-orange-900',
		color === 'yellow' && 'bg-yellow-400 text-yellow-900',
		color === 'lime' && 'bg-lime-400 text-lime-900',
		color === 'teal' && 'bg-teal-400 text-teal-900',
		color === 'blue' && 'bg-blue-400 text-blue-900',
		color === 'violet' && 'bg-violet-400 text-violet-900',
		color === 'fuchsia' && 'bg-fuchsia-400 text-fuchsia-900',
		color === 'rose' && 'bg-rose-400 text-rose-900',
		className,
	)}
>
	{@render children()}
</span>
