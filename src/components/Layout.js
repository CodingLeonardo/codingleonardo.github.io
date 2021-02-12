import React from "react"
import PropTypes from "prop-types"

import Header from "./Header.js"
import Footer from "./Footer.js"

import { Background, Grid } from "../styles/shared/utils.js"

const Layout = ({ location, children }) => {
  return (
    <>
      <Background />

      <Grid>
        <Header location={location} />
        <main>{children}</main>
        <Footer location={location} />
      </Grid>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
}

export default Layout
