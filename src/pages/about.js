import "./styles/about.scss"

import { Col, Container, Row } from "react-bootstrap"
import React, { useEffect, useState } from "react"

import Img from "gatsby-image"
import { InfoHeader } from "../components/styles/InfoHeader"
import { InfoParagraph } from "../components/styles/InfoContent"
import InterestDisplay from "../components/InterestDisplay"
import SkillDisplay from "../components/SkillDisplay"
import { StyledContainer } from "../components/styles/StyledContainer"
import { graphql } from "gatsby"
import { interests } from "../assets/data/InterestsData"
import { skills } from "../assets/data/SkillsData"

export default function About({ data }) {
  const profileImg = data.profileImg.childImageSharp.fluid
  const { edges: interestImgsData } = data.interestImgs

  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  return (
    <>
      <Container fluid className="fluid-container">
        <StyledContainer className="">
          <Row className="mb-4">
            <Col
              id="profile-img-container"
              className="mb-4 mb-lg-0 animate__animated animate__fadeIn"
            >
              <Img
                title="Rumeet Goradia"
                alt="Rumeet Goradia"
                className="profile-img"
                fluid={profileImg}
              />
            </Col>
            <Col
              xl={9}
              lg={8}
              md={12}
              className="animate__animated animate__fadeIn"
            >
              <InfoHeader>Who Am I?</InfoHeader>
              <InfoParagraph>
                My name is Rumeet Goradia, and I am currently a rising senior at
                the Rutgers University Honors College in New Brunswick, NJ. I'm
                studying Computer Science and Business Analytics & Information
                Technology. One day, I hope to be able to market my own software
                and bring more technology into lower-income communities. This
                coming summer, I'll be working at Schonfeld Strategic Advisors
                in New York City as a Software Engineering Intern. While I'm not
                studying or working, I'm at the gym, hanging out with my
                friends, or working on personal projects like this website.
              </InfoParagraph>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="animate__animated animate__fadeIn">
              <InfoHeader>My Skills</InfoHeader>
              <Row lg={3} md={2} xs={1} id="skill-displays">
                {skills.map((skill, index) => {
                  return (
                    <Col
                      key={`skill-${index}`}
                      className="skill-display-container animate__animated animate__fadeIn"
                      style={{ animationDelay: `${index * 50 + 200}ms` }}
                    >
                      <SkillDisplay skill={skill} />
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
          <Row style={{ marginBottom: -10 }}>
            <Col className="animate__animated animate__fadeIn">
              <InfoHeader>My Interests</InfoHeader>
              <Row lg={4} md={3} sm={2} xs={1} id="interest-displays">
                {interests.map((interest, index) => {
                  return (
                    <Col
                      key={`interest-${index}`}
                      className="interest-display-container animate__animated animate__fadeIn"
                      style={{ animationDelay: `${index * 50 + 200}ms` }}
                    >
                      <InterestDisplay
                        interest={interest}
                        picSizes={
                          interestImgsData[index].node.childImageSharp.sizes
                        }
                      />
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
        </StyledContainer>
      </Container>
    </>
  )
}

export const query = graphql`
  query {
    profileImg: file(relativePath: { eq: "profileimage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    interestImgs: allFile(
      sort: { order: ASC, fields: name }
      filter: {
        extension: { ne: "svg" }
        relativePath: { regex: "/interests/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            id
            sizes(maxWidth: 700) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
