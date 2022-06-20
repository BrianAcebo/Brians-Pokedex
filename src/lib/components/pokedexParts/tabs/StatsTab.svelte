<script>
  import { selectedPokemon, selectPokemon } from "$lib/stores/selectedPokemon";
</script>


{#if $selectedPokemon.stats && $selectedPokemon.stats.length > 0}


{#each $selectedPokemon.stats as stat}
<div class="m-0 mb-2">
  <p class="text-sm capitalize font-semibold inline-block">{stat.stat.name}:</p>
  <p class="text-sm capitalize inline-block">{stat.base_stat}</p>
</div>
{/each}


{:else}

<div class="m-0 mb-2">
  <p class="text-sm capitalize font-semibold inline-block">Hp:</p>
  <p class="text-sm capitalize inline-block">100</p>
</div>

<div class="m-0 mb-2">
  <p class="text-sm capitalize font-semibold inline-block">Attack:</p>
  <p class="text-sm capitalize inline-block">100</p>
</div>

<div class="m-0 mb-2">
  <p class="text-sm capitalize font-semibold inline-block">Defense:</p>
  <p class="text-sm capitalize inline-block">100</p>
</div>

<div class="m-0 mb-2">
  <p class="text-sm capitalize font-semibold inline-block">Special-Attack:</p>
  <p class="text-sm capitalize inline-block">100</p>
</div>

<div class="m-0 mb-2">
  <p class="text-sm capitalize font-semibold inline-block">Special-Defense:</p>
  <p class="text-sm capitalize inline-block">100</p>
</div>

<div class="m-0 mb-2">
  <p class="text-sm capitalize font-semibold inline-block">Speed:</p>
  <p class="text-sm capitalize inline-block">100</p>
</div>


{/if}
