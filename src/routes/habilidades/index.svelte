<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`habilidades.json`)
      .then(r => r.json())
      .then(habilidades => {
        return { habilidades };
      });
  }
</script>

<script>
  export let habilidades;
  console.log(habilidades);

  import Habilidad from "../../components/Habilidad.svelte";
</script>

<style>
  .Habilidades {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .Habilidades h1 {
    margin: 0.5em 0;
    font-size: 2.5em;
    font-weight: bold;
  }
  .Habilidades-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    align-items: center;
    justify-items: center;
    gap: 1.5em;
    width: 80%;
    margin: 0 auto;
  }
</style>

<svelte:head>
  <title>CodingLeonardo | Habilidades</title>
</svelte:head>

<div class="Habilidades">
  <h1>Lenguajes</h1>
  <div class="Habilidades-container">
    {#each habilidades.lenguages as lenguage}
      <Habilidad
        name={lenguage.name}
        src={lenguage.src}
        background={lenguage.background} />
    {/each}
  </div>
  <h1>Frameworks y Librerias</h1>
  <div class="Habilidades-container">
    {#each habilidades.frameworks as framework}
      <Habilidad
        name={framework.name}
        src={framework.src}
        background={framework.background} />
    {/each}
  </div>
  <h1>Herramientas de desarrollo</h1>
  <div class="Habilidades-container">
    {#each habilidades.devtools as devtool}
      <Habilidad
        name={devtool.name}
        src={devtool.src}
        background={devtool.background} />
    {/each}
  </div>
  <h1>Consulta de datos</h1>
  <div class="Habilidades-container">
    {#each habilidades.consultdatas as consultdata}
      <Habilidad
        name={consultdata.name}
        src={consultdata.src}
        background={consultdata.background} />
    {/each}
  </div>
</div>
