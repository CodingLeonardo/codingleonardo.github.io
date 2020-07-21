<script>
  export let name;
  export let description;
  export let src;
  export let href;

  let loaded = false;

  function load(img) {
    img.onload = () => (loaded = true);
  }
</script>

<style>
  .Proyecto {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 15em;
    margin: 0;
    perspective: 1000px;
    transition: 0.5s;
    opacity: 0;
  }
  .Proyecto-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .Proyecto-front,
  .Proyecto-back {
    border-radius: 0.4em;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    box-shadow: 0 0 0.5em 0 rgba(0, 0, 0, 0.2);
  }
  .Proyecto-back {
    background-color: #f1f1f1;
    transform: rotateY(180deg);
  }
  .Proyecto-front {
    background-color: white;
  }
  .Proyecto:hover .Proyecto-inner {
    transform: rotateY(180deg);
  }
  .Proyecto-image {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .Proyecto-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .Proyecto-title {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    z-index: 10;
    height: 30%;
    width: 100%;
    background: white;
  }
  .Proyecto-title h1 {
    font-size: 1.5em;
    font-weight: bold;
  }
  .Proyecto-description {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
  }
  .Proyecto-description p {
    font-weight: bold;
  }
  .loaded {
    opacity: 1;
  }
</style>

<a {href} class="Proyecto" class:loaded target="_blank">
  <div class="Proyecto-inner">
    <div class="Proyecto-front">
      <div class="Proyecto-title">
        <h1>{name}</h1>
      </div>
      <div class="Proyecto-image">
        <img use:load {src} alt={name} />
      </div>
    </div>
    <div class="Proyecto-back">
      <div class="Proyecto-description">
        <p>{description}</p>
      </div>
    </div>
  </div>
</a>
