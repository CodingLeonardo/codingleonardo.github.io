<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  import { stores } from "@sapper/app";
  const { page } = stores();

  let slug;

  $: slug = $page.params.slug;

  export let segment;
</script>

<style>
  .background {
    /* background: linear-gradient(
      120deg,
      rgba(128, 240, 139, 1) 0%,
      rgba(95, 223, 108, 1) 100%
    ); */
    /* background: linear-gradient(
      90deg,
      rgba(104, 217, 147, 1) 0%,
      rgba(193, 248, 119, 1) 100%
    ); */
    background: linear-gradient(
      90deg,
      rgba(127, 240, 138, 1) 0%,
      rgba(196, 250, 113, 1) 100%
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

  .grid-index {
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr auto;
  }
</style>

{#if segment === undefined}
  <div class="background" />

  <div class="grid-index">
    <Header {segment} />
    <main>
      <slot />
    </main>
    <Footer {segment} />
  </div>
{:else}
  <div class="background" />

  <div class="grid">
    <Header {segment} {slug} />
    <main>
      <slot />
    </main>
    <Footer {segment} />
  </div>
{/if}
