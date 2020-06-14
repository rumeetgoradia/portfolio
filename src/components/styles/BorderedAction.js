import styled, { css } from "styled-components"

import { Link } from "gatsby"

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
  padding: 11px 4px 7px 6px;
  color: ${({ theme }) => theme.font};
  background-color: transparent;
  opacity: 0.75;
  font-weight: 300;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 91;
  transition: all 0.3s linear;
  &:hover,
  &:focus,
  &.active {
    opacity: 1;
    letter-spacing: 1px;
    outline: none;
    padding-right: 5px;
  }
  &.active {
    background-color: var(--green);
    box-shadow: inset 0 0 5px 1px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px 0px ${({ theme }) => theme.font};
    background-color: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.body};
  }

  &:active {
    transform: translateY(3px);
  }
`

export const BorderedAnchor = styled.a`
  ${borderedStyle}
  text-decoration: none;
`

export const BorderedButton = styled.button`
  ${borderedStyle}
`
