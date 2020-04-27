import React from "react"
import { BorderedLink } from "./styles/BorderedAction"
import "./styles/NavLinks.scss"

export default function NavLinks({ navbar }) {
  return (
    <div className={`nav-links ${navbar ? "navbar" : ""}`}>
      <BorderedLink to="/about" className={`${navbar ? "navbar" : ""}`}>
        About
      </BorderedLink>
      <BorderedLink to="/experience" className={`${navbar ? "navbar" : ""}`}>
        Experience
      </BorderedLink>
      <BorderedLink to="/projects" className={`${navbar ? "navbar" : ""}`}>
        Projects
      </BorderedLink>
      <BorderedLink to="/" className={`${navbar ? "navbar" : ""}`}>
        Resume
      </BorderedLink>
    </div>
  )
}
