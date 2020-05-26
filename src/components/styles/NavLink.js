import styled, { css } from "styled-components"

import { Link } from "gatsby"

export const NavLink = styled(Link)`
  font-family: "Calibre", sans-serif;
  position: relative;
  letter-spacing: 2px;
  text-transform: uppercase;
  outline: none;
  color: ${({ theme }) => theme.font};
  font-weight: 300;
  text-align: center;
  width: auto;
  padding: 0.5rem 0.5rem 0rem calc(0.5rem + 2px);
  border: none;
  margin: 0 1rem;
  font-size: 1rem;
  opacity: 1;
  transition: all 0.3s linear;
  &::after,
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    bottom: -12px;
    height: 0px;
    z-index: 89;
    transition: all 0.3s linear;
  }
  &::before {
    opacity: 0;
  }
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.font};
    text-shadow: ${({ theme }) => theme.textShadow};
    text-decoration: none;
  }
  &.active-nav-link {
    color: var(--green);
    text-shadow: 0px 0px 4px var(--green);
    &::after {
      height: 4px;
      background-color: var(--green) !important;
      box-shadow: 0px 0px 2px 0px var(--green) !important;
    }
  }
  &.at-home {
    text-shadow: ${({ theme }) => theme.textShadow};
    font-size: 0.75rem;
    padding-top: 4px;
    &::before {
      top: -20px;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
    }
    &::after {
      opacity: 0;
      bottom: -20px;
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
    }
    &::after,
    &::before {
      height: 2px;
      width: 90%;
    }
    &:hover,
    &:focus {
      &::after,
      &::before {
        height: 2px !important;
        opacity: 1;
      }
      &::before {
        top: -10px;
      }
      &::after {
        bottom: -10px;
      }
    }
  }
`
