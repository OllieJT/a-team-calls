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
		'grid grid-cols-3 gap-2 text-center font-mono tracking-widest text-white/60',
		className,
	)}
>
	<!-- days -->
	<div
		class="col-start-1 row-start-1 rounded-lg bg-white px-2 py-3 text-xl leading-none text-mono-950"
	>
		{pad(days)}
	</div>
	<div class="col-start-1 row-start-2">Days</div>

	<!-- hours -->
	<div
		class="col-start-2 row-start-1 rounded-lg bg-white px-2 py-3 text-xl leading-none text-mono-950"
	>
		{pad(hours)}
	</div>
	<div class="col-start-2 row-start-2">Hours</div>

	<!-- minutes -->
	<div
		class="col-start-3 row-start-1 rounded-lg bg-white px-2 py-3 text-xl leading-none text-mono-950"
	>
		{pad(minutes)}
	</div>
	<div class="col-start-3 row-start-2">Minutes</div>
</div>
