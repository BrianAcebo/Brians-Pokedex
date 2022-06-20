<script context="module">
  export async function load({params}) {
    try {
      const id = params.id;
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const res = await fetch(url);
      const pokemon = await res.json();

      return { props: { pokemon } };
    } catch (err) {
      console.log('Error: ', err);
    }
  }
</script>

<script>
  export let pokemon;
  const type = pokemon.types[0].type.name;
</script>

<h1>{pokemon.name}</h1>

<img class="card-image" src={pokemon.sprites['front_default']} alt={pokemon.name} />
