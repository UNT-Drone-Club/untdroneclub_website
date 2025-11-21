<!-- LANDING PAGE -->

<script>
  //About us
  import CheckerboardPattern from '$lib/components/CheckerboardPattern.svelte';
  //What we do

  //Components
  // import DotPattern from '$lib/components/DotPattern.svelte';
	import HeroImage from '$lib/components/HeroImage.svelte';
	import CrewCarousel from '$lib/components/CrewCarousel.svelte';
  import F1Stripe from '$lib/components/F1Stripe.svelte';
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { SplitText } from 'gsap/SplitText';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import ProjectPreview from '$lib/components/ProjectPreview.svelte';

  //Icons

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
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);

    let heroGsap = gsap.timeline();
    let heroTitle = SplitText.create(".heroTitle", {type: "words"});
    heroGsap.add('start')
      .to(".heroBlack", {opacity: 0, duration: 1, delay: 0.2}, 'start')
      .to(".heroImage", {scale: 1, duration: 2, ease: 'power2.inOut'}, 'start')
      .fromTo(heroTitle.words, {y: 50, opacity: 0}, {y:0, opacity: 1, duration: 0.9, ease: 'expo.out', delay: 0.2, stagger: 0.05}, 'start')

    let heroExit = gsap.timeline({
      scrollTrigger: {
        trigger: '.mainHome',
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
      }
    });

    heroExit.addLabel('exit')
      .to(".heroImage", {y:10, opacity: 0.1, scale: 1.06}, 'exit')


  })
  
</script>

<!-- HERO COMPONENT -->
<div class="fixed z-10 h-screen w-full overflow-hidden">
	<!-- HERO IMAGE -->
	<div class="heroImage absolute inset-0 scale-106">
		<HeroImage />
	</div>

  <!-- DOT PATTERN -->
  <!-- <DotPattern fillColor="rgb(108 245 130 / 0.5)" class="[mask-image:radial-gradient(1000px_circle_at_center,transparent,white)]"/> -->

  <!-- BLACK SCREEN -->
  <div class="z-50 heroBlack absolute inset-0 w-screen h-screen bg-black"></div>

	<!-- BODY CONTENT -->
	<div class="absolute inset-0 z-20 flex h-full w-full flex-row justify-center px-10 text-white">

    <div class="flex flex-col items-center justify-center w-full h-full">
      {#if ready}
        <h3 class="font-bold text-center text-white text-sm sm:text-xl italic mb-2">University of North Texas • Engineering</h3>
        <div class="flex items-center flex-between gap-20">
          <F1Stripe customClass="leftStripe"/>


          <!-- TITLE -->
          <div class="block overflow-hidden sm:mb-5 mb-0">
            <h1 class="heroTitle font-[Bronzier] tracking-wider font-bold white text-6xl sm:text-9xl text-center text-shadow-lg sm:-mb-5 mb-0">
              UNT Drone Club 
            </h1>
          </div>

          <F1Stripe />
        </div>
        <p class="text-lg text-blue-200">Look up at us</p>

        <a href="/members" class="mt-8 overflow-hidden relative group bg-green-700 w-32 h-10 transform -skew-x-12 items-center flex justify-center">
          <div class="bg-green-600 absolute w-full h-full -translate-x-full transition-all group-hover:translate-x-0"></div>
          <p class="relative">Contact Us</p>
        </a>

      {/if}
    </div>
	</div>
</div>

<!-- SPACING -->
<div class="h-screen"></div>

<!-- MAIN HOME CONTENT -->
<div class="mainHome relative z-20 bg-green-50 w-screen h-500">
  <!-- PROJECTS -->
  <div class="flex flex-col justify-center">
    <!-- TITLE -->
    <div class="flex justify-center">
      <h2>Our Projects</h2>
    </div>
    
    <!-- PROJECTS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:mx-10">
      <ProjectPreview type="crazyflie"/>
      <ProjectPreview type="stingray"/>
      <ProjectPreview />
      <ProjectPreview />
    </div>
  </div>

  <!-- CREW CAROUSEL -->
  <div class="items-center flex flex-col justify-center">
    <h2>Our crew</h2>
    <p>Couldn't have done it without you</p>
    <CrewCarousel />
  </div>
</div>

<style>
	h2 {
		font-family: Bronzier;
		letter-spacing: 0.03em;
    font-size: 5em;
	}
</style>
