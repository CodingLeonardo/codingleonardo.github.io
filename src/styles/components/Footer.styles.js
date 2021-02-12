import styled from "styled-components"

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 4em;
  color: #002e02;
  background: #97ff9b;

  span {
    font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 900)};
    font-size: 18px;
  }
`

export const SocialLinks = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`
