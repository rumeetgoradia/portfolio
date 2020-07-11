import React from "react"
import styled, { css } from "styled-components"

const inputCss = css`
  margin-bottom: 6px;
  border-radius: 0.25rem;
  border: ${theme => theme.font} 1px solid;
  padding: 0.5rem 0.75rem 0.25rem;
  font-size: 1rem;
  width: 100%;
  background-color: whitesmoke;
  opacity: 0.8;
  color: #111111;
  &:focus {
    outline: none;
    opacity: 1;
  }
`

export const StyledTextInput = styled.input`
  ${inputCss}
`

export const StyledTextArea = styled.textarea`
  ${inputCss}
  margin-bottom: 0 !important;
  min-height: 93px;
`

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.font};
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 0.3s linear;
`

export const ErrorText = styled.div`
  color: #bb0000;
  font-weight: 500;
  font-size: 0.75rem;
  margin-left: 5px;
  position: absolute;
`

export const LabeledTextInput = ({ label, errorText, ...props }) => {
  return (
    <div style={{ position: "relative" }}>
      <Label className="mb-1">{label}</Label>
      <StyledTextInput type="text" {...props} />
      {errorText ? <ErrorText>{errorText}</ErrorText> : null}
    </div>
  )
}

export const LabeledTextArea = ({ label, errorText, ...props }) => {
  return (
    <div style={{ position: "relative" }}>
      <Label className="mb-1">{label}</Label>
      <StyledTextArea type="text" {...props} />
      {errorText ? <ErrorText>{errorText}</ErrorText> : null}
    </div>
  )
}
