import styled from "styled-components"

export const LinkContainer = styled.a`
  display: inline-flex;
  align-items: center;
  margin: 0 1em;
  text-decoration-color: rgba(0, 46, 2, 0.5)
    ${({ textDecoration }) => (textDecoration ? textDecoration : "underline")};

  span {
    font-weight: 700;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.9em")};
    text-transform: capitalize;
  }

  &:hover img {
    transform: translateX(0px);
  }
`

export const LinkIcon = styled.div`
  display: grid;
  height: 1.5em;
  width: 1.8em;
  margin-left: 0.4em;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 0.3em;
  overflow: hidden;

  .Link-img {
    width: 1.1em;
    height: 1.1em;
    margin-right: 0.2em;
  }

  img {
    width: 1.35em;
    height: 1.35em;
    transition: all 200ms;
    transform: translateX(-30px);
    margin-left: 0.2em;
  }
`
