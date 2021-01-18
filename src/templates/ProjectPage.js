import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useSpring, useTrail, animated } from "react-spring"

import Sapper from "../images/sapper.svg"
import Svelte from "../images/svelte.svg"
import NodeJS from "../images/nodejs-icon.svg"

import SEO from "../components/Seo.js"
import Layout from "../components/Layout.js"

import GithubWhite from "../images/github-white.svg"
import Img from "gatsby-image"

import "../css/pages/ProjectPage.css"

const ProjectPage = ({ pageContext }) => {
  const { project } = pageContext
  const fadeIn = useSpring({
    config: {
      delay: 500,
    },
    opacity: 1,
    from: { opacity: 0 },
  })
  const animationTrial = useTrail(project.tecnologies.length, {
    from: { opacity: 0, transform: "translateY(100%)" },
    to: { opacity: 1, transform: "translateY(0)" },
  })

  const imagesData = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { regex: "/png/" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `).allFile.edges
  const regex = new RegExp(`${project.slug}`)
  const imagesDataFiltered = imagesData.filter(({ node }) => {
    if (node.childImageSharp.fluid.originalName.match(regex)) {
      return node
    }
  })
  const imgTecnologies = {
    Sapper: Sapper,
    Svelte: Svelte,
    NodeJS: NodeJS,
  }

  const getSrcImgTecnologies = tecnologie => {
    if (imgTecnologies.hasOwnProperty(tecnologie)) {
      return imgTecnologies[tecnologie]
    }
  }

  return (
    <>
      <SEO lang="es" title={project.name} />

      <Layout>
        <animated.div style={fadeIn} className="ProjectPage">
          <div className="container">
            <div style={fadeIn}>
              <p>{project.description}</p>
              <a
                className="live-preview"
                href={project.href}
                target="_blank"
                rel="noreferrer"
              >
                Vista previa en vivo
              </a>
              <a
                className="code"
                href={project.linkGithub}
                target="_blank"
                rel="noreferrer"
              >
                <span>Code</span>
                <img src={GithubWhite} alt="" />
              </a>
            </div>
            <div className="ProjectPage-images">
              <div className="ProjectPage-screen-bar">
                <div className="ProjectPage-screen-bar__title">
                  {project.name}
                </div>
              </div>
              <div className="ProjectPage-screen-main">
                <Img
                  fluid={imagesDataFiltered[0].node.childImageSharp.fluid}
                  alt={project.name}
                />
              </div>
            </div>
            <div className="about">
              <h1>Acerca de</h1>
              <p>{project.about}</p>
            </div>
            <div className="tecnologies">
              <h1>Tecnologias</h1>
              <ul>
                {animationTrial.map((spring, index) => {
                  return (
                    <li key={index}>
                      <animated.div style={spring}>
                        <img
                          src={getSrcImgTecnologies(project.tecnologies[index])}
                          alt=""
                        />
                        <p>{project.tecnologies[index]}</p>
                      </animated.div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </animated.div>
      </Layout>
    </>
  )
}

export default ProjectPage
