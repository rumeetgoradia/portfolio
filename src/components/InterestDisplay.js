import "./styles/InterestDisplay.scss"

import { Col, Container, Row } from "react-bootstrap"

import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

export default function InterestDisplay({ interest, picSizes }) {
  return (
    <Container fluid className="interest-display">
      <Row>
        <Col className="interest-title">{interest.title}</Col>
      </Row>
      {interest.icon}
      <div className="interest-overlay"></div>
      <div className="interest-img-container">
        <Img
          title={interest.title}
          alt={interest.title}
          sizes={picSizes}
          className="interest-img"
        />
      </div>
    </Container>
  )
}

InterestDisplay.propTypes = {
  interest: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }),
}
