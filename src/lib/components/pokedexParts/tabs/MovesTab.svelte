<script>
  import { selectedPokemon, selectPokemon } from "$lib/stores/selectedPokemon";
</script>


{#if $selectedPokemon.moves && $selectedPokemon.moves.length > 0}


{#each $selectedPokemon.moves as move}
<p class="m-0 mb-2 text-sm capitalize block">{move.move.name}</p>
{/each}


{:else}


<p class="m-0 mb-2 text-sm block">Brian has no moves other than on the dance floor.</p>


{/if}
