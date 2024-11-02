<script lang="ts">
	import Badge from '$components/Badge.svelte';
	import { cn } from '$lib/utils';
	import spacetime from 'spacetime';

	const {
		class: className,
		date,
		timezone = null,
		label,
	}: { class?: string; label: string; timezone?: string | null; date: Date } = $props();

	const s = spacetime(date, timezone || Intl.DateTimeFormat().resolvedOptions().timeZone);

	function capitalize(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
</script>

<div class={cn('gap-4g flex items-center', className)}>
	<Badge>{label}</Badge>

	<div class="grid flex-auto grid-cols-1 grid-rows-2 text-right">
		<div class="text-xs leading-tight tracking-wide text-mono-400">{capitalize(s.dayName())}</div>
		<div class="text-sm font-medium leading-tight text-mono-200">
			<span>
				{capitalize(s.date().toString())}
				{capitalize(s.monthName())}
			</span>
			<span class="text-mono-400">at</span>
			<span>
				{s.time()}
			</span>
		</div>
	</div>
</div>
