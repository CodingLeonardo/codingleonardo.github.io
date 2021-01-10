import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { useSpring, useTransition, animated } from "react-spring"

import Logo from "../images/logo.svg"
import ArrowProject from "../images/menu-arrow.svg"

import "../css/components/Header.css"

const Header = () => {
  const [openedMenu, setOpenedMenu] = useState(false)
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })
  const transitionsMenuContainer = useTransition(openedMenu, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 500,
    },
  })
  const transitionsMenu = useTransition(openedMenu, false, {
    from: { transform: "translateX(1000px)" },
    enter: { transform: "translateX(0)" },
    leave: { transform: "translateX(1000px)" },
    config: {
      delay: 500,
    },
  })
  const projectsData = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            about
            description
            href
            linkGithub
            name
            slug
            tecnologies
          }
        }
      }
    }
  `).allProjectsJson.edges

  const handleClick = () => {
    if (openedMenu === true) {
      setOpenedMenu(false)
    } else {
      setOpenedMenu(true)
    }
  }
  const handleClickOverlay = event => {
    if (event.target.classList[0] === "Header-menu__overlay") {
      setOpenedMenu(false)
    }
  }

  const url = typeof window !== "undefined" ? window.location.pathname : ""

  const getTextHeader = () => {
    const regex = new RegExp(/\/proyectos\/(.*)/)
    if (url === "/sobre-mi" || url === "/sobre-mi/") {
      return (
        <>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="Header-about-me">
            <span>Sobre mi</span>
            <h1>Leonardo Rivero</h1>
          </div>
        </>
      )
    }
    if (url === "/proyectos" || url === "/proyectos/") {
      return (
        <>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="Header-text">
            <h1>Proyectos</h1>
          </div>
        </>
      )
    }
    if (url === "/habilidades" || url === "/habilidades/") {
      return (
        <>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="Header-text">
            <h1>Habilidades</h1>
          </div>
        </>
      )
    }
    if (url === "/certificados" || url === "/certificados/") {
      return (
        <>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="Header-text">
            <h1>Certificados</h1>
          </div>
        </>
      )
    }
    if (url.match(regex)) {
      const slug = url.replace("/proyectos/", "").replace("/", "")
      const name = projectsData.filter(({ node }) => {
        return node.slug === slug
      })[0]?.node.name

      return (
        <>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <div className="Header-text">
            <h1>{name}</h1>
          </div>
        </>
      )
    } else {
      return (
        <Link to="/">
          <img src={Logo} alt="" />
          <span>CodingLeonardo</span>
        </Link>
      )
    }
  }

  return (
    <animated.header style={fadeIn} className="Header">
      <div className="container-header">
        <div className="Header-logo">{getTextHeader()}</div>
        <div className="Header-button">
          {openedMenu && (
            <div onClick={handleClick} className="Header-button__burger">
              <i className="special" />
              <i className="special" />
            </div>
          )}
          {!openedMenu && (
            <div onClick={handleClick} className="Header-button__burger">
              <i />
              <i />
              <i />
            </div>
          )}
        </div>
        {transitionsMenuContainer.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={props}
                className="Header-menu__container"
              >
                <div
                  className="Header-menu__overlay"
                  onClick={handleClickOverlay}
                >
                  {transitionsMenu.map(
                    ({ item, key, props }) =>
                      item && (
                        <animated.div
                          key={key}
                          style={props}
                          className="Header-menu"
                        >
                          <ul>
                            <li>
                              <Link to="/sobre-mi" onClick={handleClick}>
                                Sobre mi
                                <img src={ArrowProject} alt="" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/certificados" onClick={handleClick}>
                                Certificados
                                <img src={ArrowProject} alt="" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/habilidades" onClick={handleClick}>
                                Habilidades
                                <img src={ArrowProject} alt="" />
                              </Link>
                            </li>
                            <li>
                              <Link to="/proyectos" onClick={handleClick}>
                                Proyectos
                                <img src={ArrowProject} alt="" />
                              </Link>
                            </li>
                          </ul>
                        </animated.div>
                      )
                  )}
                </div>
              </animated.div>
            )
        )}
      </div>
    </animated.header>
  )
}

export default Header
