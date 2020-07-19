<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`proyectos.json`)
      .then(r => r.json())
      .then(proyectos => {
        return { proyectos };
      });
  }
</script>

<script>
  export let proyectos;

  import Proyecto from "../../components/Proyecto.svelte";
</script>

<style>
  .Proyectos-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1em;
    align-items: center;
    justify-items: center;
    width: 80%;
    margin: 0 auto;
  }
</style>

<svelte:head>
  <title>CodingLeonardo | Proyectos</title>
</svelte:head>

<div class="Proyectos">
  <div class="Proyectos-container">
    {#each proyectos as proyecto}
      <Proyecto
        name={proyecto.name}
        href={proyecto.href}
        src={proyecto.src}
        description={proyecto.description} />
    {/each}
  </div>
</div>
