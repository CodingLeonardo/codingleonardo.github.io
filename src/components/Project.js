import React from "react"
import Img from "gatsby-image"

import LinkUI from "./Link.js"

import ProjectArrow from "../images/project-arrow.svg"
import MenuArrow from "../images/menu-arrow.svg"

import {
  ProjectContainer,
  ProjectMain,
  ProjectScreenBar,
  ProyectOptions,
  ProjectLink,
  ProjectLinkA,
} from "../styles/components/Project.styles.js"

const Project = props => {
  return (
    <ProjectContainer>
      <ProjectScreenBar>
        <h1>{props.name}</h1>
      </ProjectScreenBar>
      <ProjectMain>
        <Img
          fluid={props.images[0].node.childImageSharp.fluid}
          alt={props.name}
        />
      </ProjectMain>
      <ProyectOptions className="Project-options">
        <div className="options">
          <LinkUI
            name="Codigo"
            href={props.linkGithub}
            textDecoration="none"
            fontSize={1.2}
          />
          <ProjectLinkA href={props.href} target="_blank" rel="noreferrer">
            Vista previa en vivo
            <img src={MenuArrow} alt="Preview arrow" />
          </ProjectLinkA>
          <ProjectLink to={`/proyectos/${props.slug}`}>
            Ver más...
            <img src={ProjectArrow} alt="Learn more arrow" />
          </ProjectLink>
        </div>
      </ProyectOptions>
    </ProjectContainer>
  )
}

export default Project
