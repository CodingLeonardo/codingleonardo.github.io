<script>
  export let name;
  export let href;
  export let src;
  export let textDecoration = "underline";
  export let fontSize = 1;
</script>

<style>
  .Link {
    display: inline-flex;
    align-items: center;
    margin: 0 1em;
    text-decoration-color: rgba(0, 46, 2, 0.5);
  }

  .Link span {
    font-weight: 500;
    text-transform: capitalize;
  }

  .Link .Link__icon {
    display: grid;
    height: 1.5em;
    width: 1.8em;
    margin-left: 0.2em;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.3em;
    overflow: hidden;
  }

  .Link__icon .Link__icon-link {
    width: 1.1em;
    height: 1.1em;
  }

  .Link__icon img {
    width: 1.35em;
    height: 1.35em;
    transition: all 200ms;
    transform: translateX(-30px);
    margin-left: 0.4em;
  }

  .Link:hover img {
    transform: translateX(0px);
  }
</style>

<a
  target="_blank"
  {href}
  class="Link"
  style={`text-decoration: ${textDecoration}; font-size: ${fontSize}em`}>
  <span>{name}</span>
  <div class="Link__icon">
    <img class="Link__icon-link" src="./images/link.svg" alt="" />
    <img src={`./images/${src}.svg`} alt="" />
  </div>
</a>
