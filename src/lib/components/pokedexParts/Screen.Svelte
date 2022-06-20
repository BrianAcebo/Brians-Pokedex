<script>
  import { selectedPokemon, selectPokemon } from "$lib/stores/selectedPokemon";
  import { imageOptions } from "$lib/stores/imageOptions";


  // 1. Checks if there's a selected pokemon else show Brian's info
  // 2. Checks if the image is shiny or not
  // 3. Checks if the image is male or not
  // 3. Checks if the image is front or not
</script>


<!-- Screen -->
<div class="w-full h_16rem bg-light-grey mb-8 rounded-md shadow-base border-2 border-black flex justify-center items-center">


  <!-- Selected Pokemon -->
  {#if $selectedPokemon.id > 0}


    <!-- Is Shiny -->
    {#if $imageOptions.isShiny}


      <!-- Is Male -->
      {#if $imageOptions.isMale || !$selectedPokemon.sprites.front_female}


        <!-- Is Front -->
        {#if $imageOptions.isFront}
        <img class="w-40 h-40" src={$selectedPokemon.sprites.front_shiny} alt={$selectedPokemon.name}>
        {:else}
        <img class="w-40 h-40" src={$selectedPokemon.sprites.back_shiny} alt={$selectedPokemon.name}>
        {/if}
        <!-- /Is Front -->


      <!-- Is Male else -->
      {:else}


        <!-- Is Front -->
        {#if $imageOptions.isFront}
        <img class="w-40 h-40" src={$selectedPokemon.sprites.front_shiny_female} alt={$selectedPokemon.name}>
        {:else}
        <img class="w-40 h-40" src={$selectedPokemon.sprites.back_shiny_female} alt={$selectedPokemon.name}>
        {/if}
        <!-- /Is Front -->


      {/if}
      <!-- /Is Male -->


    <!-- Is Shiny else -->
    {:else}


      <!-- Is Male -->
      {#if $imageOptions.isMale || !$selectedPokemon.sprites.front_female}


        <!-- Is Front -->
        {#if $imageOptions.isFront}
        <img class="w-40 h-40" src={$selectedPokemon.sprites.front_default} alt={$selectedPokemon.name}>
        {:else}
        <img class="w-40 h-40" src={$selectedPokemon.sprites.back_default} alt={$selectedPokemon.name}>
        {/if}
        <!-- /Is Front -->


      <!-- Is Male else -->
      {:else}


        <!-- Is Front -->
        {#if $imageOptions.isFront}
        <img class="w-40 h-40" src={$selectedPokemon.sprites.front_female} alt={$selectedPokemon.name}>
        {:else}
        <img class="w-40 h-40" src={$selectedPokemon.sprites.back_female} alt={$selectedPokemon.name}>
        {/if}
        <!-- /Is Front -->


      {/if}
      <!-- /Is Male -->


    {/if}
    <!-- /Is Shiny -->


  <!-- Selected Pokemon else -->
  {:else}


    <!-- Is Shiny -->
    {#if $imageOptions.isShiny}


      <!-- Is Front -->
      {#if $imageOptions.isFront}
      <img class="w-40 h-40" src="/img/site/shiny.png" alt="Search through pokedex">
      {:else}
      <img class="w-40 h-40" src="/img/site/shiny-back.png" alt="Search through pokedex">
      {/if}
      <!-- /Is Front -->


    <!-- Is Shiny else -->
    {:else}


      <!-- Is Front -->
      {#if $imageOptions.isFront}
      <img class="w-40 h-40" src="/img/site/main.png" alt="Search through pokedex">
      {:else}
      <img class="w-40 h-40" src="/img/site/main-back.png" alt="Search through pokedex">
      {/if}
      <!-- /Is Front -->


    {/if}
    <!-- /Is Shiny -->


  {/if}
  <!-- /Selected Pokemon -->


</div>
<!-- /Screen -->


<style>
  /* Issues with tailwind so added fixed class */
  .h_16rem {
    height: 16rem;
  }
</style>
