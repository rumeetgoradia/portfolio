import PropTypes from "prop-types"
import React from "react"
import Sphere from "../components/Sphere"

export default function SphereLayout({ children, theme, themeToggled }) {
  return (
    <>
      <Sphere theme={theme} themeToggled={themeToggled} />
      {children}
    </>
  )
}

SphereLayout.propTypes = {
  theme: PropTypes.string.isRequired,
  themeToggled: PropTypes.bool.isRequired,
}
