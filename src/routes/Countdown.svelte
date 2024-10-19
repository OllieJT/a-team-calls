<script lang="ts">
	import { cn } from '$lib/utils';
	import { differenceInMinutes } from 'date-fns';

	const { class: className, date }: { class?: string; date: Date } = $props();

	/* Pad number to 2 digits */
	function pad(num: number) {
		return num.toString().padStart(2, '0');
	}

	const diff = differenceInMinutes(date, new Date());

	const days = $state(Math.floor(diff / 1440));
	const hours = $state(Math.floor((diff % 1440) / 60));
	const minutes = $state(diff % 60);
</script>

<div
	class={cn(
		'grid grid-cols-3 gap-2 font-mono text-center tracking-widest text-white/60',
		className
	)}
>
	<!-- days -->
	<div
		class="bg-white rounded-lg px-2 py-3 text-xl leading-none text-mono-950 col-start-1 row-start-1"
	>
		{pad(days)}
	</div>
	<div class="col-start-1 row-start-2">D</div>

	<!-- hours -->
	<div
		class="bg-white rounded-lg px-2 py-3 text-xl leading-none text-mono-950 col-start-2 row-start-1"
	>
		{pad(hours)}
	</div>
	<div class="col-start-2 row-start-2">H</div>

	<!-- minutes -->
	<div
		class="bg-white rounded-lg px-2 py-3 text-xl leading-none text-mono-950 col-start-3 row-start-1"
	>
		{pad(minutes)}
	</div>
	<div class="col-start-3 row-start-2">M</div>
</div>
