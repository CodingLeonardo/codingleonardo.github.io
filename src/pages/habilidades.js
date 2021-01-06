import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/Seo.js"
import Layout from "../components/Layout.js"
import Skill from "../components/Skill.js"

import "../css/pages/Skills.css"

const Skills = ({ data }) => {
  const lenguages = data.allLenguagesJson.edges
  const frameworks = data.allFrameworksJson.edges
  return (
    <>
      <SEO lang="es" title="Habilidades" />

      <Layout>
        <div className="Skills">
          <h1>Lenguajes</h1>
          <div className="Skills-container">
            {lenguages.map(({ node }, key) => {
              return (
                <Skill
                  key={key}
                  name={node.name}
                  background={node.background}
                />
              )
            })}
          </div>
          <h1>Frameworks y Librerias</h1>
          <div className="Skills-container">
            {frameworks.map(({ node }, key) => {
              return (
                <Skill
                  key={key}
                  name={node.name}
                  background={node.background}
                />
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allLenguagesJson {
      edges {
        node {
          background
          name
        }
      }
    }
    allFrameworksJson {
      edges {
        node {
          background
          name
        }
      }
    }
  }
`

export default Skills
