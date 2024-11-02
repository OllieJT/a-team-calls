<script lang="ts">
	import type { TailwindColor } from '$lib/data.constants';
	import { normalize_distance } from '$lib/datetime';
	import { cn } from '$lib/utils';

	const {
		class: className,
		color,
		minutes,
	}: { class?: string; minutes: number; color: TailwindColor } = $props();
</script>

<div
	class={cn(
		'relative z-0 flex h-4 w-full items-center justify-between gap-8 overflow-hidden rounded-xl ring-1',
		'ring-primary-600/30',
		color === 'orange' && 'ring-orange-600/30',
		className,
	)}
>
	<!-- Progress -->
	<div
		class={cn(
			'absolute inset-0 right-auto -z-10 rounded-xl bg-primary-600',
			color === 'orange' && 'bg-orange-600',
		)}
		style="width: {normalize_distance(minutes) * 100}%;"
	></div>
	<div
		class={cn(
			'absolute inset-0 -z-10 w-full rounded-xl bg-primary-600/10',
			color === 'orange' && 'bg-orange-600/10',
		)}
	></div>
</div>
