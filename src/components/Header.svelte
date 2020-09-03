<script>
  let OpenedMenu = false;

  const handleClick = () => {
    if (OpenedMenu === true) {
      OpenedMenu = false;
    } else {
      OpenedMenu = true;
    }
  };
</script>

<style>
  .Header {
    position: relative;
    z-index: 5;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.5em;
    color: #002e02;
  }
  .Header-logo {
    display: block;
    height: 100%;
  }
  .Header-logo a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    text-decoration: none;
  }
  .Header-logo span {
    font-size: 1.8em;
    font-weight: 900;
    margin-left: 0.5em;
  }
  .Header-logo img {
    height: 3em;
  }
  .Header-button {
    position: relative;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.8em;
    height: 100%;
  }

  .open {
    right: 10%;
  }

  .Header-button__burger {
    height: 60%;
    width: 100%;
    cursor: pointer;
  }
  .Header-button__burger i {
    display: block;
    height: 5px;
    width: inherit;
    background: #002e02;
  }
  .Header-button__burger i:nth-child(2) {
    margin: 25.3% 0;
  }
  .Header-button__burger i.special:nth-child(1) {
    transform: rotate(45deg) translate(12px, 12px);
  }
  .Header-button__burger i.special {
    transform: rotate(-45deg) translate(0px, 0px);
  }
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  .Header-menu__container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
  }
  .Header-menu__overlay {
    position: absolute;
    height: 100vh;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 15;
    background: rgba(1, 52, 0, 0.36);
    backdrop-filter: blur(2px);
    overflow: hidden;
  }
  .Header-menu {
    position: absolute;
    z-index: 20;
    right: 0;
    width: 30vw;
    height: 100vh;
    background: #80f08b;
  }
  .Header-menu ul {
    padding: 1em;
    padding-top: 6em;
    text-align: right;
  }
  .Header-menu ul li {
    list-style: none;
    margin: 0.8em 0;
  }
  .Header-menu ul li a {
    font-size: 2.2em;
    text-decoration: none;
  }
  .Header-menu ul li a img {
    height: 0.7em;
    width: 0.7em;
    opacity: 0.6;
  }
  .Header-menu ul li a:hover img {
    opacity: 1;
  }
</style>

<header class="Header">
  <div class="container">
    <div class="Header-logo">
      <a href=".">
        <img src="./logo.svg" alt="" />
        <span>CodingLeonardo</span>
      </a>
    </div>
    <div class="Header-button" class:open={OpenedMenu}>
      <!-- ☰ -->
      <div on:click={handleClick} class="Header-button__burger">
        {#if !OpenedMenu}
          <i />
          <i />
          <i />
        {:else}
          <i class="special" />
          <i class="special" />
        {/if}
      </div>
    </div>
    <div
      class="Header-menu__container"
      class:show={OpenedMenu}
      class:hide={!OpenedMenu}>
      <div class="Header-menu__overlay">
        {#if OpenedMenu}
          <div class="Header-menu">
            <ul>
              <li>
                <a href="/certificados">
                  Certificados
                  <img src="./images/menu-arrow.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="/habilidades">
                  Habilidades
                  <img src="./images/menu-arrow.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="/proyectos">
                  Proyectos
                  <img src="./images/menu-arrow.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        {/if}
      </div>
    </div>
  </div>
</header>
