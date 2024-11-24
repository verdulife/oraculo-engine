<script lang="ts">
	import Card from '@/components/Card.svelte';
	import Glide from '@glidejs/glide';

	function glide(node: HTMLElement) {
		$effect(() => {
			const glide = new Glide(node, {
				type: 'carousel',
				perView: 3,
				perTouch: false,
			});

			glide.mount();
		});
	}
</script>

<section class="flex size-full flex-1 flex-col items-center justify-center bg-neutral-700">
	<div class="glide" use:glide>
		<div class="glide__track" data-glide-el="track">
			<ul class="glide__slides">
				<li class="glide__slide">
					<Card>
						<h1 class="translate-z-14 transform text-xl font-bold">Welcome to SvelteKit</h1>
					</Card>
				</li>
				<li class="glide__slide">
					<Card>
						<h1 class="translate-z-14 transform text-xl font-bold">Welcome to SvelteKit</h1>
					</Card>
				</li>
				<li class="glide__slide">
					<Card>
						<h1 class="translate-z-14 transform text-xl font-bold">Welcome to SvelteKit</h1>
					</Card>
				</li>
				<li class="glide__slide">
					<Card>
						<h1 class="translate-z-14 transform text-xl font-bold">Welcome to SvelteKit</h1>
					</Card>
				</li>
				<li class="glide__slide">
					<Card>
						<h1 class="translate-z-14 transform text-xl font-bold">Welcome to SvelteKit</h1>
					</Card>
				</li>
				<li class="glide__slide">
					<Card>
						<h1 class="translate-z-14 transform text-xl font-bold">Welcome to SvelteKit</h1>
					</Card>
				</li>
				<li class="glide__slide">
					<Card>
						<h1 class="translate-z-14 transform text-xl font-bold">Welcome to SvelteKit</h1>
					</Card>
				</li>
				<li class="glide__slide">
					<Card>
						<h1 class="translate-z-14 transform text-xl font-bold">Welcome to SvelteKit</h1>
					</Card>
				</li>
			</ul>
		</div>
	</div>
</section>
