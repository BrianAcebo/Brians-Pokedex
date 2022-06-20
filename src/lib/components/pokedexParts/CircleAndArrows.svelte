<script>
  import { selectedPokemon, selectPokemon } from "$lib/stores/selectedPokemon";
  import { imageOptions } from "$lib/stores/imageOptions";


  // Update image options in store
  const setImageOptions = (isMale, isShiny, isFront) => {
    imageOptions.set({isMale, isShiny, isFront})
  }
</script>


<!-- Circle and Arrows -->
<div class="flex items-center justify-between px-10">


  <!-- Circle -->
  <a href="https://brianacebo.com" target="_blank">
    <div class="p-4 rounded-full bg-grey shadow-base border-2 border-black flex justify-center item-center">
      <img class="w-4" src="/img/icons/home.png" alt="home" />
    </div>
  </a>
  <!-- /Circle -->


  <!-- Arrow Container -->
  <div class="flex">
    <div class="w-[4.5rem] h-[4.5rem] relative">


      <!-- Arrow Left -->
      <div on:click={setImageOptions($imageOptions.isMale, $imageOptions.isShiny, !$imageOptions.isFront)} class="w-6 h-6 cursor-pointer absolute left-0 top-6 bg-grey shadow-base border-2 border-black z-0 flex justify-center items-center">
        <img class="w-2" src="/img/icons/left-tri.png" alt="left-triangle" />
      </div>
      <!-- /Arrow Left -->


      <!-- Arrow Top -->
      <div on:click={$selectedPokemon.id ? selectPokemon($selectedPokemon.id + 1) : selectPokemon(1)} class="w-6 h-6 cursor-pointer absolute left-6 top-0 bg-grey shadow-base border-2 border-black z-0 flex justify-center items-center">
        <img class="w-2" src="/img/icons/top-tri.png" alt="top-triangle" />
      </div>
      <!-- /Arrow Top -->


      <!-- Arrow Right -->
      <div on:click={setImageOptions($imageOptions.isMale, $imageOptions.isShiny, !$imageOptions.isFront)} class="w-6 h-6 cursor-pointer absolute right-0 top-6 bg-grey shadow-base border-2 border-black z-10 flex justify-center items-center">
        <img class="w-2" src="/img/icons/right-tri.png" alt="right-triangle" />
      </div>
      <!-- /Arrow Right -->


      <!-- Arrow Mid -->
      <div class="w-6 h-6 absolute top-6 left-6 bg-grey shadow-base border-2 border-black z-0">

      </div>
      <!-- /Arrow Mid -->


      <!-- Arrow Bottom -->
      <div on:click={$selectedPokemon.id && $selectedPokemon.id != 1 ? selectPokemon($selectedPokemon.id - 1) : selectedPokemon.set({})} class="w-6 h-6 cursor-pointer absolute left-6 bottom-0 bg-grey shadow-base border-2 border-black z-10 flex justify-center items-center">
        <img class="w-2" src="/img/icons/bottom-tri.png" alt="bottom-triangle" />
      </div>
      <!-- /Arrow Bottom -->

    </div>
  </div>
  <!-- /Arrow Container -->


</div>
<!-- /Circle and Arrows -->
