<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	const {
		class: className,
		children,
		variant = 'none',
	}: { class?: string; children: Snippet; variant?: 'bright' | 'muted' | 'none' } = $props();
</script>

<div
	class={cn(
		'rounded-[0.25rem] px-2 py-1 font-mono text-sm leading-none tracking-wider',
		'text-mono-300',
		variant === 'muted' && 'bg-white/5 text-mono-400 ring-1 ring-white/10',
		variant === 'bright' && 'bg-white font-extrabold text-mono-950',
		className,
	)}
>
	{@render children()}
</div>
