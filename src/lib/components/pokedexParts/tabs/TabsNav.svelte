<script>
  import { currentTab } from "$lib/stores/tabs";
</script>


<div class="flex items-center justify-center row mb-5">
  <div class="w-1/4 py-2 relative text-center cursor-pointer {$currentTab == 0 ? 'border border-black' : ''}" on:click={() => currentTab.set(0)}>
    <p class="text-sm">About</p>
    <div class="h-px w-1/2 absolute bottom-0 mx-auto left-0 right-0"></div>
  </div>

  <div class="w-1/4 py-2 relative text-center cursor-pointer {$currentTab == 1 ? 'border border-black' : ''}" on:click={() => currentTab.set(1)}>
    <p class="text-sm">Stats</p>
    <div class="h-px w-full absolute bottom-0 mx-auto left-0 right-0"></div>
  </div>

  <div class="w-1/4 py-2 relative text-center cursor-pointer {$currentTab == 2 ? 'border border-black' : ''}" on:click={() => currentTab.set(2)}>
    <p class="text-sm">Moves</p>
    <div class="h-px w-full absolute bottom-0 mx-auto left-0 right-0"></div>
  </div>
</div>
