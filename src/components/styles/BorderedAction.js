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
  background-color: ${({ theme }) => theme.body};
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

export const BorderedLink = styled(Link)`
  ${borderedStyle}
  text-decoration: none;
`

export const BorderedButton = styled.button`
  ${borderedStyle}
`
