<script>
  export let name;
  export let href;
  export let linkGithub;
  export let slug;

  import Link from "./Link.svelte";
</script>

<style>
  .Proyecto {
    width: 100%;
    max-width: 400px;
    height: 225px;
    overflow: hidden;
    cursor: pointer;
    color: #002e02;
  }
  .Proyecto-screen-bar {
    height: 1.6em;
    position: relative;
    background: #64db51;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em 1em 0 0;
  }
  .Proyecto-screen-bar__title {
    font-size: 0.8em;
    font-weight: 900;
  }
  .Proyecto-screen-main {
    width: 100%;
    height: 200px;
    border-radius: 0 0 1em 1em;
    overflow: hidden;
  }
  .Proyecto-screen-main img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
  .Proyecto-options {
    width: 100%;
    height: 200px;
    transition: transform 0.3s;
    backdrop-filter: blur(3px);
    background: rgba(172, 252, 121, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 1em 1em;
    overflow: hidden;
  }
  .Proyecto-options .options {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .Proyecto-options .options a {
    margin-bottom: 1.2em;
    margin-top: 1em;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 600;
    color: #002e02;
    display: flex;
    align-items: center;
  }
  .Proyecto-options .options a:last-child {
    font-size: 1em;
    margin: 0;
  }
  .Proyecto-options .options img {
    margin-left: 0.2em;
    opacity: 0.4;
    transition: 0.5s;
  }
  .Proyecto-options .options a:hover img {
    opacity: 1;
  }
  .Proyecto-options .options a:last-child {
    color: #377225;
  }
  .Proyecto:hover .Proyecto-options {
    transform: translateY(-200px);
  }
</style>

<div class="Proyecto">
  <div class="Proyecto-screen-bar">
    <div class="Proyecto-screen-bar__title">{name}</div>
  </div>
  <div class="Proyecto-screen-main">
    <img src={`/images/${slug}-1.png`} alt={name} />
  </div>
  <div class="Proyecto-options">
    <div class="options">
      <Link
        name="Codigo"
        src="github"
        href={linkGithub}
        textDecoration="none" />
      <a {href} target="_blank">
        Vista previa en vivo
        <img
          src="./images/menu-arrow.svg"
          alt="Preview arrow"
          class="options__icon" />
      </a>
      <a href={`./proyectos/${slug}`}>
        Aprende más...
        <img
          src="./images/project-arrow.svg"
          alt="Learn more arrow"
          class="options__icon" />
      </a>
    </div>
  </div>
</div>
