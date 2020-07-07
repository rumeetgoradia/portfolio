import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Typed from "react-typed"
import styled from "styled-components"
// import "./styles/index.scss"

const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.font};
  width: 100%;
  font-weight: 600;
  font-size: calc(5vw + 1rem);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
  margin-right: -2px;
  transition: color 0.3s linear;
`

const StyledSubHeader = styled.h2`
  color: ${({ theme }) => theme.font};
  font-weight: 200;
  font-size: calc(2vw + 1rem);
  margin: -5px 0 0;
  user-select: none;
  span {
    font-weight: 400;
  }
  @media screen and (min-width: 350px) {
    margin-top: -10px;
  }
  @media screen and (min-width: 576px) {
    margin-top: -15px;
  }
  @media screen and (min-width: 768px) {
    margin-top: -20px;
  }
  transition: color 0.3s linear;
`

export default function Index() {
  return (
    <Container
      fluid
      style={{ height: "100vh", position: "relative", zIndex: 6 }}
      className="d-flex flex-column justify-content-center align-items-center text-center"
    >
      <Row className="w-100">
        <Col
          className="animate__animated animate__fadeIn"
          style={{ animationDuration: "1.5s" }}
          xs={12}
        >
          <StyledHeader>Rumeet Goradia</StyledHeader>
        </Col>
        <Col
          className="animate__animated animate__fadeIn"
          style={{ animationDuration: "1.5s" }}
          xs={12}
        >
          <StyledSubHeader>
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
          </StyledSubHeader>
        </Col>
      </Row>
    </Container>
  )
}
