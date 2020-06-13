import "./styles/about.scss"

import { Col, Container, Row } from "react-bootstrap"
import { InfoParagraph, InfoSpan } from "../components/styles/InfoContent"
import React, { useEffect, useState } from "react"

import Img from "gatsby-image"
import { InfoHeader } from "../components/styles/InfoHeader"
import InterestDisplay from "../components/InterestDisplay"
import SkillDisplay from "../components/SkillDisplay"
import { StyledContainer } from "../components/styles/StyledContainer"
import { graphql } from "gatsby"
import { interests } from "../assets/data/InterestsData"
import { skills } from "../assets/data/SkillsData"
import toolboxEntries from "../assets/data/ToolboxEntries.json"

// import AnimeSVG from "../assets/images/interests/anime.svg"

export default function About({ data }) {
  const profileImg = data.profileImg.childImageSharp.fluid
  const { edges: interestImgsData } = data.interestImgs

  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    // if (typeof window !== `undefined`) {
    //   const WOW = require("wowjs")
    //   new WOW.WOW({ live: false, mobile: false }).init()
    // }
    console.log("hello")
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
              className="mb-4 mb-lg-0 wow fadeIn"
              data-sal="fade"
              data-sal-easing="ease-out-quad"
              data-sal-duration="800"
            >
              <Img
                title="Rumeet Goradia"
                alt="Rumeet Goradia"
                className="profile-img"
                fluid={profileImg}
              />
            </Col>
            <Col xl={9} lg={8} md={12} className="wow fadeIn">
              <div
                data-sal="fade"
                data-sal-easing="ease-out-quad"
                data-sal-duration="800"
              >
                <InfoHeader>Who Am I?</InfoHeader>
              </div>
              <div
                data-sal="fade"
                data-sal-easing="ease-out-quad"
                data-sal-duration="800"
              >
                <InfoParagraph>
                  My name is Rumeet Goradia, and I am currently a rising senior
                  at the Rutgers University Honors College in New Brunswick, NJ.
                  I'm studying Computer Science and Business Analytics &
                  Information Technology. One day, I hope to be able to market
                  my own software and bring more technology into lower-income
                  communities. This coming summer, I'll be working at Schonfeld
                  Strategic Advisors in New York City as a Software Engineering
                  Intern. While I'm not studying or working, I'm at the gym,
                  hanging out with my friends, or working on personal projects
                  like this website.
                </InfoParagraph>
              </div>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col className="wow fadeIn">
              <div
                data-sal="fade"
                data-sal-easing="ease-out-quad"
                data-sal-duration="800"
              >
                <InfoHeader>My Skills</InfoHeader>
              </div>
              <Row lg={3} md={2} xs={1} id="skill-displays">
                {skills.map((skill, index) => {
                  return (
                    <Col
                      key={`skill-${index}`}
                      className="skill-display-container wow fadeIn"
                      // style={{
                      //   animationDelay: `${width >= 1200 ? index * 50 : 20}ms`,
                      // }}
                      data-sal="fade"
                      data-sal-delay={`${width >= 1200 ? index * 50 : 20}`}
                      data-sal-easing="ease-out-quad"
                      data-sal-duration="800"
                    >
                      <SkillDisplay skill={skill} />
                    </Col>
                  )
                })}
              </Row>
            </Col>
          </Row>
          <Row style={{ marginBottom: -10 }}>
            <Col>
              <div
                data-sal="fade"
                data-sal-easing="ease-out-quad"
                data-sal-duration="800"
              >
                <InfoHeader>My Interests</InfoHeader>
              </div>
              <Row lg={4} md={3} sm={2} xs={1} id="interest-displays">
                {interests.map((interest, index) => {
                  return (
                    <Col
                      key={`interest-${index}`}
                      className="interest-display-container wow fadeIn"
                      // style={{
                      //   animationDelay: `${width >= 1200 ? index * 50 : 20}ms`,
                      // }}
                      data-sal="fade"
                      data-sal-delay={`${width >= 1200 ? index * 50 : 20}`}
                      data-sal-easing="ease-out-quad"
                      data-sal-duration="800"
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
