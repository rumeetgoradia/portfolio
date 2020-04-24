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
  width: 110px;
  text-align: center;
  &:hover,
  &:focus {
    letter-spacing: 0px;
    background: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.body};
    outline: none;
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
  width: 100px !important;
`

export const BorderedButton = styled.button`
  ${borderedStyle}
`
