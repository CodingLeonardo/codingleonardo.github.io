import React from "react"

import SEO from "../components/Seo.js"
import Layout from "../components/Layout.js"

import "../css/pages/NotFoundPage.css"

const NotFoundPage = () => (
  <>
    <SEO lang="es" title="404: Not found" />

    <Layout>
      <div className="NotFoundPage">
        <div className="container">
          <h1>404: No Encontrado</h1>
          <p>Acabas de llegar a una ruta que no existe</p>
        </div>
      </div>
    </Layout>
  </>
)

export default NotFoundPage
