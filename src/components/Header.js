import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import LogoBrand from "../images/logo.svg"
import ArrowProject from "../images/menu-arrow.svg"

import {
  HeaderContainer,
  LogoContainer,
  MenuButton,
  ButtonBurger,
  Menu,
  MenuOverlay,
  MenuContainer,
  MenuLink,
  MenuUl,
  Logo,
  LogoText,
} from "../styles/components/Header.styles.js"

import { ContainerFluid } from "../styles/shared/utils.js"

const Header = ({ location }) => {
  const [openedMenu, setOpenedMenu] = useState(false)
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
    setOpenedMenu(!openedMenu)
    document.body.classList.toggle("overflow--hidden")
  }
  const handleClickOverlay = event => {
    if (event.target.classList[0] === "Header-menu__overlay") {
      setOpenedMenu(false)
    }
  }

  const routes = {
    "/sobre-mi": "Sobre mi",
    "/proyectos": "Proyectos",
    "/habilidades": "Habilidades",
    "/certificados": "Certificados",
  }

  const HeaderText = () => {
    const regex = new RegExp(/\/proyectos\/(.*)/)

    const SubComponent = ({ title }) => (
      <>
        <Logo to="/">
          <img src={LogoBrand} alt="" />
        </Logo>
        <LogoText>
          <h1>{title}</h1>
        </LogoText>
      </>
    )

    if (location === "/sobre-mi") {
      return (
        <>
          <Logo to="/">
            <img src={LogoBrand} alt="" />
          </Logo>
          <LogoText isAboutMe={true}>
            <span>Sobre mi</span>
            <h1>Leonardo Rivero</h1>
          </LogoText>
        </>
      )
    }

    if (routes.hasOwnProperty(location)) {
      return <SubComponent title={routes[location]} />
    }

    if (location.match(regex)) {
      const slug = location.replace("/proyectos/", "").replace("/", "")
      const name = projectsData.filter(({ node }) => {
        return node.slug === slug
      })[0]?.node.name

      return <SubComponent title={name} />
    }

    return (
      <Logo to="/">
        <img src={LogoBrand} alt="Logo" />
        <span>CodingLeonardo</span>
      </Logo>
    )
  }

  return (
    <HeaderContainer>
      <ContainerFluid>
        <LogoContainer>
          <HeaderText />
        </LogoContainer>
        <MenuButton>
          <ButtonBurger
            onClick={handleClick}
            onKeyPress={handleClick}
            role="button"
            tabIndex="0"
            aria-label="Toggle Menu"
          >
            <i />
            <i />
            <i />
          </ButtonBurger>
        </MenuButton>

        <MenuContainer isOpened={openedMenu}>
          <MenuOverlay isOpened={openedMenu}>
            <Menu>
              <ul style={MenuUl}>
                <MenuLink>
                  <Link to="/sobre-mi" onClick={handleClick}>
                    Sobre mi
                    <img src={ArrowProject} alt="" />
                  </Link>
                </MenuLink>
                <MenuLink>
                  <Link to="/certificados" onClick={handleClick}>
                    Certificados
                    <img src={ArrowProject} alt="" />
                  </Link>
                </MenuLink>
                <MenuLink>
                  <Link to="/habilidades" onClick={handleClick}>
                    Habilidades
                    <img src={ArrowProject} alt="" />
                  </Link>
                </MenuLink>
                <MenuLink>
                  <Link to="/proyectos" onClick={handleClick}>
                    Proyectos
                    <img src={ArrowProject} alt="" />
                  </Link>
                </MenuLink>
              </ul>
            </Menu>
          </MenuOverlay>
        </MenuContainer>
      </ContainerFluid>
    </HeaderContainer>
  )
}

export default Header
