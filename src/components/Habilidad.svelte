<script>
  export let src;
  export let name;
  export let background;
</script>

<style>
  .Habilidad {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 15em;
    box-shadow: 0 0 0.5em 0 rgba(0, 0, 0, 0.3);
    border-radius: 0.5em;
    overflow: hidden;
    transition: 0.5s;
  }
  .Habilidad:hover {
    transform: scale(1.1);
  }
  .Habilidad-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
  }
  .Habilidad-image {
    height: 50%;
  }
  .Habilidad-image img {
    height: 100%;
  }
  .Habilidad-title {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 30%;
    background: white;
  }
  .Habilidad-title h1 {
    font-weight: bold;
  }
</style>

<div class="Habilidad" style={` background: ${background} `}>
  <div class="Habilidad-header" style={` background: ${background} `}>
    <div class="Habilidad-image">
      <img {src} alt={name} />
    </div>
  </div>
  <div class="Habilidad-title">
    <h1>{name}</h1>
  </div>
</div>
