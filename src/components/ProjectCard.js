import Img from "gatsby-image/withIEPolyfill"
import React from "react"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"
import { BorderedAnchor } from "./styles/BorderedAction"
// import "./styles/ProjectCard.scss"

const ProjectCardContent = styled.div`
  background-color: ${({ theme }) => theme.cardColor};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 1.5rem;
  backdrop-filter: saturate(150%) blur(1px);
  transition: background-color 0.3s linear, box-shadow 0.3s linear;
  h1,
  h2 {
    color: ${({ theme }) => theme.font};
  }
  h1 {
    font-size: 22px;
    font-weight: 500;
    margin: 0 0 0.5rem 0;
    transition: color 0.3s linear, text-shadow 0.3s linear;
  }
  h2 {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0.5rem;
    transition: color 0.3s linear;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    margin: 0 0 1rem 0;
    padding-left: 36px;
    text-indent: -36px;
    line-height: 1.15;
    color: ${({ theme }) => theme.fontRGBA + ".85)"};
    transition: color 0.3s linear;
  }
  strong {
    font-weight: 500;
  }
`

const ProjectCardContainer = styled.div`
  margin-bottom: 16px;
  opacity: 0.8;
  box-shadow: ${({ theme }) => theme.containerShadow};
  border-radius: 8px;
  transition: opacity 0.3s linear, box-shadow 0.3s linear;
  .project-card__img {
    transform: translate(-50%, -50%);
  }
  &:hover {
    opacity: 1;
    .project-card__img {
      transform: translate(-50%, -50%) scale(1.1);
    }
    .project-card__img-overlay {
      background-color: rgba(0, 0, 0, 0.2);
    }

    ${ProjectCardContent} {
      h1 {
        color: var(--green);
        text-shadow: 0 0 6px var(--green);
      }
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`

export default function ProjectCard({ project, picSizes, index }) {
  return (
    <ProjectCardContainer>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "25vh",
          minHeight: "175px",
          overflow: "hidden",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Img
          title={project.title}
          alt={project.title}
          sizes={picSizes}
          className="project-card__img"
          style={{
            position: "absolute",
            zIndex: 100,
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            transition: "transform 0.3s linear",
          }}
          imgStyle={{
            height: "100%",
            width: "100%",
          }}
        />
        <div
          className="project-card__img-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 101,
            width: "100%",
            height: "100%",
            opacity: 1,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            boxShadow: "inset 0 -30px 40px -30px rgba(0, 0, 0, 0.8)",
            transition: "background-color 0.3s linear",
          }}
        ></div>
      </div>
      <ProjectCardContent>
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
          style={{ margin: "0 -4px -8px" }}
        >
          {project.liveLink ? (
            <Col style={{ padding: "0 4px", marginBottom: 8 }}>
              <BorderedAnchor href={project.liveLink}>Live</BorderedAnchor>
            </Col>
          ) : null}
          {project.repoLink ? (
            <Col style={{ padding: "0 4px", marginBottom: 8 }}>
              <BorderedAnchor href={project.repoLink}>
                Repository
              </BorderedAnchor>
            </Col>
          ) : null}
        </Row>
      </ProjectCardContent>
    </ProjectCardContainer>
  )
}
