import { writable } from "svelte/store";

export const selectedPokemon = writable({});

export const selectPokemon = async (pokemonId) => {

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  const res = await fetch(url);
  const data = await res.json();

  // Only set if object is not empty
  if (Object.keys(data).length === 0) {
    selectedPokemon.set(false);
  } else {
    selectedPokemon.set(data);
  }
}
