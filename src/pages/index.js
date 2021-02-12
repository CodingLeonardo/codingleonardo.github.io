import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/Seo.js"
import Layout from "../components/Layout.js"
import Img from "gatsby-image"
import ProjectArrow from "../images/project-arrow.svg"

import {
  Hero,
  HeroImage,
  HeroTitle,
  HeroSubtitle,
  HeroLink,
} from "../styles/pages/Home.styles.js"

import { Container } from "../styles/shared/utils.js"

const HomePage = () => {
  const imageProfile = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "Leonardo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `).file.childImageSharp.fluid
  return (
    <>
      <SEO lang="es" title="Home" />

      <Layout location="/">
        <Container>
          <Hero>
            <HeroImage>
              <Img fluid={imageProfile} alt="Leonardo Rivero" />
            </HeroImage>
            <HeroTitle>
              <h1>Hola, soy Leonardo Rivero</h1>
            </HeroTitle>
            <HeroSubtitle>
              <h3>
                Frontend Developer{" "}
                <span role="img" aria-label="rocket">
                  {" "}
                  🚀{" "}
                </span>{" "}
                | Designer{" "}
                <span role="img" aria-label="art">
                  {" "}
                  🎨{" "}
                </span>
              </h3>
            </HeroSubtitle>
            <HeroLink to="/proyectos">
              <span>Ver los proyectos en los que he estado trabajando</span>
              <img src={ProjectArrow} alt="" />
            </HeroLink>
          </Hero>
        </Container>
      </Layout>
    </>
  )
}

export default HomePage
