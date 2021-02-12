import React from "react"

import Link from "./Link.js"

import {
  FooterContainer,
  SocialLinks,
} from "../styles/components/Footer.styles.js"

const Footer = ({ location }) => {
  if (location === "/") {
    return (
      <FooterContainer fontWeight={700}>
        <SocialLinks>
          <Link
            name="Facebook"
            href="https://www.facebook.com/CodingLeonardo"
            fontSize="1.2em"
          />
          <Link
            name="Twitter"
            href="https://twitter.com/CodingLeonardo"
            fontSize="1.2em"
          />
          <Link
            name="Instagram"
            href="https://www.instagram.com/codingleonardo"
            fontSize="1.2em"
          />
          <Link
            name="GitHub"
            href="https://github.com/CodingLeonardo"
            fontSize="1.2em"
          />
        </SocialLinks>
      </FooterContainer>
    )
  }

  return (
    <FooterContainer>
      <span>
        Hecho con{" "}
        <span role="img" aria-label="heart">
          {" "}
          💚{" "}
        </span>
      </span>
      <span>© 2020 Leonardo Rivero</span>
    </FooterContainer>
  )
}

export default Footer
