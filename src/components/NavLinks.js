import React from "react"
import "./styles/NavLinks.scss"
import { StyledLink } from "./styles/StyledAction"

export default function NavLinks({ navbar, setThemeToggled }) {
  return (
    <div id="nav-container" className={`nav-links ${navbar ? "navbar" : ""}`}>
      <StyledLink
        id="about-link"
        to="/about"
        className={`${navbar ? "navbar-link" : ""}`}
        activeClassName="active-nav-link"
        onClick={() => {
          setThemeToggled(false)
          // slideUnderline("about-link")
        }}
      >
        About
      </StyledLink>
      <StyledLink
        id="experience-link"
        to="/experience"
        className={`${navbar ? "navbar-link" : ""}`}
        activeClassName="active-nav-link"
        onClick={() => {
          setThemeToggled(false)
          // slideUnderline("experience-link")
        }}
      >
        Experience
      </StyledLink>
      <StyledLink
        id="projects-link"
        to="/projects"
        className={`${navbar ? "navbar-link" : ""}`}
        activeClassName="active-nav-link"
        onClick={() => {
          setThemeToggled(false)
          // slideUnderline("projects-link")
        }}
      >
        Projects
      </StyledLink>
      <StyledLink to="/" className={`${navbar ? "navbar-link" : ""}`}>
        Resume
      </StyledLink>
      <div id="navbar-background"></div>
      {/* <div id="navbar-underline"></div> */}
    </div>
  )
}
