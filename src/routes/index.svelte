<script>

</script>

<style>
  .Home {
    position: absolute;
    height: 100vh;
    width: 100%;
    background: radial-gradient(
      73.54% 74.07% at 50% 36.72%,
      #80f08b 54.06%,
      #35cc44 100%
    );
    overflow: hidden;
    color: #002e02;
  }
  .container-home {
    padding-top: 4em;
  }
  .Home-Profile {
    margin-top: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .Home-image {
    height: 35vh;
    width: 35vh;
    border-radius: 50%;
    overflow: hidden;
  }
  .Home-image img {
    width: 100%;
  }
  .Home-Profile h1 {
    margin-top: 0.8em;
    font-weight: 900;
    font-size: 38px;
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
  <div class="container container-home">
    <div class="Home-Profile">
      <div class="Home-image">
        <img src="./images/Leonardo.jpg" alt="" />
      </div>
      <h1>Hola, soy Leonardo Rivero</h1>
      <h3>Frontend Developer 🚀 | Designer 🌈</h3>
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
