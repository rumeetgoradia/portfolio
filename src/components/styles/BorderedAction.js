import { Link } from "gatsby"
import styled, { css } from "styled-components"

const borderedStyle = css`
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
  background: transparent;
  transition: all 0.3s linear;
  font-weight: 300;
  width: 24%;
  text-align: center;
  padding-left: 2px;
  &:hover,
  &:focus,
  &.active {
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
  width: auto;
  display: inline-block;
  padding: 0 0.5rem 0.5rem calc(0.5rem + 2px);
  border: none;
  margin: 0 1rem;
  font-size: 1rem;
  &:hover,
  &:focus,
  &.active {
    padding-left: calc(0.5rem + 2px);
    letter-spacing: 2px;
    background: none;
  }
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.font};
    text-shadow: 0px 0px 2px ${({ theme }) => theme.font};
    box-shadow: none;
  }
  &.active {
    color: var(--green);
    text-shadow: 0px 0px 4px var(--green);
  }
  &:active {
    transform: none;
  }
`

export const BorderedLink = styled(Link)`
  ${borderedStyle}
  text-decoration: none;
  &.navbar-link {
    ${navbarStyle}
  }
`

export const BorderedButton = styled.button`
  ${borderedStyle}
`
