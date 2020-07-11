import React, { memo } from "react"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import { BorderedLink } from "../components/styles/BorderedAction"

const ErrorNumber = styled.h1`
  color: ${({ theme }) => theme.font};
  font-size: 18vmax;
  font-weight: 900;
  opacity: 0.35;
  margin: 0;
  margin-bottom: -4vmax;
  text-align: center;
  transition: color 0.3s linear;
`

const ErrorInfo = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  letter-spacing: 1px;
  margin-right: -1px;
  font-weight: 400;
  font-size: 4vmax;
  text-align: center;
  transition: color 0.3s linear;
`

function Error() {
  return (
    <Container
      fluid
      style={{ height: "100vh", position: "relative", zIndex: 6 }}
      className="d-flex flex-column justify-content-center align-items-center text-center"
    >
      <Row className="w-100 justify-content-center">
        <Col
          className="animate__animated animate__fadeIn"
          style={{ animationDuration: "1.5s" }}
          xs={12}
        >
          <ErrorNumber>404</ErrorNumber>
          <ErrorInfo>There's nothing here.</ErrorInfo>
        </Col>
        <Col
          className="animate__animated animate__fadeIn "
          style={{ animationDuration: "1.5s", maxWidth: 400 }}
          xs={12}
        >
          <BorderedLink to="/" title="Home">
            Go Home
          </BorderedLink>
        </Col>
      </Row>
    </Container>
  )
}

export default memo(Error)
