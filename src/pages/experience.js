import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaBriefcase, FaGraduationCap } from "react-icons/fa"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import styled from "styled-components"
import {
  academicExperience,
  professionalExperience,
} from "../assets/data/ExperienceData"
import { InfoHeader } from "../components/styles/InfoHeader"
import { StyledContainer } from "../components/styles/StyledContainer"
import "./styles/experience.scss"

const TimelineElementH1 = styled.h1`
  color: ${({ theme }) => theme.font} !important;
`

const TimelineElementH2 = styled.h2`
  color: ${({ theme }) => theme.font} !important;
`

const TimelineElementH3 = styled.h3`
  color: ${({ theme }) => theme.fontRGBA + ".85)"} !important;
`

const TimelineElementPara = styled.p`
  color: ${({ theme }) => theme.fontRGBA + ".85)"} !important;
`

const TimelineElementIconContainer = styled.div`
  svg {
    fill: ${({ theme }) => theme.font} !important;
  }
`

const TimelineElementContainer = styled.div`
  .timeline-element-icon {
    background-color: ${({ theme }) => theme.font};
    border-color: ${({ theme }) => theme.font} !important;
    svg {
      fill: ${({ theme }) => theme.font};
    }
  }
`

export default function Experience() {
  return (
    <>
      <Container fluid className="fluid-container">
        <StyledContainer>
          <Row xs={1} lg={2}>
            <Col className="mb-4 mb-lg-0 animate__animated animate__fadeIn">
              <InfoHeader>Professional</InfoHeader>
              <VerticalTimeline layout="1-column" className="timeline">
                {professionalExperience.map((exp, index) => {
                  return (
                    <TimelineElementContainer
                      key={`professional-experience-${index}`}
                    >
                      <VerticalTimelineElement
                        className="timeline-element"
                        contentArrowStyle={{ display: "none" }}
                        date={exp.date}
                        icon={<FaBriefcase />}
                        textClassName="timeline-element-content"
                        iconClassName="timeline-element-icon"
                        dateClassName="timeline-element-date"
                      >
                        <TimelineElementIconContainer>
                          {exp.icon}
                        </TimelineElementIconContainer>
                        <TimelineElementH1>{exp.company}</TimelineElementH1>
                        <TimelineElementH3>{exp.location}</TimelineElementH3>
                        <TimelineElementH2 style={{ marginBottom: ".5rem" }}>
                          {exp.role}
                        </TimelineElementH2>
                        <TimelineElementPara>
                          <strong>Tools: </strong>
                          {exp.tools.join(" ⋅ ")}
                        </TimelineElementPara>
                      </VerticalTimelineElement>
                    </TimelineElementContainer>
                  )
                })}
              </VerticalTimeline>
            </Col>
            <Col className="animate__animated animate__fadeIn">
              <InfoHeader>Academic</InfoHeader>

              <VerticalTimeline layout="1-column" className="timeline">
                {academicExperience.map((exp, index) => {
                  return (
                    <TimelineElementContainer
                      key={`academic-experience-${index}`}
                    >
                      <VerticalTimelineElement
                        className="timeline-element"
                        contentArrowStyle={{ display: "none" }}
                        date={exp.date}
                        icon={<FaGraduationCap />}
                        textClassName="timeline-element-content"
                        iconClassName="timeline-element-icon"
                        dateClassName="timeline-element-date"
                      >
                        <TimelineElementIconContainer>
                          {exp.icon}
                        </TimelineElementIconContainer>
                        <TimelineElementH1>{exp.school}</TimelineElementH1>
                        <TimelineElementH3>{exp.location}</TimelineElementH3>
                        {exp.degrees.length > 0 ? (
                          <div style={{ marginBottom: 8 }}>
                            {exp.degrees.map((degree, degree_index) => {
                              return (
                                <TimelineElementH2
                                  style={{ marginBottom: 0 }}
                                  key={`academic-experience-${index}-degree-${degree_index}`}
                                >
                                  {degree}
                                </TimelineElementH2>
                              )
                            })}
                          </div>
                        ) : null}
                        <TimelineElementPara>
                          <strong>Involvement: </strong>
                          {exp.involvement.join(" ⋅ ")}
                        </TimelineElementPara>
                        <TimelineElementPara>
                          <strong>Honors: </strong>
                          {exp.honors.join(" ⋅ ")}
                        </TimelineElementPara>
                      </VerticalTimelineElement>
                    </TimelineElementContainer>
                  )
                })}
              </VerticalTimeline>
            </Col>
          </Row>
        </StyledContainer>
      </Container>
    </>
  )
}
