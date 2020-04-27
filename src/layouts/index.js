import React from "react"
import GlobalLayout from "./GlobalLayout"
import ParticlesLayout from "./ParticlesLayout"
import SphereLayout from "./SphereLayout"

export default ({ children, pageContext }) => {
  let layout = <SphereLayout>{children}</SphereLayout>
  let navbar = false
  if (pageContext.layout === "particles") {
    layout = <ParticlesLayout>{children}</ParticlesLayout>
    navbar = true
  }
  return <GlobalLayout navbar={navbar}>{layout}</GlobalLayout>
}
