import './styles/InterestDisplay.scss'

import { Col, Container, Row } from "react-bootstrap"

import PropTypes from "prop-types"
import React from "react"

export default function InterestDisplay({ interest }) {
  return (
    <Container fluid className='interest-display'>
      <Row>
        <Col className='interest-title'>{interest.title}</Col>
      </Row>
      {interest.icon}
    </Container>
  )
}

InterestDisplay.propTypes = {
  interest: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }),
}
