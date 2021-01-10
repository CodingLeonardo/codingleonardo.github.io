import React from "react"
import { useSpring, animated } from "react-spring"

import SEO from "../components/Seo.js"
import Layout from "../components/Layout.js"

import "../css/pages/NotFoundPage.css"

const NotFoundPage = () => {
  const fadeIn = useSpring({
    config: {
      delay: 500,
    },
    opacity: 1,
    from: { opacity: 0 },
  })
  return (
    <>
      <SEO lang="es" title="404: Not found" />

      <Layout>
        <animated.div style={fadeIn} className="NotFoundPage">
          <div className="container">
            <h1>404: No Encontrado</h1>
            <p>Acabas de llegar a una ruta que no existe</p>
          </div>
        </animated.div>
      </Layout>
    </>
  )
}

export default NotFoundPage
