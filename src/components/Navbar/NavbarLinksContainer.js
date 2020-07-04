import React, { memo } from "react"
import styled from "styled-components"

const StyledNavbarLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: backdrop-filter 0.3s linear, height 0.3s linear,
    opacity 0.3s linear, background-color 0.3s linear;
  #nav-links {
    max-width: 820px;
    min-width: 550px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    transition: width 0.3s linear, height 0.3s linear;
  }
  &.at-home {
    #nav-links {
      width: 85%;
    }
  }
  @media screen and (max-width: 767px) {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    z-index: 9998;
    height: 0;
    opacity: 0;
    overflow: hidden;
    align-items: flex-start;
    background-color: ${({ theme }) => theme.bodyRGBA + ".95)"};
    border-bottom: 1px solid ${({ theme }) => theme.font};
    &.open {
      backdrop-filter: saturate(180%) blur(5px);
      height: calc(100vh - 45px);
      opacity: 1;
    }
    #nav-links {
      flex-direction: column;
      justify-content: space-around;
      height: 90%;
    }
  }
`

const NavbarLinksContainer = ({ atHome, open, children }) => {
  return (
    <StyledNavbarLinksContainer
      className={`${open ? "open" : ""} ${atHome ? "at-home" : ""}`}
    >
      <div id="nav-links">{children}</div>
    </StyledNavbarLinksContainer>
  )
}

export default memo(NavbarLinksContainer)
