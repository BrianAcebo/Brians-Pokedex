<script>
  import MainNav from "$lib/components/mainNav.svelte";
  import "../styles.css";
</script>

<slot></slot>

<style>
  :global(body){
    background-image: url("/img/bg/pokemonbg.gif");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
