import React, { useState } from "react"

import { graphql } from "gatsby"

import SEO from "../components/Seo.js"
import Layout from "../components/Layout.js"
import Certificate from "../components/Certificate.js"

import "../css/pages/Certificates.css"

const Certificates = ({ data }) => {
  const certificates = data.allCertificatesJson.edges
  const [certificatesFiltered, setCertificatesFiltered] = useState(certificates)

  const handleClick = event => {
    if (event.target.attributes[0].value === "CrecimientoProfesional") {
      setCertificatesFiltered(
        certificates.filter(
          ({ node }) => node.categorie === "CrecimientoProfesional"
        )
      )
    }
    if (event.target.attributes[0].value === "Marketing") {
      setCertificatesFiltered(
        certificates.filter(({ node }) => node.categorie === "Marketing")
      )
    }
    if (event.target.attributes[0].value === "Programacion") {
      setCertificatesFiltered(
        certificates.filter(({ node }) => node.categorie === "Programacion")
      )
    }
    if (event.target.attributes[0].value === "Todos") {
      setCertificatesFiltered(certificates)
    }
  }
  return (
    <>
      <SEO lang="es" title="Certificados" />

      <Layout>
        <div className="Certificates">
          <div className="Certificates-buttons">
            <button categorie="Todos" onClick={handleClick}>
              Todos
            </button>
            <button categorie="Programacion" onClick={handleClick}>
              Programacion
            </button>
            <button categorie="Marketing" onClick={handleClick}>
              Marketing
            </button>
            <button categorie="CrecimientoProfesional" onClick={handleClick}>
              Crecimiento Profesional
            </button>
          </div>
          <div className="Certificates-container">
            {certificatesFiltered.map(({ node }, key) => {
              return (
                <Certificate
                  key={key}
                  name={node.name}
                  src={node.src}
                  categories={node.categories}
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
    allCertificatesJson {
      edges {
        node {
          name
          src
          categorie
        }
      }
    }
  }
`

export default Certificates
