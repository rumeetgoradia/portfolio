import "./styles/Footer.scss"

import { Col, Container, Row } from "react-bootstrap"

import React from "react"
import { socialMedia } from "../assets/data/SocialMediaData"

export default function Footer({ atHome }) {
  return (
    <footer id="footer" className={`${atHome ? "at-home" : ""}`}>
      <Container fluid>
        <Row className="align-items-center justify-content-center">
          {socialMedia.map((item, index) => {
            return (
              <Col
                className="social-media-link-container"
                key={`social-media-${index}`}
              >
                <a
                  href={item.url}
                  title={item.title}
                  className="social-media-link"
                >
                  {item.icon}
                </a>
              </Col>
            )
          })}
        </Row>
      </Container>
    </footer>
  )
}
