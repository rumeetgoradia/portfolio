import PropTypes from "prop-types"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
// import "./styles/SkillDisplay.scss"

const SkillIcon = styled(Col)`
  color: ${({ theme }) => theme.font};
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s linear, transform 0.3s linear;
  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`

const SkillInfo = styled(Col)`
  opacity: 0.85;
  transition: opacity 0.3s linear;
  .skill-title {
    color: ${({ theme }) => theme.font};
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 2px;
    transition: color 0.3s linear, text-shadow 0.3s linear;
    @media screen and (min-width: 992px) {
      font-size: 18px;
    }
  }
  .skill-tools {
    color: ${({ theme }) => theme.font};
    font-size: 1rem;
    font-weight: 300;
    margin-bottom: -5px;
    transition: color 0.3s linear, text-shadow 0.3s linear;
    @media screen and (min-width: 992px) {
      font-size: 14px;
      margin-bottom: -4px;
    }
  }
`

const SkillDisplayContainer = styled(Container)`
  border-radius: 8px;
  border: solid 1px rgba(160, 160, 160, 0.3);
  margin-bottom: 10px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  transition: border-color 0.3s linear;
  &:hover {
    border-color: rgba(160, 160, 160, 0.8);
    div${SkillIcon} {
      color: var(--green);
      transform: scale(1.1);
    }
    div${SkillInfo} {
      opacity: 1;
      .skill-title,
      .skill-tools {
        text-shadow: ${({ theme }) => "1px 1px 3px " + theme.fontRGBA + ".35)"};
      }
    }
  }
`

function SkillDisplay({ skill }) {
  return (
    <SkillDisplayContainer fluid className="skill-display">
      <Row className="justify-content-between align-items-center">
        <SkillIcon xs={2}>{skill.icon}</SkillIcon>
        <SkillInfo>
          <Row>
            <Col className="skill-title">{skill.title}</Col>
          </Row>
          <Row>
            <Col className="skill-tools">{skill.tools.join(" ⋅ ")}</Col>
          </Row>
        </SkillInfo>
      </Row>
    </SkillDisplayContainer>
  )
}

export default SkillDisplay

SkillDisplay.propTypes = {
  skill: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
    icon: PropTypes.object.isRequired,
  }),
}
