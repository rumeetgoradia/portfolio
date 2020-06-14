import "./styles/ProjectCard.scss"

import { Col, Row } from "react-bootstrap"

import Img from "gatsby-image"
import React from "react"

export default function ProjectCard({ project, picSizes }) {
  return (
    <div className="project-card">
      <div className="project-img-container">
        <Img
          title={project.title}
          alt={project.title}
          sizes={picSizes}
          className="project-img"
        />
      </div>
      <div className="project-content-container">
        <h1>{project.title}</h1>
        <h2>{project.description}</h2>
        <h3>
          <strong>Built With: </strong>
          {project.tools.join(" ⋅ ")}
        </h3>
        <Row
          xs={
            project.liveLink && project.repoLink
              ? 2
              : project.liveLink ^ project.repoLink
              ? 1
              : 0
          }
        >
          {project.liveLink ? (
            <Col>
              <BorderedAnchor href={project.liveLink}>Live</BorderedAnchor>
            </Col>
          ) : null}
          {project.repoLink ? (
            <Col>
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
