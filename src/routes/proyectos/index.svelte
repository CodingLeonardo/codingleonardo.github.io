<script>
  import Proyecto from "../../components/Proyecto.svelte";

  import proyectos from "./_proyectos.js";
  console.log(proyectos);
</script>

<style>
  .Proyectos h1 {
    text-align: center;
    font-weight: bold;
    margin-bottom: 1em;
    font-size: 2.5em;
  }
  .Proyectos-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5em;
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
  <h1>Proyectos</h1>
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
