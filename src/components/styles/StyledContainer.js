import { Container } from "react-bootstrap"
import styled from "styled-components"

export const StyledContainer = styled(Container)`
  position: relative;
  z-index: 10;
  border-radius: 4px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.containerColor};
  box-shadow: ${({ theme }) => theme.containerShadow};
  transition: all 0.3s linear;
`
