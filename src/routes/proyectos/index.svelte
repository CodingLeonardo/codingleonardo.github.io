<script>
  import Proyecto from "../../components/Proyecto.svelte";

  import proyectos from "./_proyectos.js";
</script>

<style>
  .Proyectos {
    padding: 2em;
  }
  .Proyectos-container {
    display: grid;
    gap: 20px;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
  }
</style>

<svelte:head>
  <title>CodingLeonardo | Proyectos</title>
</svelte:head>

<div class="Proyectos">
  <div class="container">
    <div class="Proyectos-container">
      {#each proyectos as proyecto}
        <Proyecto
          name={proyecto.name}
          href={proyecto.href}
          slug={proyecto.slug}
          description={proyecto.description}
          linkGithub={proyecto.linkGithub} />
      {/each}
    </div>
  </div>
</div>
