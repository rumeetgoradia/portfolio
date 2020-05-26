import "./styles/index.scss"

import { Col, Container, Row } from "react-bootstrap"

import React from "react"
import Typed from "react-typed"

export default function Index() {
  return (
    <Container fluid id="intro-container">
      <Row style={{ width: "100%" }}>
        <Col>
          <h1>Rumeet Goradia</h1>
        </Col>
      </Row>
      <Row style={{ width: "100%" }} id="subtitle-row">
        <Col>
          <h2>
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
        </Col>
      </Row>
    </Container>
  )
}
