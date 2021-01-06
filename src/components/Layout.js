import React from "react"
import PropTypes from "prop-types"

import Header from "./Header.js"
import Footer from "./Footer.js"

import "../css/global.css"
import "../css/components/Layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="background" />

      <div className="grid-index">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
