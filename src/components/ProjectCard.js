import "./styles/ProjectCard.scss"

import { Col, Row } from "react-bootstrap"

import { BorderedAnchor } from "./styles/BorderedAction"
import Img from "gatsby-image"
import React from "react"

export default function ProjectCard({ project, picSizes, index }) {
  return (
    <div
      className="project-card"
    >
      <div className="project-img-container">
        <Img
          title={project.title}
          alt={project.title}
          sizes={picSizes}
          className="project-img"
        />
        <div className="project-img-shadow-overlay"></div>
        {/* <div className="project-img-color-overlay">
          {project.liveLink ? (
            <div className="project-link">
              <BorderedAnchor href={project.liveLink}>Live</BorderedAnchor>
            </div>
          ) : null}
          {project.repoLink ? (
            <div className="project-link">
              <BorderedAnchor href={project.repoLink}>
                Repository
              </BorderedAnchor>
            </div>
          ) : null}
        </div> */}
      </div>
      <div className="project-content-container">
        <h1>{project.title}</h1>
        <h2>{project.description}</h2>
        <p>
          <strong>Tools: </strong>
          {project.tools.join(" ⋅ ")}
        </p>
        <Row
          xs={1}
          sm={
            project.liveLink && project.repoLink
              ? 2
              : project.liveLink ^ project.repoLink
              ? 1
              : 0
          }
          className="project-links"
        >
          {project.liveLink ? (
            <Col className="project-link">
              <BorderedAnchor href={project.liveLink}>Live</BorderedAnchor>
            </Col>
          ) : null}
          {project.repoLink ? (
            <Col className="project-link">
              <BorderedAnchor href={project.repoLink}>
                Repository
              </BorderedAnchor>
            </Col>
          ) : null}
        </Row>
      </div>
    </div>
  )
}
