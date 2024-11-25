<script lang="ts">
	import '@/app.css';
	import '@splidejs/svelte-splide/css';

	let { children } = $props();
</script>

<main class="flex min-h-screen flex-col items-center justify-center">
	{@render children()}
</main>
