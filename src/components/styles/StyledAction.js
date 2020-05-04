import { Link } from "gatsby"
import styled, { css } from "styled-components"

const borderedStyle = css`
  line-height: 1;
  display: block;
  font-family: "Calibre", sans-serif;
  border: 1px solid ${({ theme }) => theme.font};
  border-radius: 4px;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  outline: none;
  padding-top: 0.7rem;
  padding-bottom: 0.45rem;
  color: ${({ theme }) => theme.font};
  background: ${({ theme }) => theme.body};
  opacity: 0.75;
  font-weight: 300;
  width: 24%;
  text-align: center;
  padding-left: 2px;
  position: relative;
  z-index: 91;
  transition: all 0.3s linear;
  &:hover,
  &:focus,
  &.active {
    opacity: 1;
    letter-spacing: 1px;
    background: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.body};
    outline: none;
    padding-left: 1px;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0 0 5px 0px ${({ theme }) => theme.font};
  }
  &:active {
    transform: translateY(3px);
  }
`

const navbarStyle = css`
  background: none;
  position: relative;
  border-radius: 0;
  width: auto;
  display: inline-block;
  padding: 0 0.5rem 0.5rem calc(0.5rem + 2px) !important;
  border: none;
  margin: 0 1rem;
  font-size: 1rem;
  opacity: 1;
  &:hover,
  &:focus,
  &.active-nav-link {
    padding-left: calc(0.5rem + 2px);
    letter-spacing: 2px;
    background: none;
  }
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.font};
    text-shadow: ${({ theme }) => theme.textShadow};
    box-shadow: none;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    bottom: -1px;
    height: 0px;
    z-index: 89;
    border-radius: 1px;
    transition: background-color 0.3s linear, box-shadow 0.3s linear,
      height 0.3s linear;
  }
  &.active-nav-link {
    color: var(--green);
    text-shadow: 0px 0px 4px var(--green);
    &::after {
      height: 4px;
      background-color: var(--green);
      box-shadow: 0px 0px 2px 0px var(--green);
    }
  }
  &:active {
    transform: none;
  }
`

export const StyledLink = styled(Link)`
  ${borderedStyle}
  text-decoration: none;
  &.navbar-link {
    ${navbarStyle}
  }
`

export const StyledButton = styled.button`
  ${borderedStyle}
`
