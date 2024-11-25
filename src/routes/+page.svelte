<script lang="ts">
	import Card from '@/components/Card.svelte';
	import {
		type Options,
		type SlideEventDetail,
		Splide,
		SplideSlide
	} from '@splidejs/svelte-splide';

	const arr20 = [...Array(20).keys()];
	const options: Options = {
		type: 'loop',
		autoWidth: true,
		autoHeight: true,
		focus: 'center',
		arrows: false,
		pagination: false,
		autoplay: true,
		interval: 500,
		easing: 'linear',
		speed: 600,
		drag: false,
		updateOnMove: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		snap: true
	};

	function pauseAndCenter(ev: CustomEvent<SlideEventDetail> | undefined) {
		if (!ev) return;

		const { splide } = ev.detail;

		if (splide.Components.Autoplay.isPaused()) {
			splide.Components.Autoplay.play();
		} else {
			splide.Components.Autoplay.pause();
		}
	}
</script>

<section class="flex size-full flex-1 flex-col items-center justify-center bg-neutral-700">
	<Splide {options} on:click={pauseAndCenter} class="size-full">
		{#each arr20 as _, i}
			<SplideSlide class="px-2 py-20">
				<Card>{i}</Card>
			</SplideSlide>
		{/each}
	</Splide>
</section>
