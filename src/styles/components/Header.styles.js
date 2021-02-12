import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const HeaderContainer = styled.header`
  position: relative;
  top: 0;
  z-index: 5;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 5em;
  color: #002e02;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const Logo = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0;
  text-decoration: none;

  span {
    font-size: 1.6em;
    font-weight: 900;
    margin-left: 0.5em;
  }
  img {
    height: 2.8em;
  }
`

export const LogoText = styled.div`
  ${({ isAboutMe }) =>
    isAboutMe === true
      ? css`
          display: flex;
          flex-direction: column;
          text-align: left;
          margin-left: 1.2em;

          span {
            margin: 0;
            font-weight: bold;
            font-size: 1.7em;
            line-height: 1.2em;
          }

          h1 {
            font-size: 2em;
            font-weight: 800;
          }
        `
      : css`
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;

          h1 {
            font-weight: 900;
            text-transform: capitalize;
          }
        `}
`

export const MenuButton = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.8em;
  height: 100%;
`

export const ButtonBurger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  height: 60%;
  width: 100%;
  cursor: pointer;

  i {
    display: block;
    height: 6px;
    width: inherit;
    background: #002e02;
    border-radius: 0.8em;
  }

  i:nth-child(2) {
    margin: 25.3% 0;
  }

  &:focus {
    outline: none;
  }
`

export const MenuOverlay = styled.div`
  ${({ isOpened }) => (isOpened ? "" : "none")}
  position: absolute;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 15;
  background: rgba(1, 52, 0, 0.36);
  backdrop-filter: blur(6px);
  overflow: hidden;
`

export const MenuContainer = styled.div`
  display: ${({ isOpened }) => (isOpened ? "" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
`

export const Menu = styled.div`
  position: absolute;
  z-index: 20;
  right: 0;
  width: 30vw;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(127, 240, 138, 1) 0%,
    rgba(196, 250, 113, 1) 100%
  );
  display: flex;
  justify-content: center;
`

export const MenuUl = {
  paddingTop: "6em",
  textAlign: "right",
}

export const MenuLink = styled.li`
  display: block;
  list-style: none;
  margin: 0.8em 0;

  a {
    font-size: 2.2em;
    font-weight: 700;
    text-decoration: none;
  }

  img {
    height: 0.7em;
    width: 0.7em;
    opacity: 0.4;
    margin-left: 0.3em;
    will-change: opacity;
  }

  a:hover img {
    opacity: 0.8;
    transition: 0.3s;
  }
`
