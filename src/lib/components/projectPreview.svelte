<!-- A button that leads to a project's webpage, featuring a 3d model of said project -->
<!-- ... Or an image -->
<script>
  // Threlte imports
  import { Canvas } from '@threlte/core';
  import Crazyflie from '$lib/assets/3d/Crazyflie.svelte';
  import Stingray from '$lib/assets/3d/Stingray.svelte';
	import { T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';
  import { Tween } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';

  let { type = undefined } = $props();

  //Hover animation handling
  let model = undefined;
  let hovering = $state(false);
  let yPos = new Tween(0, {duration: 500, easing: cubicInOut});
  function mouseEnter() {
    hovering = true;
    yPos.target = -50;
  }
  function mouseLeave() {
    hovering = false;
    yPos.target = 0;
  }
</script>

<!-- CRAZYFLIE -->
<div onmouseenter={mouseEnter} onmouseleave={mouseLeave} class="aspect-square rounded-sm projectDiv relative border border-black overflow-hidden">
  <!-- DESCRIPTION -->
  <div class="flex flex-col mx-2 my-1">
    <h3 class="font-bold text-6xl">Crazyflie</h3>
    <p>Bitcraze</p>
    <p>A palm-sized research quadcopter with a powerful, modular feature set</p>
  </div>

  <!-- MODEL -->
  <div class="absolute inset-0 translate-y-25" style="transform: translateY({yPos.current}px);">
    <Canvas>
      {#if type == "crazyflie"}
        <T.PerspectiveCamera makeDefault position={[1.5, 1.4, 4.2]} fov={40}>
          <OrbitControls enableZoom={false} enablePan={false} />
        </T.PerspectiveCamera>

        <T.DirectionalLight position={[3, 3, 5]} />
        <T.AmbientLight intensity={0.5} />
        <Crazyflie />
      {:else if type == "stingray"}
        <T.PerspectiveCamera makeDefault position={[-20,15,-50]} fov={40}>
        <OrbitControls enableZoom={false} enablePan={false} />
        </T.PerspectiveCamera>

        <T.DirectionalLight position={[-30, 9, -15]} intensity={4} />
        <T.AmbientLight intensity={1.5} />

        <Stingray />
      {/if}
    </Canvas>
  </div>
</div>

<style>
</style>
