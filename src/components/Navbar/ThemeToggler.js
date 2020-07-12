import PropTypes from "prop-types"
import React, { memo, useState } from "react"
import styled from "styled-components"
// import "./ThemeToggler.scss"

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 21px;
  background-color: ${({ theme }) => theme.font};
  transition: transform 0.3s linear;
  svg {
    position: relative;
    z-index: 10001;
    fill: red;
  }
  &:before {
    content: "";
    position: absolute;
    height: 13px;
    width: 13px;
    border-radius: 50%;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.body};
    background-image: url("../../sun.svg");
    background-position: center;
    background-size: 75%;
    background-repeat: no-repeat;
    transition: transform 0.3s linear, background-color 0.3s linear;
  }
  &.dark-theme {
    &:before {
      transform: translateX(14px);
      background-size: 50%;
      background-image: url("../../moon.svg");
    }
  }
`

function ThemeToggler({ theme, toggleTheme }) {
  const [checked, setChecked] = useState(theme === "dark")
  return (
    <div style={{ overflow: "hidden" }}>
      <label
        style={{
          position: "relative",
          display: "inline-block",
          width: 35,
          height: 21,
          margin: 0,
        }}
        htmlFor="theme-toggle"
      >
        <ToggleInput
          id="theme-toggle"
          name="theme-toggle"
          type="checkbox"
          checked={checked}
          onChange={() => {
            toggleTheme()
            setChecked(!checked)
          }}
        />
        <Slider className={`${checked ? "dark-theme" : ""}`}></Slider>
      </label>
    </div>
  )
}

export default memo(ThemeToggler)

ThemeToggler.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}
