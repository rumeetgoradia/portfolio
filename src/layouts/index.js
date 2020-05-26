import GlobalLayout from "./GlobalLayout"
import React from "react"

export default ({ children, pageContext }) => {
  return (
    <GlobalLayout atHome={pageContext.layout !== "particles"}>
      {children}
    </GlobalLayout>
  )
}
