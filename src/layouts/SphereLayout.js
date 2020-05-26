import React, { useEffect } from "react"

import PropTypes from "prop-types"
import Sphere from "../components/Sphere"

export default function SphereLayout({
  children,
  theme,
  themeToggled,
}) {
  useEffect(() => {
    return () => {}
  }, [])

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
