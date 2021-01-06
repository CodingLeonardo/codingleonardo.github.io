import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import SEO from "../components/Seo.js"
import Layout from "../components/Layout.js"
import Img from "gatsby-image"
import ProjectArrow from "../images/project-arrow.svg"

import "../css/pages/Home.css"

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

      <Layout>
        <div className="Home">
          <div className="Home-hero">
            <div className="container container-home">
              <div className="Home-Profile">
                <div className="Home-Profile__image">
                  <Img fluid={imageProfile} />
                </div>
                <h1>Hola, soy Leonardo Rivero</h1>
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
                <Link to="/proyectos" className="Home-link">
                  <span>Ver los proyectos en los que he estado trabajando</span>
                  <img src={ProjectArrow} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default HomePage
