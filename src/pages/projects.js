import "./styles/projects.scss"

import { Col, Container, Row } from "react-bootstrap"
import React, { useEffect, useState } from "react"

import { BorderedButton } from "../components/styles/BorderedAction"
import Masonry from "react-masonry-css"
import ProjectCard from "../components/ProjectCard"
import { StyledContainer } from "../components/styles/StyledContainer"
import { graphql } from "gatsby"
import projects from "../assets/data/ProjectsData.json"

export default function Projects({ data }) {
  const { edges: projectImgsData } = data.projectImgs

  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
  }

  let categories = getUnique(projects, "category").sort()
  categories = ["all", ...categories]

  const [currentCategory, setCurrentCategory] = useState(0)
  const [categoryChanged, setCategoryChanged] = useState(false)
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    if (currentCategory === 0) {
      setFilteredProjects(projects)
    } else {
      setCategoryChanged(true)
      const newProjectsList = projects.filter(
        project => project.category === categories[currentCategory]
      )
      setFilteredProjects(newProjectsList)
    }
  }, [currentCategory])

  return (
    <>
      <Container fluid className="fluid-container">
        <StyledContainer>
          <Row xs={2} md={4} className="category-selectors">
            {categories.map((category, index) => {
              return (
                <Col
                  key={`category-btn-${index}`}
                  className="category-selector-container"
                  data-sal="fade"
                  data-sal-delay={`${index * 50}`}
                  data-sal-easing="ease-out-quad"
                  data-sal-duration="800"
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
                  data-sal={`${!categoryChanged ? "fade" : ""}`}
                  data-sal-delay={`${index * 50 + 200}`}
                  data-sal-easing="ease-out-quad"
                  data-sal-duration="800"
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
