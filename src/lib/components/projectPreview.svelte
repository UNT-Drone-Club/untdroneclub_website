<!-- A button that leads to a project's webpage, featuring a 3d model of said project -->
<!-- ... Or an image -->
<script>
  // Threlte imports
  import { Canvas } from '@threlte/core';
  import Crazyflie from '$lib/assets/3d/Crazyflie.svelte';

  let { type } = $props();
</script>

<!-- CRAZYFLIE -->
<a href="/projects" class="relative h-64 border border-black overflow-hidden">
  <!-- DESCRIPTION -->
  <div class="flex flex-col">
    <h3>Crazyflie</h3>
    <p>Bitcraze</p>
    <p>A palm-sized research quadcopter with a powerful, modular feature set</p>
  </div>

  <!-- MODEL -->
  <div class="absolute inset-0">
    <Canvas>
      <Crazyflie />
    </Canvas>
  </div>
</a>
