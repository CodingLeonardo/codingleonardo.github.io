import React from "react"
import { useSpring, useTrail, animated } from "react-spring"

import SEO from "../components/Seo.js"
import Layout from "../components/Layout.js"

import MongoDBIcon from "../images/mongodb-icon.svg"
import ExpressIcon from "../images/express-icon.svg"
import ReactIcon from "../images/react-icon.svg"
import NodeJSIcon from "../images/nodejs-icon.svg"

import "../css/pages/AboutMe.css"

const AboutMe = () => {
  const stack = [
    {
      name: "MongoDB",
      img: MongoDBIcon,
    },
    {
      name: "Express",
      img: ExpressIcon,
    },
    {
      name: "React",
      img: ReactIcon,
    },
    {
      name: "NodeJs",
      img: NodeJSIcon,
    },
  ]
  const fadeIn = useSpring({
    config: {
      delay: 500,
    },
    opacity: 1,
    from: { opacity: 0 },
  })
  const animationTrial = useTrail(stack.length, {
    from: { opacity: 0, transform: "translateY(100%)" },
    to: { opacity: 1, transform: "translateY(0)" },
  })
  return (
    <>
      <SEO lang="es" title="Sobre mi" />

      <Layout>
        <div className="AboutMe">
          <div className="container">
            <animated.p style={fadeIn}>
              Soy un desarrollador de Venezuela, me apasiona el desarrollo
              frontend, me gusta estar constantemente explorando y aprendiendo
              nuevas tecnologías web. Y me gusta usar mis conocimientos para
              ayudar a personas a resolver sus problemas cuando sea posible.
            </animated.p>
            <h1>Mi Stack</h1>
            <ul>
              {animationTrial.map((spring, index) => {
                return (
                  <li key={index}>
                    <animated.div style={spring}>
                      <img src={stack[index].img} alt="" />
                      <span>{stack[index].name}</span>
                    </animated.div>
                  </li>
                )
              })}
            </ul>
            <animated.h1 style={fadeIn}>¿Quieres hablar?</animated.h1>
            <animated.div style={fadeIn} className="AboutMe-text">
              <p>
                Si desea ponerse en contacto o hablar sobre un proyecto, no dude
                en comunicarse conmigo por correo electrónico a{" "}
                <a href="mailto:codingleonardo@gmail.com">
                  codingleonardo@gmail.com
                </a>
              </p>
              <p>También puedes enviarme un DM en las redes sociales.</p>
            </animated.div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AboutMe
