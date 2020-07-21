<script>
  import Certificado from "../../components/Certificado.svelte";
  import IntersectionObserver from "../../components/IntersectionObserver.svelte";
  import { writable, readable } from "svelte/store";
  import certificados from "./_certificados.js";
  console.log(certificados);

  const certificadosFiltered = writable(certificados);

  const handleClick = event => {
    if (event.target.attributes[0].value === "CrecimientoProfesional") {
      certificadosFiltered.update(c =>
        certificados.filter(
          certificado => certificado.categorie === "CrecimientoProfesional"
        )
      );
    }
    if (event.target.attributes[0].value === "Marketing") {
      certificadosFiltered.update(c =>
        certificados.filter(
          certificado => certificado.categorie === "Marketing"
        )
      );
    }
    if (event.target.attributes[0].value === "Programacion") {
      certificadosFiltered.update(c =>
        certificados.filter(
          certificado => certificado.categorie === "Programacion"
        )
      );
    }
    if (event.target.attributes[0].value === "Todos") {
      certificadosFiltered.update(c => certificados);
    }
    console.log($certificadosFiltered);
  };
</script>

<style>
  .Certificados h1 {
    font-size: 2.5em;
    font-weight: bold;
    text-align: center;
  }
  .Certificados-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1em;
    align-items: center;
    justify-items: center;
    width: 80%;
    margin: 0 auto;
  }
  .Certificados-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1em 0;
  }
  .Certificados-buttons button {
    background: #eaeaee;
    border: none;
    box-shadow: inset 0 -0.3em 0 0 rgba(0, 0, 0, 0.5);
    padding: 1em 1.5em;
    border-radius: 0.4em;
    margin: 0 0.5em;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    transition: 0.5s;
  }
  .Certificados-buttons button:hover {
    transform: scale(1.1);
  }
</style>

<svelte:head>
  <title>CodingLeonardo | Certificados</title>
</svelte:head>

<div class="Certificados">
  <h1>Certificados</h1>
  <div class="Certificados-buttons">
    <button categorie="Todos" on:click={handleClick}>Todos</button>
    <button categorie="Programacion" on:click={handleClick}>
      Programacion
    </button>
    <button categorie="Marketing" on:click={handleClick}>Marketing</button>
    <button categorie="CrecimientoProfesional" on:click={handleClick}>
      Crecimiento Profesional
    </button>
  </div>
  <div class="Certificados-container">
    {#each $certificadosFiltered as certificado}
      <!-- <IntersectionObserver let:intersecting once bottom={400}>
        {#if intersecting}
          <Certificado
            name={certificado.name}
            src={certificado.src}
            categories={certificado.categories} />
        {:else}
          <Loader />
        {/if}
      </IntersectionObserver> -->
      <Certificado
        name={certificado.name}
        src={certificado.src}
        categories={certificado.categories} />
    {:else}
      <h1>Loading....</h1>
    {/each}
  </div>
</div>
