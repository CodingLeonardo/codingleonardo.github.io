<script>
  export let segment;
  import Link from "./Link.svelte";
</script>

<style>
  .Footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 4em;
    color: #002e02;
    background: #88ff92;
  }
  .Footer span {
    font-weight: 900;
    font-size: 18px;
  }
  .Footer.index span {
    font-weight: normal;
    font-size: 1.1em;
  }
  .Footer.index {
    flex-direction: row;
  }

  .Footer-social {
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

{#if segment === undefined}
  <footer class="Footer index">
    <div class="Footer-social">
      <Link
        name="Facebook"
        src="facebook"
        href="https://www.facebook.com/CodingLeonardo" />
      <Link
        name="Twitter"
        src="twitter"
        href="https://twitter.com/CodingLeonardo" />
      <Link
        name="Instagram"
        src="instagram"
        href="https://www.instagram.com/codingleonardo" />
      <Link
        name="Github"
        src="github"
        href="https://github.com/CodingLeonardo" />
    </div>
  </footer>
{:else}
  <footer class="Footer">
    <span>Hecho con 💚</span>
    <span>© 2020 Leonardo Rivero</span>
  </footer>
{/if}
