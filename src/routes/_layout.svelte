<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  .background {
    background: linear-gradient(
      120deg,
      rgba(128, 240, 139, 1) 0%,
      rgba(95, 223, 108, 1) 100%
    );
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
