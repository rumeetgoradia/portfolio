import React from "react"
import Typed from "react-typed"
import { BorderedLink } from "./styles/BorderedAction"
import "./styles/Intro.scss"

export default function Intro() {
  return (
    <div className="introContainer">
      <div className="landing-text">
        <h1>Rumeet Goradia</h1>
        <h2>
          <em>
            On a quest for{" "}
            <span>
              <Typed
                strings={[
                  "prosperity.",
                  "knowledge.",
                  "purpose.",
                  "significance.",
                  "bliss.",
                  "strength.",
                  "tranquility.",
                ]}
                typeSpeed={40}
                backSpeed={20}
                backDelay={1150}
                showCursor
                cursorChar="|"
                loop
              />
            </span>
          </em>
        </h2>
      </div>
      <div className="landing-buttons">
        <BorderedLink to="/about">About</BorderedLink>
        <BorderedLink to="/experience">Experience</BorderedLink>
        <BorderedLink to="/projects">Projects</BorderedLink>
        <BorderedLink to="/">Resume</BorderedLink>
        {/* <BorderedButton>About</BorderedButton>
        <BorderedButton>Experience</BorderedButton>
        <BorderedButton>Projects</BorderedButton>
        <BorderedButton>Resume</BorderedButton> */}
      </div>
    </div>
  )
}
