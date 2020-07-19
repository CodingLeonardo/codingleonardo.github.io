<script>

</script>

<style>
  .Header-profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .Header-profile__figure {
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    width: 15em;
    height: 15em;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  .Header-profile__figure a {
    display: flex;
  }
  .Header-profile__figure img {
    display: flex;
    width: 100%;
  }
  .Header-profile__info h1 {
    font-size: 2.2em;
    letter-spacing: -0.01em;
    font-weight: bold;
  }
  .Header-profile__info span {
    font-size: 0.8em;
  }
  .Header-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3em;
    margin-top: 0.5em;
    border-bottom: 0.1em solid #999;
  }
  .Header-nav ul {
    display: inherit;
    height: inherit;
    margin: 0;
    padding: 0;
  }
  .Header-nav li {
    display: inherit;
    height: inherit;
    padding: 0 0.5em;
  }
  .Header-nav a {
    display: inherit;
    height: inherit;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  .Header-social {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3em;
    margin-top: 1em;
    margin-left: 1em;
  }
  .Header-social__link {
    height: 2em;
    margin: 0 0.2em;
    transition: 0.5s;
  }
  .Header-social__link img {
    height: 100%;
  }
  .Header-social__link:hover {
    transform: scale(1.2);
  }
</style>

<header class="Header">
  <div class="Header-social">
    <a
      href="https://www.facebook.com/CodingLeonardo"
      target="_blank"
      class="Header-social__link">
      <img src="./images/facebook.svg" alt="" />
    </a>
    <a
      href="https://www.twitter.com/CodingLeonardo"
      target="_blank"
      class="Header-social__link">
      <img src="./images/twitter.svg" alt="" />
    </a>
    <a
      href="https://www.instagram.com/codingleonardo/"
      target="_blank"
      class="Header-social__link">
      <img src="./images/instagram.svg" alt="" />
    </a>
    <a
      href="https://github.com/CodingLeonardo"
      target="_blank"
      class="Header-social__link">
      <img src="./images/github.svg" alt="" />
    </a>
  </div>
  <div class="Header-profile">
    <figure class="Header-profile__figure">
      <a href="/">
        <img src="Leonardo.jpg" alt="" />
      </a>
    </figure>
    <div class="Header-profile__info">
      <h1>Leonardo Rivero</h1>
      <span>Frontend Developer 🚀| Designer 🌈</span>
    </div>
  </div>
  <nav class="Header-nav">
    <ul>
      <li>
        <a href="/certificados">Certificados</a>
      </li>
      <li>
        <a href="/habilidades">Habilidades</a>
      </li>
      <li>
        <a href="/proyectos">Proyectos</a>
      </li>
    </ul>
  </nav>
</header>
