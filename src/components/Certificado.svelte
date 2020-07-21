<script>
  export let name;
  export let src;
  export let categories;

  let loaded = false;

  function load(img) {
    img.onload = () => (loaded = true);
  }
</script>

<style>
  .Certificado {
    display: flex;
    width: 100%;
    border-radius: 0.4em;
    overflow: hidden;
    box-shadow: 0 0 0.5em 0 rgba(0, 0, 0, 0.3);
    transition: 0.5s;
    opacity: 0;
  }
  .Certificado img {
    display: flex;
    width: 100%;
  }
  .loaded {
    opacity: 1;
  }
  .Certificado:hover {
    transform: scale(1.2);
  }
</style>

<div class="Certificado" class:loaded {categories}>
  <img use:load {src} alt={name} />
</div>
