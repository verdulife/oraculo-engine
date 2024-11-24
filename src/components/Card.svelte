<script lang="ts">
	import { tilt } from '@/lib/tilt.svelte';
	let { children } = $props();

	const tiltOptions = {
		glare: true,
	};
</script>

<article
	use:tilt={tiltOptions}
	class="transform-style-3d flex aspect-[2/3] w-96 flex-col items-center justify-center rounded border-2 border-red-800 bg-red-700 p-3 text-neutral-950"
>
	<div
		class=" translate-z-1 flex size-full transform flex-col items-center justify-center rounded-sm bg-red-600 p-4"
	>
		{@render children()}
	</div>
</article>
