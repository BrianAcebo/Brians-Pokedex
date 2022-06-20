<script>
  import { selectedPokemon, selectPokemon } from "$lib/stores/selectedPokemon";

  // Calculate height and weight of pokemon
  const calculateHeightAndWeight = (x) => {
    return x / 10;
  }
</script>


<!-- Name and Number -->
<div class="flex items-center justify-between mb-5">
  <h1 class="font-semibold capitalize">{#if $selectedPokemon.name}{$selectedPokemon.name}{:else}brianacebo{/if}</h1>

  <p>{#if $selectedPokemon.id}#{$selectedPokemon.id}{:else}#0{/if}</p>
</div>
<!-- /Name and Number -->


<!-- Description -->
<p class="mb-5">Height: {$selectedPokemon.height ? calculateHeightAndWeight($selectedPokemon.height) : '1.7'}m</p>
<p class="mb-5">Weight: {$selectedPokemon.weight ? calculateHeightAndWeight($selectedPokemon.weight) : '81'}kg</p>
<!-- /Description -->


<!-- Pill Tags -->
<div class="flex items-center justify-start mb-5">
  {#if $selectedPokemon.types && $selectedPokemon.types.length > 0}
  {#each $selectedPokemon.types as type}
  <p class="py-1 px-3 rounded-full {'bg-' + type.type.name} text-sm mr-5 text-white capitalize">{type.type.name}</p>
  {/each}
  {:else}
  <p class="py-1 px-3 rounded-full bg-legendary text-sm mr-5 text-white capitalize">Legendary</p>
  <p class="py-1 px-3 rounded-full bg-human text-sm text-white capitalize">Human</p>
  {/if}
</div>
<!-- /Pill Tags -->


<!-- Colors to add dynamically for Pill Tags -->
<style>
  .bg-grass {
    background: #16a34a;
  }
  .bg-poison {
    background: #7C3aed;
  }
  .bg-fire {
    background: #ef4444;
  }
  .bg-flying {
    background: #d8b4fe;
  }
  .bg-water {
    background: #60a5fa;
  }
  .bg-bug {
    background: #b45309;
  }
  .bg-normal {
    background: #fdba74;
  }
  .bg-electric {
    background: #fde047;
  }
  .bg-ground {
    background: #92400e;
  }
  .bg-fairy {
    background: #f9a8d4;
  }
  .bg-fighting {
    background: #fb7185;
  }
  .bg-psychic {
    background: #a21cfa;
  }
  .bg-rock {
    background: #a1a1aa;
  }
  .bg-steel {
    background: #cbd5e1;
  }
  .bg-ice {
    background: #67e8f9;
  }
  .bg-ghost {
    background: #312e81;
  }
  .bg-dragon {
    background: #d946ef;
  }
  .bg-dark {
    background: #262626;
  }
</style>
