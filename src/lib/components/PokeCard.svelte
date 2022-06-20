<script>
  export let pokemon;
  import { selectPokemon } from "$lib/stores/selectedPokemon";
</script>

<div class="w-1/2 inline-block p-3 cursor-pointer" on:click={selectPokemon(pokemon.id)}>
  <div class="block text-center p-3 shadow-base border-2 border-black">
    <img class="m-auto text-center" src={pokemon.image} alt={pokemon.name} />
    <h3 class="capitalize">#{pokemon.id} {pokemon.name}</h3>
  </div>
</div>
