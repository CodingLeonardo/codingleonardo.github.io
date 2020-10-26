<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`proyectos/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { proyecto: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let proyecto;
</script>

<style>
  .Proyecto p {
    font-size: 1em;
    color: #002e02;
    font-weight: 600;
    margin-top: 1em;
  }
  .live-preview {
    display: inline-block;
    color: #002e02;
    background: linear-gradient(95.66deg, #88ff92 2.51%, #c4fa71 98.07%);
    font-weight: 900;
    text-decoration: none;
    padding: 1em 1.5em;
    border-radius: 0.8em;
    margin-top: 1em;
    margin-right: 1em;
  }

  .code {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: black;
    font-weight: 900;
    text-decoration: none;
    padding: 1em 1.5em;
    border-radius: 0.8em;
    margin-top: 1em;
  }
  .code img {
    height: 1.5em;
    margin-left: 0.5em;
  }
  .Proyecto-images {
    width: 80%;
    margin: 0 auto;
    margin-top: 2em;
  }
  .Proyecto-screen-bar {
    height: 2.5em;
    position: relative;
    background: #64db51;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5em 0.5em 0 0;
  }
  .Proyecto-screen-bar__title {
    font-size: 1.2em;
    font-weight: 900;
  }
  .Proyecto-screen-main {
    width: 100%;
    border-radius: 0 0 0.5em 0.5em;
    overflow: hidden;
  }
  .Proyecto-screen-main img {
    width: 100%;
    border-radius: 0 0 0.5em 0.5em;
  }
  .about h1 {
    color: #002e02;
    font-weight: 900;
    font-size: 2.5em;
    margin-top: 1em;
  }
  .about p {
    color: #002e02;
    font-weight: 400;
    font-size: 1.2em;
    margin-left: 0.8em;
    margin-top: 0.8em;
  }
  .tecnologies {
    margin-bottom: 0.8em;
  }
  .tecnologies h1 {
    color: #002e02;
    font-weight: 900;
    font-size: 2.5em;
    margin-top: 0.5em;
  }
  .tecnologies ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-left: 0.8em;
    margin-top: 0.8em;
  }
  .tecnologies li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
  }
  .tecnologies img {
    height: 1.8em;
  }
  .tecnologies p {
    margin: 0;
    margin-left: 0.5em;
    font-weight: 400;
    font-size: 1.2em;
  }
</style>

<svelte:head>
  <title>CodingLeonardo | {proyecto.name}</title>
</svelte:head>

<div class="Proyecto">
  <div class="container">
    <p>{proyecto.description}</p>
    <a class="live-preview" href={proyecto.href} target="_blank">Vista previa en vivo</a>
    <a class="code" href={proyecto.linkGithub} target="_blank">
      <span>Code</span>
      <img src="/images/github-white.svg" alt="" />
    </a>
    <div class="Proyecto-images">
      <div class="Proyecto-screen-bar">
        <div class="Proyecto-screen-bar__title">{proyecto.name}</div>
      </div>
      <div class="Proyecto-screen-main">
        <img src={`/images/${proyecto.slug}-1.png`} alt={proyecto.name} />
      </div>
    </div>
    <div class="about">
      <h1>Acerca de</h1>
      <p>{proyecto.about}</p>
    </div>
    <div class="tecnologies">
      <h1>Tecnologias</h1>
      <ul>
        {#each proyecto.tecnologies as tecnologie}
          <li>
            <img src={`/images/${tecnologie.toLowerCase()}.svg`} alt="" />
            <p>{tecnologie}</p>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
