import React from "react"

import Facebook from "../images/facebook.svg"
import Twitter from "../images/twitter.svg"
import Instagram from "../images/instagram.svg"
import Github from "../images/github.svg"

import LinkImg from "../images/link.svg"

import { LinkContainer, LinkIcon } from "../styles/components/Link.styles.js"

const Link = props => {
  const imgs = {
    Facebook: Facebook,
    Twitter: Twitter,
    Instagram: Instagram,
    GitHub: Github,
    Codigo: Github,
  }

  const getSrcImg = name => {
    if (imgs.hasOwnProperty(name)) {
      return imgs[name]
    }
  }

  return (
    <LinkContainer
      target="_blank"
      rel="noreferrer"
      href={props.href}
      textDecoration={props.textDecoration}
      fontSize={props.fontSize}
    >
      <span>{props.name}</span>
      <LinkIcon>
        <img className="Link-img" src={LinkImg} alt="" />
        <img src={getSrcImg(props.name)} alt="" />
      </LinkIcon>
    </LinkContainer>
  )
}

export default Link
