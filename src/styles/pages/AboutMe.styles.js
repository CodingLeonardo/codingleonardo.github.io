import styled, { css } from "styled-components"

export const Paragraph = styled.p`
  font-size: 1.2em;
  font-weight: 500;

  ${({ marginTop }) =>
    marginTop
      ? css`
          margin-top: ${marginTop};
        `
      : ""}
`

export const Title = styled.h1`
  margin: 0.5em 0;
  font-weight: bold;
  font-size: 2.3em;
`

export const Stack = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`

export const StackItem = styled.li`
  display: flex;
  align-items: center;

  span {
    margin-left: 0.8em;
    font-weight: 500;
    font-size: 1.7em;
  }
`

export const LinkEmail = styled.a`
  transition: 0.5s;
  font-size: 1.3em;
  text-decoration-color: #007706;

  &:hover {
    text-decoration-color: #002e02;
  }
`
