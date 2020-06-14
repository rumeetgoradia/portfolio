import "./styles/projects.scss"

import { Col, Container, Row } from "react-bootstrap"
import React, { useEffect, useState } from "react"

import { BorderedButton } from "../components/styles/BorderedAction"
import Masonry from "react-masonry-css"
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
  }, [currentCategory])

  useEffect(() => {
    console.log(filteredProjects)
  }, [filteredProjects])

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
              return <h1 key={index}>{project.title}</h1>
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
