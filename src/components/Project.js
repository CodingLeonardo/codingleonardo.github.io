import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import LinkUI from "./Link.js"

import ProjectArrow from "../images/project-arrow.svg"
import MenuArrow from "../images/menu-arrow.svg"

import "../css/components/Project.css"

const Project = props => {
  return (
    <div className="Project">
      <div className="Project-screen-bar">
        <div className="Project-screen-bar__title">{props.name}</div>
      </div>
      <div className="Project-screen-main">
        <Img
          fluid={props.images[0].node.childImageSharp.fluid}
          alt={props.name}
        />
      </div>
      <div className="Project-options">
        <div className="options">
          <LinkUI
            name="Codigo"
            href={props.linkGithub}
            textDecoration="none"
            fontSize={1.1}
          />
          <a
            href={props.href}
            target="_blank"
            rel="noreferrer"
            className="Project-options__link"
          >
            Vista previa en vivo
            <img
              src={MenuArrow}
              alt="Preview arrow"
              className="options__icon"
            />
          </a>
          <Link
            to={`/proyectos/${props.slug}`}
            className="Project-options__link"
          >
            Ver más...
            <img
              src={ProjectArrow}
              alt="Learn more arrow"
              className="options__icon"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project
