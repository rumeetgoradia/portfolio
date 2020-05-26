import React from "react"
import Typed from "react-typed"
import "./styles/Intro.scss"

export default function Intro() {
  return (
    <div className="introContainer">
      <div className="landing-text">
        <h1>Rumeet Goradia</h1>
        <h2>
          {/* <em> */}
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
          {/* </em> */}
        </h2>
      </div>
    </div>
  )
}
