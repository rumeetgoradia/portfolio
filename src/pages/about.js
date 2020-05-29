import "./styles/about.scss"

import { Col, Container, Row } from "react-bootstrap"
import { InfoParagraph, InfoSpan } from "../components/styles/InfoContent"
import React, { useEffect } from "react"

import Img from "gatsby-image"
import { InfoHeader } from "../components/styles/InfoHeader"
import SkillDisplay from "../components/SkillDisplay"
import { StyledContainer } from "../components/styles/StyledContainer"
import WOW from "wow.js"
import { graphql } from "gatsby"
import { interests } from "../assets/data/InterestsData"
import { skills } from "../assets/data/SkillsData"
import toolboxEntries from "../assets/data/ToolboxEntries.json"

export default function About({ data }) {
  const profileImg = data.profileImg.childImageSharp.fluid

  useEffect(() => {
    const wow = new WOW()
    wow.init()
    return () => {}
  }, [])

  return (
    <>
      <Container fluid className="fluid-container">
        <StyledContainer>
          <Row className="mb-4">
            <Col
              id="profile-img-container"
              className="mb-md-4 mb-lg-0 wow fadeIn"
            >
              <Img
                title="Rumeet Goradia"
                alt="Rumeet Goradia"
                className="profile-img"
                fluid={profileImg}
              />
            </Col>
            <Col xl={9} lg={8} md={12} className="wow fadeIn">
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
          <Row>
            <Col className="wow fadeIn">
              <InfoHeader>My Skills</InfoHeader>
              <Row lg={3} md={2} xs={1} id="skill-displays">
                {skills.map((skill, index) => {
                  return (
                    <Col
                      key={`skill-${index}`}
                      className="skill-display-container wow fadeIn"
                      style={{ animationDelay: `${index * 75 + 50}ms` }}
                    >
                      <SkillDisplay skill={skill} />
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
        </StyledContainer>
      </Container>
    </>
    // <StyledContainer id="about">
    //   <div id="about-content">
    //     <div id="desc-container">
    //       <div id="who-am-i">
    //         <InfoHeader>Who Am I?</InfoHeader>
    //         <InfoParagraph>
    //           My name is Rumeet Goradia, and I am currently a Junior at the
    //           Rutgers University Honors College in New Brunswick, NJ. I'm
    //           studying Computer Science and Business Analytics & Information
    //           Technology. One day, I hope to be able to market my own software
    //           and bring more technology into lower-income communities. This
    //           coming summer, I'll be working at Schonfeld Strategic Advisors in
    //           New York City as a Software Engineering Intern. While I'm not
    //           studying or working, I'm at the gym, hanging out with my friends,
    //           or working on personal projects like this website.
    //         </InfoParagraph>
    //       </div>
    //     </div>
    //     <div id="about-img-container">
    //       <Img
    //         title="Rumeet Goradia"
    //         alt="Rumeet Goradia"
    //         className="about-img"
    //         fluid={profileImg}
    //       />
    //     </div>
    //   </div>
    //   <div id="interests-and-toolbox">
    //     <div id="toolbox">
    //       <InfoHeader>My Toolbox</InfoHeader>
    //       {toolboxEntries.map((item, index) => {
    //         return (
    //           <InfoParagraph
    //             className="toolbox-entry"
    //             key={`toolbox-entry-${index}`}
    //           >
    //             <strong>{item.type}:</strong>&nbsp;{item.value}
    //           </InfoParagraph>
    //         )
    //       })}
    //       <InfoParagraph className="toolbox-entry"></InfoParagraph>
    //     </div>
    //     <div id="interests">
    //       <InfoHeader>My Interests</InfoHeader>
    //       <div className="interests-container">
    //         {interests.map((item, index) => {
    //           return (
    //             <div key={`interests-${index}`} className="interest">
    //               <div className="interest-icon-container">{item.icon}</div>
    //               <InfoSpan>{item.interest}</InfoSpan>
    //             </div>
    //           )
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </StyledContainer>
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
  }
`
