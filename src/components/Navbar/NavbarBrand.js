import { Link } from "gatsby"
import React, { memo } from "react"
import styled from "styled-components"

const StyledNavbarBrand = styled(Link)`
  opacity: ${({ open, home }) => (open ? 1 : home ? 0 : 1)};
  pointer-events: ${({ open, home }) =>
    open ? "auto" : home ? "none" : "auto"};
  color: ${({ theme }) => theme.font};
  user-select: none;
  text-decoration: none;
  padding-bottom: 0;
  transition: opacity 0.3s linear;
  svg {
    fill: ${({ theme }) => theme.font};
    height: 1.5rem;
    width: auto;
    transition: fill 0.3s linear, transform 0.3s linear;
  }
  &:hover,
  &:focus {
    text-decoration: none;
    svg {
      fill: var(--green);
    }
  }
  &:active {
    svg {
      transform: scale(0.9);
    }
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
