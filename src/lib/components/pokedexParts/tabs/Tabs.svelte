<script>
  import { currentTab } from "$lib/stores/tabs";
  import TabsNav from "./TabsNav.svelte";
  import AboutTab from "./AboutTab.svelte";
  import StatsTab from "./StatsTab.svelte";
  import MovesTab from "./MovesTab.svelte";
</script>


<!-- Tabs Nav -->
<TabsNav />
<!-- /Tabs Nav -->


<!-- Tab Details Container -->
<div class="w-full m-0 overflow-y-scroll h-[250px] no_scrollbar">


  <!-- Tabs -->
  {#if $currentTab === 0}

  <AboutTab />

  {:else if $currentTab === 1}

  <StatsTab />

  {:else}

  <MovesTab />

  {/if}
  <!-- /Tabs -->


</div>
<!-- /Tab Details Container -->
