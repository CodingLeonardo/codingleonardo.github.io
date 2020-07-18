<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`certificados.json`)
      .then(r => r.json())
      .then(certificados => {
        return { certificados };
      });
  }
</script>

<script>
  export let certificados;

  import Certificado from "../../components/Certificado.svelte";
  console.log(certificados);
</script>

<style>
  .Certificados {
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
  <title>CodingLeonardo | Certificados</title>
</svelte:head>

<div class="Certificados">
  {#each certificados as certificado}
    <Certificado
      name={certificado.name}
      src={certificado.src}
      categories={certificado.categories} />
  {:else}
    <h1>Loading...</h1>
  {/each}
</div>
