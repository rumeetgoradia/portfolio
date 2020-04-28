import React from "react"
import { BorderedLink } from "./styles/BorderedAction"
import "./styles/NavLinks.scss"

export default function NavLinks({ navbar }) {
  return (
    <div className={`nav-links ${navbar ? "navbar" : ""}`}>
      <BorderedLink to="/about" className={`${navbar ? "navbar-link" : ""}`}>
        About
      </BorderedLink>
      <BorderedLink to="/experience" className={`${navbar ? "navbar-link" : ""}`}>
        Experience
      </BorderedLink>
      <BorderedLink to="/projects" className={`${navbar ? "navbar-link" : ""}`}>
        Projects
      </BorderedLink>
      <BorderedLink to="/" className={`${navbar ? "navbar-link" : ""}`}>
        Resume
      </BorderedLink>
    </div>
  )
}
