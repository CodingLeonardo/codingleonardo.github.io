import React from "react"

import Facebook from "../images/facebook.svg"
import Twitter from "../images/twitter.svg"
import Instagram from "../images/instagram.svg"
import Github from "../images/github.svg"

import LinkImg from "../images/link.svg"

import "../css/components/Link.css"

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
    <a
      target="_blank"
      rel="noreferrer"
      href={props.href}
      className="Link"
      style={{
        textDecoration: props.textDecoration,
        fontSize: `${props.fontSize}em`,
      }}
    >
      <span>{props.name}</span>
      <div className="Link__icon">
        <img className="Link__icon-link" src={LinkImg} alt="" />
        <img src={getSrcImg(props.name)} alt="" />
      </div>
    </a>
  )
}

export default Link
