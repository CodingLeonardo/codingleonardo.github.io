import React from "react"

import Link from "./Link.js"

import "../css/components/Footer.css"

const Footer = () => {
  const url = typeof window !== "undefined" ? window.location.pathname : ""

  if (url === "/") {
    return (
      <footer className="Footer index">
        <div className="Footer-social">
          <Link
            name="Facebook"
            href="https://www.facebook.com/CodingLeonardo"
          />
          <Link name="Twitter" href="https://twitter.com/CodingLeonardo" />
          <Link
            name="Instagram"
            href="https://www.instagram.com/codingleonardo"
          />
          <Link name="GitHub" href="https://github.com/CodingLeonardo" />
        </div>
      </footer>
    )
  }

  return (
    <footer className="Footer">
      <span>
        Hecho con{" "}
        <span role="img" aria-label="heart">
          {" "}
          💚{" "}
        </span>
      </span>
      <span>© 2020 Leonardo Rivero</span>
    </footer>
  )
}

export default Footer
