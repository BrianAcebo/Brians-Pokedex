<script>
  import { imageOptions } from "$lib/stores/imageOptions";


  // Update image options in store
  const setImageOptions = (isMale, isShiny, isFront) => {
    imageOptions.set({isMale, isShiny, isFront})
  }
</script>


<!-- Middle Btns -->
<div class="flex items-center justify-between px-10 mb-8">
  <div class="flex items-center justify-between">
    <div class="w-5 h-3 {$imageOptions.isShiny ? 'bg-grey' : 'bg-light-grey'} mr-3 shadow-base border-2 border-black cursor-pointer" on:click={setImageOptions($imageOptions.isMale, false, $imageOptions.isFront)}></div>
    <div class="w-5 h-3 {$imageOptions.isShiny ? 'bg-light-grey' : 'bg-grey'} shadow-base border-2 border-black cursor-pointer" on:click={setImageOptions($imageOptions.isMale, true, $imageOptions.isFront)}></div>
  </div>

  <div class="flex items-center justify-between">

    <div class="p-2 rounded-full mr-3 shadow-base border-2 cursor-pointer border-black {$imageOptions.isMale ? 'bg-light-grey' : 'bg-grey'}" on:click={setImageOptions(true, $imageOptions.isShiny, $imageOptions.isFront)}>
      <img class="w-3" src="/img/icons/maleIcon.png" alt="femaleIcon" />
    </div>

    <div class="p-2 rounded-full shadow-base border-2 border-black cursor-pointer {$imageOptions.isMale ? 'bg-grey' : 'bg-light-grey'}" on:click={setImageOptions(false, $imageOptions.isShiny, $imageOptions.isFront)}>
      <img class="w-3" src="/img/icons/femaleIcon.png" alt="femaleIcon" />
    </div>
  </div>
</div>
<!-- /Middle Btns -->
