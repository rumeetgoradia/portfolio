import "./styles/SkillDisplay.scss"

import { Col, Container, Row } from "react-bootstrap"

import PropTypes from "prop-types"
import React from "react"

export default function SkillDisplay({ skill }) {
  return (
    <Container fluid className="skill-display">
      <Row className="justify-content-between align-content-center">
        <Col xs={2} className="skill-icon">
          {skill.icon}
        </Col>
        <Col className="skill-info-container">
          <Row>
            <Col className="skill-title">{skill.title}</Col>
          </Row>
          <Row>
            <Col className="skill-tools">{skill.tools.join(" ⋅ ")}</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

SkillDisplay.propTypes = {
  skill: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    icon: PropTypes.object.isRequired,
  }),
}
