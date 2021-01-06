import React from "react"

import SEO from "../components/Seo.js"
import Layout from "../components/Layout.js"

import MongoDBIcon from "../images/mongodb-icon.svg"
import ExpressIcon from "../images/express-icon.svg"
import ReactIcon from "../images/react-icon.svg"
import NodeJSIcon from "../images/nodejs-icon.svg"

import "../css/pages/AboutMe.css"

const AboutMe = () => {
  return (
    <>
      <SEO lang="es" title="Sobre mi" />

      <Layout>
        <div className="AboutMe">
          <div className="container">
            <p>
              Soy un desarrollador de Venezuela, me apasiona el desarrollo
              frontend, me gusta estar constantemente explorando y aprendiendo
              nuevas tecnologías web. Y me gusta usar mis conocimientos para
              ayudar a personas a resolver sus problemas cuando sea posible.
            </p>
            <h1>Mi Stack</h1>
            <ul>
              <li>
                <img src={MongoDBIcon} alt="" />
                <span>MongoDB</span>
              </li>
              <li>
                <img src={ExpressIcon} alt="" />
                <span>Express</span>
              </li>
              <li>
                <img src={ReactIcon} alt="" />
                <span>React</span>
              </li>
              <li>
                <img src={NodeJSIcon} alt="" />
                <span>NodeJS</span>
              </li>
            </ul>
            <h1>¿Quieres hablar?</h1>
            <div className="AboutMe-text">
              <p>
                Si desea ponerse en contacto o hablar sobre un proyecto, no dude
                en comunicarse conmigo por correo electrónico a{" "}
                <a href="mailto:codingleonardo@gmail.com">
                  codingleonardo@gmail.com
                </a>
              </p>
              <p>También puedes enviarme un DM en las redes sociales.</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AboutMe
