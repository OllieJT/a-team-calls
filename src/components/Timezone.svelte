<script lang="ts">
	import { cn } from '$lib/utils';
	import spacetime from 'spacetime';
	import Pill from './Pill.svelte';

	const {
		class: className,
		date,
		timezone = null,
		label
	}: { class?: string; label: string; timezone?: string | null; date: Date } = $props();

	const s = spacetime(date, timezone || Intl.DateTimeFormat().resolvedOptions().timeZone);

	function capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
</script>

<div
	class={cn('bg-mono-950/80 backdrop-blur-xl rounded-lg flex items-center gap-2 p-1', className)}
>
	<Pill variant="muted">{label}</Pill>
	<Pill class="font-normal">
		{capitalize(s.dayName())}
		{capitalize(s.date().toString())}
		{capitalize(s.monthName())}
	</Pill>
	<Pill variant="bright">{s.time()}</Pill>
</div>
