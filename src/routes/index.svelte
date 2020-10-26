<script>

</script>

<style>
  .Home-hero {
    height: calc(100vh - 9em);
    width: 100%;
    color: #002e02;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Home-Profile {
    position: relative;
    bottom: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .Home-Profile__image {
    height: 20em;
    width: 20em;
    border-radius: 50%;
    overflow: hidden;
  }
  .Home-Profile__image img {
    width: 100%;
  }
  .Home-Profile h1 {
    margin-top: 0.8em;
    font-weight: 900;
    font-size: 40px;
  }
  .Home-Profile h3 {
    margin-top: 0.8em;
    font-weight: bold;
    font-size: 22px;
  }
  .Home-link {
    display: inline-flex;
    align-items: center;
    margin-top: 1.5em;
    text-decoration: none;
    color: #377225;
  }
  .Home-link span {
    font-size: 1em;
    font-weight: 700;
  }
  .Home-link img {
    height: 0.9em;
    margin-left: 0.5em;
    opacity: 0.5;
  }
  .Home-link:hover img {
    opacity: 1;
    transition: 0.3s all;
  }
  @media screen and (min-width: 768px) {
    .Home-Profile h1 {
      margin-top: 0.8em;
      font-weight: 900;
      font-size: 2.5em;
    }
    .Home-Profile h3 {
      margin-top: 0.8em;
      font-weight: bold;
      font-size: 1.3em;
    }
  }
  @media screen and (min-width: 1024px) {
    .Home-Profile h1 {
      margin-top: 0.8em;
      font-weight: 900;
      font-size: 2.6em;
    }
    .Home-Profile h3 {
      margin-top: 0.8em;
      font-weight: bold;
      font-size: 1.6em;
    }
  }
  @media screen and (min-width: 1440px) {
    .Home-Profile h1 {
      margin-top: 0.8em;
      font-weight: 900;
      font-size: 2.9em;
    }
    .Home-Profile h3 {
      margin-top: 0.8em;
      font-weight: bold;
      font-size: 1.9em;
    }
  }
</style>

<svelte:head>
  <title>CodingLeonardo</title>
</svelte:head>

<div class="Home">
  <div class="Home-hero">
    <div class="container container-home">
      <div class="Home-Profile">
        <div class="Home-Profile__image">
          <img src="./images/Leonardo.jpg" alt="" />
        </div>
        <h1>Hola, soy Leonardo Rivero</h1>
        <h3>Frontend Developer 🚀 | Designer 🎨</h3>
        <a href="./proyectos" class="Home-link">
          <span>Ver los proyectos en los que he estado trabajando</span>
          <img src="./images/project-arrow.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</div>
