<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  .background {
    background: linear-gradient(243.33deg, #80f08b 46.99%, #35cc44 99.77%);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -100;
  }
  .grid {
    display: grid;
    width: 100%;
    min-height: 100vh;
    grid-auto-rows: max-content;
  }
</style>

<div class="background" />

<div class="grid">
  <Header {segment} />
  <main>
    <slot />
  </main>
  <Footer />
</div>
