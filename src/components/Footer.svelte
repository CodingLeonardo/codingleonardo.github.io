<script>
  export let segment;
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

  .Footer-social-link {
    display: inline-flex;
    align-items: center;
    margin: 0 1em;
    text-decoration-color: rgba(0, 46, 2, 0.5);
  }

  .Footer-social-link .Footer-social__icon {
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

  .Footer-social__icon .Footer-link {
    width: 1.1em;
    height: 1.1em;
  }

  .Footer-social__icon img {
    width: 1.35em;
    height: 1.35em;
    transition: all 200ms;
    transform: translateX(-30px);
    margin-left: 0.4em;
  }

  .Footer-social-link:hover img {
    transform: translateX(0px);
  }
</style>

{#if segment === undefined}
  <footer class="Footer index">
    <div class="Footer-social">
      <a
        target="_blank"
        href="https://www.facebook.com/CodingLeonardo"
        class="Footer-social-link">
        <span>Facebook</span>
        <div class="Footer-social__icon">
          <img class="Footer-link" src="./images/link.svg" alt="" />
          <img src="./images/facebook.svg" alt="" />
        </div>
      </a>
      <a
        target="_blank"
        href="https://twitter.com/CodingLeonardo"
        class="Footer-social-link">
        <span>Twitter</span>
        <div class="Footer-social__icon">
          <img class="Footer-link" src="./images/link.svg" alt="" />
          <img src="./images/twitter.svg" alt="" />
        </div>
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/codingleonardo"
        class="Footer-social-link">
        <span>Instagram</span>
        <div class="Footer-social__icon">
          <img class="Footer-link" src="./images/link.svg" alt="" />
          <img src="./images/instagram.svg" alt="" />
        </div>
      </a>
      <a
        target="_blank"
        href="https://github.com/CodingLeonardo"
        class="Footer-social-link">
        <span>Github</span>
        <div class="Footer-social__icon">
          <img class="Footer-link" src="./images/link.svg" alt="" />
          <img src="./images/github.svg" alt="" />
        </div>
      </a>
    </div>
  </footer>
{:else}
  <footer class="Footer">
    <span>Hecho con 💚</span>
    <span>© 2020 Leonardo Rivero</span>
  </footer>
{/if}
