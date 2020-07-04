import { memo } from "react"
import { Container } from "react-bootstrap"
import styled from "styled-components"

const NavbarContainer = styled(Container)`
  background-color: ${({ theme }) => theme.bodyRGBA + ".85)"};
  border-bottom: 1px solid ${({ theme }) => theme.font};
  position: fixed;
  max-width: none;
  width: 100%;
  padding: 0 1rem;
  height: 45px;
  z-index: 9999;
  backdrop-filter: saturate(180%) blur(10px);
  transition: backdrop-filter 0.3s linear, border-bottom-color 0.3s linear,
    background-image 0.3s linear, background-color 0.3s linear,
    height 0.3s linear;
  &.at-home {
    backdrop-filter: none;
    border-bottom-color: transparent;
    background-color: transparent;
    background-image: none;
    height: 80px;
  }
  @media screen and (max-width: 767px) {
    &.open {
      background-color: ${({ theme }) => theme.bodyRGBA + ".95)"};
      border-bottom-color: transparent;
      height: 45px;
      backdrop-filter: saturate(180%) blur(10px);
    }
  }
`
export default memo(NavbarContainer)
