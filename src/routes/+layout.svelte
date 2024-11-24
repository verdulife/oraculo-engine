<script lang="ts">
	import '@/app.css';
	import '@glidejs/glide/dist/css/glide.core.min.css';

	let { children } = $props();
</script>

<main class="flex min-h-screen flex-col items-center justify-center">
	{@render children()}
</main>
