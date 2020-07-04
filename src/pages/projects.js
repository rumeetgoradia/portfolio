import { graphql } from "gatsby"
import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Masonry from "react-masonry-css"
import projects from "../assets/data/ProjectsData.json"
import ProjectCard from "../components/ProjectCard"
import { BorderedButton } from "../components/styles/BorderedAction"
import { StyledContainer } from "../components/styles/StyledContainer"
import "./styles/projects.scss"

export default function Projects({ data }) {
  const { edges: projectImgsData } = data.projectImgs

  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
  }

  let categories = getUnique(projects, "category").sort()
  categories = ["all", ...categories]

  const [currentCategory, setCurrentCategory] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    if (currentCategory === 0) {
      setFilteredProjects(projects)
    } else {
      const newProjectsList = projects.filter(
        project => project.category === categories[currentCategory]
      )
      setFilteredProjects(newProjectsList)
    }
  }, [currentCategory, categories])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(false)
      clearTimeout(timeout)
    }, projects.length * (50 + 1000) + 200)
  }, [])

  return (
    <>
      <Container fluid className="fluid-container">
        <StyledContainer>
          <Row className="category-selectors">
            {categories.map((category, index) => {
              return (
                <Col
                  key={`category-btn-${index}`}
                  className="category-selector-container animate__animated animate__fadeIn"
                  style={{ animationDelay: `${index * 50}ms` }}
                  xs={index === 0 ? 12 : 6}
                  md={index === 0 ? 12 : 3}
                >
                  <BorderedButton
                    className={`${index === currentCategory ? "active" : ""}`}
                    onClick={() => setCurrentCategory(index)}
                  >
                    {category}
                  </BorderedButton>
                </Col>
              )
            })}
          </Row>
          <Masonry
            breakpointCols={{ default: 3, 767: 2, 575: 1 }}
            className="projects-grid mt-4"
            columnClassName="projects-grid-col"
          >
            {filteredProjects.map((project, index) => {
              const projectImgEdge = projectImgsData.find(
                projectImgData =>
                  projectImgData.node.name === project.title.toLowerCase()
              )
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
        </StyledContainer>
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    projectImgs: allFile(filter: { relativePath: { regex: "/projects/" } }) {
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
