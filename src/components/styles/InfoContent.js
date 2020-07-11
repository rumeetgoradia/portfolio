import { memo } from "react"
import styled, { css } from "styled-components"

const InfoContent = css`
  color: ${({ theme }) => theme.font};
  font-size: 1rem;
  margin: 0;
  font-weight: 400;
  line-height: 1.4;
  text-align: left;
  transition: color 0.3s linear;

  @media screen and (min-width: 576px) {
    font-size: 1.25rem;
  }
`

export const InfoParagraph = memo(styled.p`
  ${InfoContent}
`)

export const InlineLink = memo(styled.a`
  ${InfoContent}
  color: ${({ theme }) => theme.fontRGBA + ".65)"};
  font-size: 1rem;
  position: relative;
  text-decoration: none;
  transition: color 0.3s linear;
  &:after {
    content: "";
    position: absolute;
    bottom: 1px;
    left: 50%;
    width: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.fontRGBA + ".95)"};
    transform: translateX(-50%);
    transition: width 0.3s linear;
  }
  &:hover,
  &:focus {
    text-decoration: none;
    color: ${({ theme }) => theme.fontRGBA + ".95)"};
    &:after {
      width: 100%;
    }
  }
`)
