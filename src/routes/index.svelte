<script>

</script>

<style>
  .Home-hero {
    height: calc(100vh - 8.5em);
    width: 100%;
    color: #002e02;
  }
  .Home-Profile {
    padding-top: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .Home-Profile__image {
    height: 38vh;
    width: 38vh;
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
  .Home-social__links {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
  }
  .Home-social-link {
    width: 2.5em;
    height: 2.5em;
    margin: 0 0.8em;
  }
  .Home-social-link img {
    width: 100%;
    height: 100%;
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
        <div class="Home-social__links">
          <a
            href="https://www.facebook.com/CodingLeonardo"
            class="Home-social-link">
            <img src="./images/facebook.svg" alt="" />
          </a>
          <a href="https://twitter.com/CodingLeonardo" class="Home-social-link">
            <img src="./images/twitter.svg" alt="" />
          </a>
          <a
            href="https://www.instagram.com/codingleonardo"
            class="Home-social-link">
            <img src="./images/instagram.svg" alt="" />
          </a>
          <a href="https://github.com/CodingLeonardo" class="Home-social-link">
            <img src="./images/github.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
