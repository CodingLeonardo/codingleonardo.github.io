<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<style>
  main {
    padding: 2em 0;
  }
</style>

<Header {segment} />

<main>
  <div class="container">
    <slot />
  </div>
</main>

<Footer />
