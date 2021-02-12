import styled from "styled-components"

export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
`

export const ContainerFluid = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  flex-wrap: inherit;
  height: inherit;
  width: 70%;
  margin: 0 auto;
`

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: auto 1fr auto;
`

export const Background = styled.div`
  background: linear-gradient(
    90deg,
    rgba(127, 240, 138, 1) 0%,
    rgba(196, 250, 113, 1) 100%
  );
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -100;
`
