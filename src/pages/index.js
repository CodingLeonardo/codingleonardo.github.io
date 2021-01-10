import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useSpring, animated } from "react-spring"

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
  const animationProfile = useSpring({
    config: {
      delay: 500,
      duration: 1000,
    },
    opacity: 1,
    from: { opacity: 0 },
  })
  const animationIn = useSpring({
    config: {
      delay: 700,
    },
    to: async (next, cancel) => {
      await next({ opacity: 1, transform: "translateY(0)" })
    },
    from: { opacity: 0, transform: "translateY(200%)" },
  })
  const animationIn2 = useSpring({
    config: {
      delay: 900,
    },
    to: async (next, cancel) => {
      await next({ opacity: 1, transform: "translateX(0)" })
    },
    from: { opacity: 0, transform: "translateX(200%)" },
  })
  const animationIn3 = useSpring({
    config: {
      delay: 1100,
    },
    to: async (next, cancel) => {
      await next({ opacity: 1, transform: "translateX(0)" })
    },
    from: { opacity: 0, transform: "translateX(-200%)" },
  })
  return (
    <>
      <SEO lang="es" title="Home" />

      <Layout>
        <div className="Home">
          <div className="Home-hero">
            <div className="container container-home">
              <div className="Home-Profile">
                <animated.div
                  style={animationProfile}
                  className="Home-Profile__image"
                >
                  <Img fluid={imageProfile} />
                </animated.div>
                <div className="Home-Profile__title">
                  <animated.h1 style={animationIn}>
                    Hola, soy Leonardo Rivero
                  </animated.h1>
                </div>
                <div className="Home-Profile__subtitle">
                  <animated.h3 style={animationIn2}>
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
                  </animated.h3>
                </div>
                <div className="Home-link">
                  <animated.div style={animationIn3}>
                    <Link to="/proyectos">
                      <span>
                        Ver los proyectos en los que he estado trabajando
                      </span>
                      <img src={ProjectArrow} alt="" />
                    </Link>
                  </animated.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default HomePage
