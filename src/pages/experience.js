import "react-vertical-timeline-component/style.min.css"
import "./styles/experience.scss"

import { Col, Container, Row } from "react-bootstrap"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"

import { FaUserGraduate } from "react-icons/fa"
import { InfoHeader } from "../components/styles/InfoHeader"
import React from "react"
import { StyledContainer } from "../components/styles/StyledContainer"
import { academicExperience } from "../assets/data/AcademicExperienceData"

export default function Experience() {
  return (
    <>
      <Container fluid className="fluid-container">
        <StyledContainer>
          <Row xs={1} lg={2}>
            <Col className="mb-4 mb-lg-0">
              <InfoHeader>Professional</InfoHeader>
            </Col>
            <Col>
              <InfoHeader>Academic</InfoHeader>

              <VerticalTimeline layout="1-column" className="timeline">
                {academicExperience.map((exp, index) => {
                  return (
                    <VerticalTimelineElement
                      key={`academic-experience-${index}`}
                      className="timeline-element"
                      contentArrowStyle={{ display: "none" }}
                      date={exp.date}
                      icon={exp.icon}
                      textClassName="timeline-element-content"
                      iconClassName="timeline-element-icon"
                      dateClassName="timeline-element-date"
                    >
                      <h1>{exp.school}</h1>
                      {exp.degrees.length > 0 ? (
                        <div style={{ marginBottom: 8 }}>
                          {exp.degrees.map((degree, degree_index) => {
                            return (
                              <h2
                                key={`academic-experience-${index}-degree-${degree_index}`}
                              >
                                {degree}
                              </h2>
                            )
                          })}
                        </div>
                      ) : (
                        <></>
                      )}
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
                {/* <VerticalTimelineElement
                  className="timeline-element"
                  contentArrowStyle={{ display: "none" }}
                  date="2017 - present"
                  icon={<FaUserGraduate />}
                  textClassName="timeline-element-content"
                  iconClassName="timeline-element-icon"
                  dateClassName="timeline-element-date"
                >
                  <h1>Rutgers University</h1>
                  <div style={{ marginBottom: 8 }}>
                    <h2>B.S. in Computer Science</h2>
                    <h2>B.S. in Business Analytics & Information Technology</h2>
                  </div>
                  <p>
                    <strong>Involvement: </strong>
                  </p>
                  <p>
                    <strong>Honors: </strong>
                  </p>
                </VerticalTimelineElement> */}
              </VerticalTimeline>
            </Col>
          </Row>
        </StyledContainer>
      </Container>
    </>
  )
}
