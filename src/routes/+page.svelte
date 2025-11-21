<!-- LANDING PAGE -->

<script>
  //About us
  import CheckerboardPattern from '$lib/components/CheckerboardPattern.svelte';
  //What we do

  //Components
	import HeroImage from '$lib/components/HeroImage.svelte';
	import CrewCarousel from '$lib/components/CrewCarousel.svelte';
  import F1Stripe from '$lib/components/F1Stripe.svelte';
	import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  //Ready on mount
  let ready = $state(false)
  onMount(() => {
    ready = true;
  });

	//Hero text
	const hero_text_choices = ['Engineers', 'Innovators', 'Businessmen', 'Developers'];
	const HERO_INTERVAL = 3500;
	let hero_index = $state(0);
	let hero_text = $derived(hero_text_choices[hero_index]);
	const hero_text_interval = setInterval(() => {
		const previous_index = hero_index;
		while (previous_index == hero_index) {
			hero_index = Math.floor(Math.random() * hero_text_choices.length);
		}
	}, HERO_INTERVAL);


  //Hero component animation
  onMount(() => {
    gsap.to(".heroBlack", {opacity: 0, duration: 3, delay: 0.2})
  })
  
</script>

<!-- HERO COMPONENT -->
<div class="fixed z-10 h-screen w-full overflow-hidden">
	<!-- HERO IMAGE -->
	<div class="absolute inset-0 scale-103">
		<HeroImage />
	</div>

  <!-- BLACK SCREEN -->
  <div class="heroBlack absolute inset-0 w-screen h-screen bg-black"></div>

	<!-- BODY CONTENT -->
	<div class="absolute inset-0 z-20 flex h-full w-full flex-row justify-center px-10 text-white">

    <div class="flex flex-col items-center justify-center w-full h-full">
      {#if ready}
        <h3 in:fly={{ y:10 }} class="font-bold text-white text-xl italic mb-2">University of North Texas • Engineering</h3>
        <div in:fly={{ y:10, delay: 150 }} class="flex items-center flex-between gap-20">
          <F1Stripe />
          <h1  class="font-[Bronzier] tracking-wider font-bold white text-8xl text-center text-shadow-lg">
            UNT Drone Club 
          </h1>
          <F1Stripe />
        </div>
        <p in:fly={{ y:10, delay: 300 }} class="text-lg text-blue-200">Look up at us</p>

        <a in:fly={{ y:10, delay: 450 }} href="/members" class="mt-8 overflow-hidden relative group bg-green-700 w-32 h-10 transform -skew-x-12 items-center flex justify-center">
          <div class="bg-green-600 absolute w-full h-full -translate-x-full transition-all group-hover:translate-x-0"></div>
          <p class="relative">Contact Us</p>
        </a>

      {/if}
    </div>
	</div>
</div>

<div class="h-screen"></div>

<div class="relative z-20 bg-blue-500 w-screen h-screen"></div>

<!-- MAIN HOME CONTENT -->
<div class="z-50 flex w-full flex-col items-center justify-center">

	<!-- MEET OUR CREW -->
	<div class="flex w-full flex-col items-center px-4 py-8">
		<h2 class="text-5xl font-bold text-green-700">Meet Our Crew</h2>

		<!-- CAROUSEL (EMBLA) -->
		<CrewCarousel />
	</div>

	<!-- CONTACT US -->
	<div class="flex w-full flex-col items-center bg-gray-100 py-8">
		<h2 class="mb-4 text-5xl font-bold text-green-700">Pit Stop</h2>
		<p>Interested in joining? Or just want to learn more about the field?</p>
	</div>
</div>

<style>
	h2 {
		font-family: Bronzier;
		letter-spacing: 0.03em;
	}
</style>
