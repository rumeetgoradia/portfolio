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
  &.inner {
    margin-bottom: 0.5rem;
  }
  @media screen and (min-width: 576px) {
    font-size: 1.25rem;
  }
`

export const InfoParagraph = memo(styled.p`
  ${InfoContent}
`)

export const InfoSpan = memo(styled.span`
  ${InfoContent}
`)
