import { memo } from "react"
import styled from "styled-components"

const InfoParagraph = styled.p`
  color: ${({ theme }) => theme.font};
  font-size: 1rem;
  margin: 0;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
  transition: color 0.3s linear;
  @media screen and (min-width: 576px) {
    font-size: 1.25rem;
  }
`

export default memo(InfoParagraph)
