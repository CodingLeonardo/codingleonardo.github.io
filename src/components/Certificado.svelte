<script>
  export let name;
  export let src;
  export let categories;
</script>

<style>
  .Certificado {
    display: flex;
    width: 100%;
    border-radius: 0.4em;
    overflow: hidden;
    box-shadow: 0 0 0.5em 0 rgba(0, 0, 0, 0.3);
    transition: 0.5s;
  }
  .Certificado img {
    display: flex;
    width: 100%;
  }
  .Certificado:hover {
    transform: scale(1.2);
  }
</style>

<div class="Certificado" {categories}>
  <img {src} alt={name} />
</div>
