import styled from "styled-components"
import { Link } from "gatsby"

export const Hero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 9em);
  width: 100%;
  color: #002e02;
`

export const HeroImage = styled.figure`
  height: 20em;
  width: 20em;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -15%;

  img {
    width: 100%;
  }
`

export const HeroTitle = styled.div`
  h1 {
    margin-top: 0.8em;
    font-weight: 900;
    font-size: 40px;
    text-align: center;
  }
`

export const HeroSubtitle = styled.div`
  h3 {
    margin-top: 0.8em;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
  }
`

export const HeroLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-top: 1.5em;
  text-decoration: none;
  color: #377225;

  span {
    font-size: 1em;
    font-weight: 700;
  }

  img {
    height: 0.9em;
    margin-left: 0.5em;
    opacity: 0.5;
    will-change: opacity;
  }

  &:hover img {
    opacity: 1;
    transition: 0.3s all;
  }
`
