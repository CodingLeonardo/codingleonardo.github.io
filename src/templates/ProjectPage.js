import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Sapper from "../images/sapper.svg"
import Svelte from "../images/svelte.svg"

import SEO from "../components/Seo.js"
import Layout from "../components/Layout.js"

import GithubWhite from "../images/github-white.svg"
import Img from "gatsby-image"

import "../css/pages/ProjectPage.css"

const ProjectPage = ({ pageContext }) => {
  const { project } = pageContext

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
        <div className="ProjectPage">
          <div className="container">
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
                {project.tecnologies.map((tecnologie, key) => {
                  return (
                    <li key={key}>
                      <img src={getSrcImgTecnologies(tecnologie)} alt="" />
                      <p>{tecnologie}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ProjectPage
