<script context="module">
  // Fetch all pokemon data from PokeAPI using SSR
  export async function load({params}) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data, index) => {
      return {
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
      }
    });

    return {
      props: {
        allPokemon: loadedPokemon
      }
    }
  }
</script>


<script>
  import { Circle } from 'svelte-loading-spinners';
  import PokeCard from "$lib/components/PokeCard.svelte";
  import MiddleBtns from "$lib/components/pokedexParts/MiddleBtns.svelte";
  import CircleAndArrows from "$lib/components/pokedexParts/CircleAndArrows.svelte";
  import TabsNav from "$lib/components/pokedexParts/tabs/TabsNav.svelte";
  import Tabs from "$lib/components/pokedexParts/tabs/Tabs.svelte";
  import Screen from "$lib/components/pokedexParts/Screen.svelte";
  import { selectedPokemon, selectPokemon } from "$lib/stores/selectedPokemon";


  export let allPokemon; // All loaded pokemon fetched and passed through pokemon props with SSR above ^^


  // Filter through all the pokemon loaded based on search term
  // Reactive function that automatically runs based on text/value change
  let searchTerm = '';
  let searchResults;
  let searching = false;
  let emptyResults = false;

  $: {

    if (searchTerm != '') {

      // Trigger search display and filter through pokemon
      searching = true;
      searchResults = allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
      emptyResults = searchResults.length == 0;
    } else {

      // Hide search display and empty search results
      searching = false;
      searchResults = [];
      emptyResults = false;
    }

  }

</script>


<!-- Main Container -->
<div class="md:w-3/4 w-[90%] mx-auto my-24 max-w-4xl relative">
  <div class="items-center justify-center flex flex-col w-full md:flex-row relative md:h-[75vh]">


    <!-- Left pokedex -->
    <div class="w-full md:w-1/2 md:p-10 p-6 bg-primary shadow-base border-2 border-black grid md:absolute left-0 bottom-0 m-0">


      <!-- Search -->
      <input bind:value={searchTerm} type="text" placeholder="Search the pokédex..." class="outline-none w-full text-sm border-2 border-black rounded-md mb-8 py-1 px-3 bg-light-grey" />
      <!-- /Search -->


      {#if searching}


      <!-- Search Results -->
      <div class="w-full h-[400px] overflow-y-scroll no_scrollbar" on:click={() => {searching = false; searchTerm = ""}}>

        {#if searchResults}

          {#if emptyResults}

          <p class="text-center">Sorry, we couldn't find what you're looking for.</p>

          {:else}

          {#each searchResults as pokemon}
            <PokeCard pokemon={pokemon} />
          {/each}

          {/if}

        {:else}

        <div class="absolute right-0 left-0 top-1/3 m-auto w-40 text-center wrapper">
          <Circle size="60" color="#ffffff" unit="px"></Circle>
        </div>

        {/if}

      </div>
      <!-- /Search Results -->


      {:else}


      <Screen />


      <MiddleBtns />


      <CircleAndArrows />

      {/if}

    </div>
    <!-- /Left pokedex -->


    <!-- Hinges -->
    <div class="md:block hidden absolute bg-black z-20 md:w-5 md:h-24 md:left-auto rounded-md my-5 md:bottom-[250px] bottom-[438px] h-5 w-20 left-5"></div>
    <div class="md:block hidden absolute bg-black z-20 md:w-5 md:h-24 md:right-auto rounded-md my-5 md:bottom-[15px] bottom-[438px] h-5 w-20 right-5"></div>
    <!-- /Hinges -->


    <!-- Right pokedex -->
    <div class="w-full md:w-1/2 grid md:absolute right-0 bottom-0 m-0">
      <div class="w-full md:p-10 p-6 right_pokedex bg-primary shadow-base border-2 border-black">


        <!-- Right Container -->
        <div class="w-full bg-grey mb-8 rounded-md shadow-base border-2 border-black p-5">
          <Tabs />
        </div>
        <!-- /Right Container -->


      </div>
    </div>
    <!-- /Right pokedex -->


  </div>
</div>
<!-- /Main Container -->
