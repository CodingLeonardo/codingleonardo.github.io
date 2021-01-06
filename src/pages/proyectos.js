import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo.js"
import Layout from "../components/Layout.js"
import Project from "../components/Project.js"

import "../css/pages/Projects.css"

const Projects = ({ data }) => {
  const imagesData = data.allFile.edges
  const projectsData = data.allProjectsJson.edges
  return (
    <>
      <SEO lang="es" title="Proyectos" />

      <Layout>
        <div className="Projects">
          <div className="container">
            <div className="Projects-container">
              {projectsData.map(({ node }, key) => {
                const regex = new RegExp(`${node.slug}`)
                const imagesDataFiltered = imagesData.filter(({ node }) => {
                  if (node.childImageSharp.fluid.originalName.match(regex)) {
                    return node
                  }
                })
                return (
                  <Project
                    key={key}
                    name={node.name}
                    href={node.href}
                    slug={node.slug}
                    description={node.description}
                    linkGithub={node.linkGithub}
                    images={imagesDataFiltered}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allProjectsJson {
      edges {
        node {
          about
          description
          href
          linkGithub
          name
          slug
          tecnologies
        }
      }
    }
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
`

export default Projects
