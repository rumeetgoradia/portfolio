import React from "react"
import { BorderedLink } from "../components/styles/BorderedAction"

export default function Experience() {
  return <div style={{ position: "absolute", display: "flex", top: 0, left: 0, zIndex: 7  }}>EXPERIENCE
  <BorderedLink to="/about">About</BorderedLink>
        <BorderedLink to="/experience">Experience</BorderedLink>
        <BorderedLink to="/projects">Projects</BorderedLink>
        <BorderedLink to="/">Resume</BorderedLink>
  
  </div>
}
