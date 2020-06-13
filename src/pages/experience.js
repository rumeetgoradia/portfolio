import "react-vertical-timeline-component/style.min.css"
import "./styles/experience.scss"

import { Col, Container, Row } from "react-bootstrap"
import { FaBriefcase, FaGraduationCap } from "react-icons/fa"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import {
  academicExperience,
  professionalExperience,
} from "../assets/data/ExperienceData"

import { InfoHeader } from "../components/styles/InfoHeader"
import React from "react"
import { StyledContainer } from "../components/styles/StyledContainer"

export default function Experience() {
  return (
    <>
      <Container fluid className="fluid-container">
        <StyledContainer>
          <Row xs={1} lg={2}>
            <Col className="mb-4 mb-lg-0">
              <div
                data-sal="fade"
                data-sal-easing="ease-out-quad"
                data-sal-duration="800"
              >
                <InfoHeader>Professional</InfoHeader>
              </div>
              <VerticalTimeline
                layout="1-column"
                className="timeline"
                // style={{ marginBottom: ".25rem" }}
              >
                {professionalExperience.map((exp, index) => {
                  return (
                    <VerticalTimelineElement
                      key={`professional-experience-${index}`}
                      className="timeline-element"
                      contentArrowStyle={{ display: "none" }}
                      date={exp.date}
                      icon={<FaBriefcase />}
                      textClassName="timeline-element-content"
                      iconClassName="timeline-element-icon"
                      dateClassName="timeline-element-date"
                    >
                      {exp.icon}
                      <h1>{exp.company}</h1>
                      <h3>{exp.location}</h3>
                      <h2 style={{ marginBottom: 8 }}>{exp.role}</h2>
                      <p>
                        <strong>Tools: </strong>
                        {exp.tools.join(" ⋅ ")}
                      </p>
                    </VerticalTimelineElement>
                  )
                })}
              </VerticalTimeline>
            </Col>
            <Col>
              <div
                data-sal="fade"
                data-sal-easing="ease-out-quad"
                data-sal-duration="800"
              >
                <InfoHeader>Academic</InfoHeader>
              </div>
              <VerticalTimeline layout="1-column" className="timeline">
                {academicExperience.map((exp, index) => {
                  return (
                    <VerticalTimelineElement
                      key={`academic-experience-${index}`}
                      className="timeline-element"
                      contentArrowStyle={{ display: "none" }}
                      date={exp.date}
                      icon={<FaGraduationCap />}
                      textClassName="timeline-element-content"
                      iconClassName="timeline-element-icon"
                      dateClassName="timeline-element-date"
                    >
                      {exp.icon}
                      <h1>{exp.school}</h1>
                      <h3>{exp.location}</h3>
                      {exp.degrees.length > 0 ? (
                        <div style={{ marginBottom: 8 }}>
                          {exp.degrees.map((degree, degree_index) => {
                            return (
                              <h2
                                style={{ marginBottom: 0 }}
                                key={`academic-experience-${index}-degree-${degree_index}`}
                              >
                                {degree}
                              </h2>
                            )
                          })}
                        </div>
                      ) : null}
                      <p>
                        <strong>Involvement: </strong>
                        {exp.involvement.join(" ⋅ ")}
                      </p>
                      <p>
                        <strong>Honors: </strong>
                        {exp.honors.join(" ⋅ ")}
                      </p>
                    </VerticalTimelineElement>
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
