import styled from "styled-components"

export const CertificateContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 0.4em;
  overflow: hidden;
  box-shadow: 0 0 0.5em 0 rgba(0, 0, 0, 0.3);
  transition: 0.5s;

  img {
    display: flex;
    width: 100%;
  }

  &:hover {
    transform: scale(1.2);
  }
`
