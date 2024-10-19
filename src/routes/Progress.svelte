<script lang="ts">
	import { normalize_distance } from '$lib/datetime';
	import { cn } from '$lib/utils';
	import type { Color } from './data';

	const {
		class: className,
		color,
		minutes
	}: { class?: string; minutes: number; color: Color } = $props();
</script>

<div
	class={cn(
		'relative rounded-xl w-full overflow-hidden ring-1 h-4 flex items-center justify-between gap-8 z-0',
		'ring-primary-600/30',
		color === 'orange' && 'ring-orange-600/30',
		className
	)}
>
	<!-- Progress -->
	<div
		class={cn(
			'inset-0 right-auto bg-primary-600 absolute -z-10 rounded-xl',
			color === 'orange' && 'bg-orange-600'
		)}
		style="width: {normalize_distance(minutes) * 100}%;"
	></div>
	<div
		class={cn(
			'inset-0 w-full bg-primary-600/10 absolute -z-10 rounded-xl',
			color === 'orange' && 'bg-orange-600/10'
		)}
	></div>
</div>
