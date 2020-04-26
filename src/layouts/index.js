import React from "react"
import GlobalLayout from "./GlobalLayout"
import ParticlesLayout from "./ParticlesLayout"
import SphereLayout from "./SphereLayout"

export default ({ children, pageContext }) => {
  let layout = <SphereLayout>{children}</SphereLayout>
  if (pageContext.layout === "particles") {
    layout = <ParticlesLayout>{children}</ParticlesLayout>
  }
  return <GlobalLayout>{layout}</GlobalLayout>
}
