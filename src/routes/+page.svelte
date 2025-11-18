<!-- LANDING PAGE -->

<script>
  //About us
  import michigan from '$lib/assets/photos/home/michigan.jpg';
  import CheckerboardPattern from '$lib/components/CheckerboardPattern.svelte';
  //What we do
  import innovative from '$lib/assets/photos/home/innovative.jpg';
  import integrated from '$lib/assets/photos/home/integrated.jpg';
  import professional from '$lib/assets/photos/home/professional.jpg';

  //Components
	import HeroImage from '$lib/components/HeroImage.svelte';
	import CrewCarousel from '$lib/components/CrewCarousel.svelte';
  import F1Stripe from '$lib/components/F1Stripe.svelte';
	import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';

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
</script>

<!-- HERO COMPONENT -->
<div class="relative z-10 h-screen w-full overflow-hidden">
	<!-- HERO IMAGE -->
	<div class="absolute inset-0 scale-103">
		<HeroImage />
	</div>

	<!-- BODY CONTENT -->
	<div class="absolute inset-0 z-20 flex h-full w-full flex-row justify-center px-10 text-white">

    <div class="flex flex-col items-center justify-center w-full h-full">
      {#if ready}
        <h3 in:fly={{ y:10 }} class="font-bold text-white text-xl italic mb-2">University of North Texas • Engineering</h3>
        <div in:fly={{ y:10, delay: 150 }} class="flex items-center flex-between gap-20">
          <F1Stripe />
          <h1  class="font-[Bronzier] tracking-wide font-bold white text-8xl text-center">
            UNT Drone Club 
          </h1>
          <F1Stripe />
        </div>
        <p in:fly={{ y:10, delay: 300 }} class="text-lg text-blue-200">[SUBTITLE]</p>

        <a in:fly={{ y:10, delay: 450 }} href="/members" class="mt-8 overflow-hidden relative group bg-green-700 w-32 h-10 transform -skew-x-12 items-center flex justify-center">
          <div class="bg-green-600 absolute w-full h-full -translate-x-full transition-all group-hover:translate-x-0"></div>
          <p class="relative">Contact Us</p>
        </a>

      {/if}
    </div>
	</div>
</div>

<!-- MAIN HOME CONTENT -->
<div class="flex w-full flex-col items-center justify-center">
	<!-- ABOUT US -->
	<div class="relative sm:px-4 flex sm:flex-row flex-col items-center justify-center gap-4 py-8">
    <!-- BACKGROUND -->
    <div class="mask-l-from-30% absolute inset-0 w-full h-full">
      <CheckerboardPattern />
    </div>
  

		<!-- BODY -->
		<div class="w-full px-4 sm:w-1/2 flex-col">
			<h2 class="mb-4 flex w-full justify-center text-5xl font-bold text-green-700">About us</h2>
      <h3>Want to know what we do? Look at our projects.</h3>
			</div>
		</div>

		<!-- PHOTOS -->
		<!-- <div class="flex w-1/2 flex-col"> -->
		<!-- 	<img src={michigan} alt="" class="rounded-xl" /> -->
		<!-- </div> -->
	</div>

	<!-- WHAT WE DO -->
	<div class="flex w-full flex-col items-center gap-4 bg-green-700 px-4 py-8 text-white">
		<!-- HEADER -->
		<h2 class="text-5xl font-bold">What We Do</h2>

		<!-- TRI SPLIT CONTENT -->
		<div class="flex gap-8">
		  <div class="w-1/3">
        <img src={integrated} alt="Integrated Engineering" class="rounded-xl" />
		    <h3 class="text-2xl">Integrated Engineering</h3>
		    <p>
		      Hands-on experience building formula race cars while running an automotive engineering
		      research, design, and manufacturing firm.
		    </p>
		  </div>
		  <div class="w-1/3">
        <img src={professional} alt="Integrated Engineering" class="rounded-xl" />
		    <h3 class="text-2xl">Professional Development</h3>
		    <p>
		      Experience and support propels our members forward into successful careers as best-in the
		      industry innovators, leaders, and professionals.
		    </p>
		  </div>
		  <div class="w-1/3">
        <img src={innovative} alt="Integrated Engineering" class="rounded-xl" />
		    <h3 class="text-2xl">Innovative Research</h3>
		    <p>
		      Groundbreaking projects redefine electric vehicle development, as the senior design team
		      conducts industry-changing research.
		    </p>
		  </div>
		</div>
	</div>

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
