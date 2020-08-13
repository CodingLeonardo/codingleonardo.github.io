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
    position: absolute;
    z-index: 5;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.5em;
    color: #002e02;
  }
  .Header a {
    font-size: 1.8em;
    font-weight: 900;
    text-decoration: none;
  }

  .Header-button__container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .Header button {
    position: relative;
    width: 2.8em;
    height: 60%;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    z-index: 25;
  }
  .Header button i {
    display: block;
    height: 5px;
    width: 100%;
    background: black;
  }
  .Header button i:nth-child(2) {
    margin: 25.3% 0;
  }
  .Header-menu__overlay {
    position: absolute;
    height: 100vh;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    background: rgba(1, 52, 0, 0.36);
    backdrop-filter: blur(2px);
  }
  .Header-menu {
    position: absolute;
    right: 0;
    z-index: 20;
    background: #80f08b;
    height: 100vh;
    width: 20vw;
  }
  .Header-menu ul {
    padding-top: 6em;
    text-align: center;
  }
  .Header-menu ul li {
    list-style: none;
    margin: 0.8em 0;
  }
  .Header-menu ul li a {
    font-size: 2.2em;
  }
</style>

<div class="Header">
  <div class="container">
    <div>
      <a href=".">CodingLeonardo</a>
    </div>
    <div class="Header-button__container">
      <button on:click={handleClick}>
        <i />
        <i />
        <i />
        <!-- ☰ -->
      </button>
      {#if OpenedMenu}
        <div class="Header-menu__overlay">
          <div class="Header-menu">
            <ul>
              <li>
                <a href="/sobre-mi">Sobre mi</a>
              </li>
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
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>
