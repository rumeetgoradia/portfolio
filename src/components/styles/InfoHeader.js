import { memo } from "react"
import styled from "styled-components"

const InfoHeader = styled.h2`
  color: ${({ theme }) => theme.font};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s linear;
`

export default memo(InfoHeader)
