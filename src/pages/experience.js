import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaBriefcase, FaGraduationCap } from "react-icons/fa"
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import styled from "styled-components"
import {
  academicExperience,
  professionalExperience
} from "../assets/data/ExperienceData"
import InfoHeader from "../components/styles/InfoHeader"
import StyledContainer from "../components/styles/StyledContainer"

const StyledTimeline = styled(VerticalTimeline)`
  padding: 1rem 0;
  &:before {
    background-color: rgba(160, 160, 160, 0.3);
    transition: background-color 0.3s linear;
  }
  .timeline-element {
    margin-bottom: 1rem;
    margin-top: 2rem;
    .timeline-element-content {
      position: relative;
      background: transparent;
      border: none;
      box-shadow: none;
      padding: 2px 5px 0 12px;
      opacity: 0.85;
      transition: opacity 0.3s linear;
      h1 {
        font-size: 22px;
        font-weight: 500;
        margin: 0;
        color: ${({ theme }) => theme.font};
        transition: color 0.3s linear;
      }
      h2 {
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.font};
        transition: color 0.3s linear;
      }
      h3 {
        font-size: 16px;
        font-weight: 300;
        font-style: italic;
        margin: -0.25rem 0 0.5rem 0;
        color: ${({ theme }) => theme.fontRGBA + ".85)"};
        transition: color 0.3s linear;
      }
      p {
        font-size: 14px;
        font-weight: 300;
        margin: 0 0 0.5rem 0;
        padding-left: 36px;
        text-indent: -36px;
        line-height: 1.15;
        color: ${({ theme }) => theme.fontRGBA + ".85)"};
        transition: color 0.3s linear;
      }
      strong {
        font-weight: 500;
      }
      .experience-svg {
        height: 40px;
        max-width: 95%;
        margin-bottom: 0.75rem;
        width: auto;
        fill: ${({ theme }) => theme.font};
        transition: fill 0.3s linear;
        &.smaller {
          height: 30px;
        }
      }
    }
    .timeline-element-icon {
      box-shadow: none;
      width: 20px;
      height: 20px;
      left: 10px;
      top: 10px;
      border: 4px solid ${({ theme }) => theme.font};
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
      background-color: ${({ theme }) => theme.font};
      transition: left 0.3s linear, top 0.3s linear, width 0.3s linear,
        height 0.3s linear, background-color 0.3s linear,
        border-color 0.3s linear, box-shadow 0.3s linear;
      svg {
        fill: ${({ theme }) => theme.font};
        width: 18px;
        height: auto;
        opacity: 0;
        margin-left: 0;
        margin-top: 0;
        transform: translate(-50%, -50%) scale(0);
        transition: fill 0.3s linear, transform 0.3s linear, opacity 0.3s linear;
      }
    }
    .timeline-element-date {
      font-style: italic;
      font-weight: 400;
      font-size: 16px;
      padding: 0.25rem 0;
    }
    &:hover {
      &:before {
        background-color: rgba(160, 160, 160, 0.8);
      }
      .timeline-element-content {
        opacity: 1;
        .experience-svg {
          fill: var(--green);
        }
      }
      .timeline-element-icon {
        left: 0;
        top: 0;
        width: 40px;
        height: 40px;
        background-color: var(--green);
        box-shadow: inset 0 2px 0 rgba(0, 0, 0, 0.2);
        svg {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
      }
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
              <StyledTimeline layout="1-column" className="timeline">
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
                      <h2 style={{ marginBottom: ".5rem" }}>{exp.role}</h2>
                      <p>
                        <strong>Tools: </strong>
                        {exp.tools.join(" ⋅ ")}
                      </p>
                    </VerticalTimelineElement>
                  )
                })}
              </StyledTimeline>
            </Col>
            <Col className="animate__animated animate__fadeIn">
              <InfoHeader>Academic</InfoHeader>

              <StyledTimeline layout="1-column" className="timeline">
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
              </StyledTimeline>
            </Col>
          </Row>
        </StyledContainer>
      </Container>
    </>
  )
}
