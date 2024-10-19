<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	const {
		class: className,
		children,
		variant = 'none'
	}: { class?: string; children: Snippet; variant?: 'bright' | 'muted' | 'none' } = $props();
</script>

<div
	class={cn(
		'rounded-[0.25rem] font-mono leading-none text-sm py-1 px-2 tracking-wider',
		'text-mono-300',
		variant === 'muted' && 'bg-white/5 ring-1 ring-white/10 text-mono-400',
		variant === 'bright' && 'bg-white text-mono-950 font-extrabold',
		className
	)}
>
	{@render children()}
</div>
