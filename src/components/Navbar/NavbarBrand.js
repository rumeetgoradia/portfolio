import { Link } from "gatsby"
import React, { memo } from "react"
import styled from "styled-components"

const StyledNavbarBrand = styled(Link)`
  opacity: ${({ open, home }) => (open ? 1 : home ? 0 : 1)};
  pointer-events: ${({ open, home }) =>
    open ? "auto" : home ? "none" : "auto"};
  color: ${({ theme }) => theme.font};
  text-shadow: ${({ theme }) => theme.navLinkShadow};
  user-select: none;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  padding-top: 8px;
  padding-bottom: 0;
  transition: color 0.3s linear, text-shadow 0.3s linear, transform 0.3s linear,
    opacity 0.3s linear;
  &:hover,
  &:focus {
    text-decoration: none;
    color: var(--green);
    text-shadow: 0px 0px 3px var(--green);
  }
  &:active {
    transform: scale(0.9);
  }
  @media screen and (min-width: 768px) {
    opacity: ${({ home }) => (home ? 0 : 1)};
    pointer-events: ${({ home }) => (home ? "none" : "auto")};
  }
`

function NavbarBrand({ open, atHome, setOpen, children }) {
  return (
    <StyledNavbarBrand
      to="/"
      open={open}
      home={atHome}
      onClick={() => {
        setOpen(false)
      }}
    >
      {children}
    </StyledNavbarBrand>
  )
}

export default memo(NavbarBrand)
