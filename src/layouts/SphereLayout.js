import PropTypes from "prop-types"
import React, { memo } from "react"
import Sphere from "../components/Sphere"

function SphereLayout({ children, theme, themeToggled }) {
  return (
    <>
      <Sphere theme={theme} themeToggled={themeToggled} />
      {children}
    </>
  )
}

export default memo(SphereLayout)

SphereLayout.propTypes = {
  theme: PropTypes.string.isRequired,
  themeToggled: PropTypes.bool.isRequired,
}
