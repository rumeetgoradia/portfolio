import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import React, { memo } from "react"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import interests from "../assets/data/InterestsData"
import skills from "../assets/data/SkillsData"
import InterestDisplay from "../components/About/InterestDisplay"
import SkillDisplay from "../components/About/SkillDisplay"
import { InfoParagraph } from "../components/styles/InfoContent"
import { InfoHeader } from "../components/styles/InfoHeader"
import { StyledContainer } from "../components/styles/StyledContainer"
import useWidth from "../useWidth"
// import "./styles/about.scss"

const ProfileImg = styled(Img)`
  user-select: none;
  height: auto;
  width: 70%;
  border-radius: 50%;
  border: 5px solid;
  border-color: ${({ theme }) => theme.imgBorder} !important;
  opacity: 0.9;
  transition: border-color 0.3s linear, opacity 0.3s linear;
  &:hover {
    opacity: 1;
  }
  @media screen and (min-width: 576px) {
    height: auto;
    width: 40%;
  }
  @media screen and (min-width: 992px) {
    height: 259px;
    width: 259px;
  }
  @media screen and (min-width: 1200px) {
    height: 203px;
    width: 203px;
  }
`

function About({ data }) {
  const profileImg = data.profileImg.childImageSharp.fluid
  const { edges: interestImgsData } = data.interestImgs
  const width = useWidth()

  return (
    <>
      <Container fluid className="fluid-container">
        <StyledContainer>
          <Row className="mb-4">
            <Col className="d-flex justify-content-center justify-content-lg-start mb-4 mb-lg-0 animate__animated animate__fadeIn">
              <ProfileImg
                title="Rumeet Goradia"
                alt="Rumeet Goradia"
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
              <Row
                lg={3}
                md={2}
                xs={1}
                style={{ margin: width >= 768 ? "0 -6px" : "0 -15px" }}
              >
                {skills.map((skill, index) => {
                  return (
                    <Col
                      key={`skill-${index}`}
                      className="animate__animated animate__fadeIn"
                      style={{
                        animationDelay: `${index * 50 + 200}ms`,
                        padding: width >= 768 ? "0 6px" : "0 15px",
                      }}
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
              <Row
                lg={4}
                md={3}
                sm={2}
                xs={1}
                style={{ margin: width >= 768 ? "0 -6px" : "0 -15px" }}
              >
                {interests.map((interest, index) => {
                  return (
                    <Col
                      key={`interest-${index}`}
                      className="interest-display-container animate__animated animate__fadeIn"
                      style={{
                        animationDelay: `${index * 50 + 200}ms`,
                        padding: width >= 768 ? "0 6px" : "0 15px",
                      }}
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

export default memo(About)

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
