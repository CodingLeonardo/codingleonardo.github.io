import styled, { css } from "styled-components"
import { Link } from "gatsby"

export const ProjectContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 20em;
  overflow: hidden;
  cursor: pointer;
  color: #002e02;

  &:hover .Project-options {
    transform: translateY(-100%);
  }
`

export const ProjectScreenBar = styled.div`
  height: 1.6em;
  position: relative;
  background: #64db51;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1em 1em 0 0;

  h1 {
    font-size: 0.8em;
    font-weight: 900;
  }
`

export const ProjectMain = styled.div`
  width: 100%;
  /* height: 270px; */
  height: calc(100% - 1.6em);
  border-radius: 0 0 1em 1em;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`

export const ProyectOptions = styled.div`
  width: 100.1%;
  /* height: 200px; */
  height: calc(100.1% - 1.6em);
  transition: transform 0.3s;
  backdrop-filter: blur(3px);
  background: rgba(172, 252, 121, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 1em 1em;
  overflow: hidden;

  .options {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  a {
    margin-bottom: 1.2em;
  }
  a:last-child {
    margin: 0;
  }
`
const LinkCSS = css`
  margin-bottom: 1.2em;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: 600;
  display: flex;
  align-items: center;

  img {
    margin-left: 0.2em;
    opacity: 0.4;
    transition: 0.5s;
  }
  &:hover img {
    opacity: 1;
  }
`

export const ProjectLink = styled(Link)`
  color: #377225;
  ${LinkCSS}
`

export const ProjectLinkA = styled.a`
  color: #002e02;
  ${LinkCSS}
`
