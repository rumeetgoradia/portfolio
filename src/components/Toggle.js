import { func, string } from "prop-types"
import React from "react"
import "./styles/Toggle.scss"
// import LineIcon from "react-lineicons"
// import { ToggleContainer } from "./Toggle.styled"

export default function Toggle({ theme, toggleTheme }) {
  return (
    <div className="toggleContainer">
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
