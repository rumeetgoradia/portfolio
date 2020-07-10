import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Masonry from "react-masonry-css"
import styled from "styled-components"
import projects from "../assets/data/ProjectsData.json"
import ProjectCard from "../components/ProjectCard"
import { BorderedButton } from "../components/styles/BorderedAction"
import { StyledContainer } from "../components/styles/StyledContainer"
import useWidth from "../useWidth"
// import "./styles/projects.scss"

const MasonryContainer = styled.div`
  .projects-grid {
    display: flex;
    margin-left: -16px; /* gutter size offset */
    margin-bottom: -16px;
    width: auto;
    .projects-grid-col {
      padding-left: 16px; /* gutter size */
      background-clip: padding-box;
    }
    @media screen and (min-width: 768px) {
      margin-left: -30px;
      margin-bottom: -30px;
      .projects-grid-col {
        padding-left: 30px;
      }
    }
  }
`

export default function Projects({ data }) {
  // ["websites, academic, web apps, desktop"]
  const width = useWidth()
  const { edges: projectImgsData } = data.projectImgs

  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
  }

  const categories = getUnique(projects, "category").sort()

  const [currentCategory, setCurrentCategory] = useState("all")
  const [animate, setAnimate] = useState(true)
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    if (currentCategory === "all") {
      setFilteredProjects(projects)
    } else {
      const newProjectsList = projects.filter(
        project => project.category === currentCategory
      )
      setFilteredProjects(newProjectsList)
    }
  }, [currentCategory])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(false)
      clearTimeout(timeout)
    }, projects.length * (50 + 1000) + 200)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <Container fluid className="fluid-container">
        <StyledContainer>
          <Row style={{ margin: width < 768 ? "0 -8px -16px" : "0 -15px" }}>
            {categories.map((category, index) => {
              return (
                <Col
                  key={`category-btn-${index}`}
                  className="animate__animated animate__fadeIn"
                  style={{
                    padding: width < 768 ? "0 8px" : "0 15px",
                    marginBottom: width < 768 ? 16 : 0,
                    animationDelay: `${index * 50}ms`,
                  }}
                  xs={6}
                  md={3}
                >
                  <BorderedButton
                    className={`${
                      currentCategory === category ? "active" : ""
                    }`}
                    onClick={() =>
                      setCurrentCategory(
                        currentCategory === category ? "all" : category
                      )
                    }
                  >
                    {category}
                  </BorderedButton>
                </Col>
              )
            })}
          </Row>
          <MasonryContainer>
            <Masonry
              breakpointCols={{ default: 3, 767: 2, 575: 1 }}
              className="projects-grid mt-4"
              columnClassName="projects-grid-col"
            >
              {filteredProjects.map((project, index) => {
                console.log(project.title.toLowerCase().replace(/\W/g, ""))
                let projectImgEdge = projectImgsData.find(
                  projectImgData =>
                    projectImgData.node.name ===
                    project.title.toLowerCase().replace(/\W/g, "")
                )
                if (!projectImgEdge) {
                  projectImgEdge = projectImgsData.find(
                    projectImgData => projectImgData.node.name === "project"
                  )
                }
                return (
                  <div
                    className={`${
                      animate ? "animate__animated animate__fadeIn" : ""
                    }`}
                    style={{ animationDelay: `${index * 50 + 200}ms` }}
                    key={`project-card-${index}`}
                  >
                    <ProjectCard
                      project={project}
                      picSizes={projectImgEdge.node.childImageSharp.sizes}
                      index={index}
                    />
                  </div>
                )
              })}
            </Masonry>
          </MasonryContainer>
        </StyledContainer>
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    projectImgs: allFile(
      filter: { relativeDirectory: { regex: "/projects/" } }
    ) {
      edges {
        node {
          childImageSharp {
            id
            sizes(maxWidth: 700) {
              ...GatsbyImageSharpSizes
            }
          }
          name
        }
      }
    }
  }
`
