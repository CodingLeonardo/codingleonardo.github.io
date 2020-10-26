<script>

</script>

<style>
  .AboutMe{
    padding: 2em 0;
    color: #002E02;
    font-weight: 500;
  }
  .AboutMe p{
    font-size: 1.1em;
  }
  .AboutMe h1{
    margin: 0.5em 0;
    font-weight: bold;
    font-size: 2.2em;
  }
  .AboutMe ul{
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  .AboutMe li{
    display: flex;
    align-items: center;
  }
  .AboutMe span{
    margin-left: 0.8em;
    font-weight: 500;
    font-size: 1.6em;
  }
  .AboutMe-text p:last-child{
    margin-top: 1em;
  }
</style>

<svelte:head>
  <title>CodingLeonardo | Sobre mi</title>
</svelte:head>

<div class="AboutMe">
  <div class="container">
    <p>
      Soy un desarrollador de Venezuela, me apasiona el desarrollo frontend, me gusta estar constantemente explorando y aprendiendo nuevas tecnologías web. Y me gusta usar mis conocimientos para ayudar a personas a resolver sus problemas cuando sea posible.
    </p>
    <h1>Mi Stack</h1>
    <ul>
      <li>
        <img src="/images/mongodb-icon.svg" alt=""><span>MongoDB</span>
      </li>
      <li>
        <img src="/images/express-icon.svg" alt=""><span>Express</span>
      </li>
      <li>
        <img src="/images/react-icon.svg" alt=""><span>React</span>
      </li>
      <li>
        <img src="/images/nodejs-icon.svg" alt=""><span>NodeJS</span>
      </li>
    </ul>
    <h1>¿Quieres hablar?</h1>
    <div class="AboutMe-text">
      <p>Si desea ponerse en contacto o hablar sobre un proyecto, no dude en comunicarse conmigo por correo electrónico a <a href="mailto:codingleonardo@gmail.com">codingleonardo@gmai.com</a></p>
      <p>También puedes enviarme un DM en las redes sociales.</p>
    </div>
  </div>
</div>
