import PropTypes from "prop-types"
import React from "react"
import "./ThemeToggler.scss"

export default function ThemeToggler({ theme, toggleTheme }) {
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

ThemeToggler.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
}
