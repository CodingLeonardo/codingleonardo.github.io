import React from "react"

import SEO from "../components/Seo.js"
import Layout from "../components/Layout.js"

import MongoDBIcon from "../images/mongodb-icon.svg"
import ExpressIcon from "../images/express-icon.svg"
import ReactIcon from "../images/react-icon.svg"
import NodeJSIcon from "../images/nodejs-icon.svg"

import {
  Paragraph,
  Title,
  Stack,
  StackItem,
  LinkEmail,
} from "../styles/pages/AboutMe.styles.js"

import { Container } from "../styles/shared/utils.js"

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
  return (
    <>
      <SEO lang="es" title="Sobre mi" />

      <Layout location="/sobre-mi">
        <Container>
          <Paragraph marginTop="1em">
            Soy un desarrollador de Venezuela, me apasiona el desarrollo
            frontend, me gusta estar constantemente explorando y aprendiendo
            nuevas tecnologías web. Y me gusta usar mis conocimientos para
            ayudar a personas a resolver sus problemas cuando sea posible.
          </Paragraph>
          <Title>Mi Stack</Title>
          <Stack>
            {stack.map(({ name, img }, key) => {
              return (
                <StackItem key={key}>
                  <img src={img} alt={name} />
                  <span>{name}</span>
                </StackItem>
              )
            })}
          </Stack>
          <Title>¿Quieres hablar?</Title>
          <Paragraph>
            Si desea ponerse en contacto o hablar sobre un proyecto, no dude en
            comunicarse conmigo por correo electrónico a{" "}
            <LinkEmail href="mailto:codingleonardo@gmail.com">
              codingleonardo@gmail.com
            </LinkEmail>
          </Paragraph>
          <Paragraph marginTop="1.2em">
            También puedes enviarme un DM en las redes sociales.
          </Paragraph>
        </Container>
      </Layout>
    </>
  )
}

export default AboutMe
