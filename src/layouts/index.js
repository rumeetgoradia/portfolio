import GlobalLayout from "./GlobalLayout"
import ParticlesLayout from "./ParticlesLayout"
import React from "react"
import SphereLayout from "./SphereLayout"

export default ({ children, pageContext }) => {
  return (
    <GlobalLayout atHome={pageContext.layout !== "particles"}>
      {children}
    </GlobalLayout>
  )
}
