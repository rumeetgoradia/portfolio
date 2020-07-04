import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { contactLinks } from "../assets/data/ContactLinksData"
import "./styles/Footer.scss"

export default function Footer({ atHome }) {
  return (
    <footer
      id="footer"
      className={`${atHome ? "at-home" : ""}`}
      style={{ animationDelay: `${atHome ? 300 : 0}ms` }}
    >
      <Container
        fluid
        className="animate__animated animate__slideInUp"
        style={{ animationDelay: `${atHome ? 300 : 0}ms` }}
      >
        <Row className="align-items-center justify-content-center">
          {contactLinks.map((item, index) => {
            return (
              <Col className="contact-link-container" key={`contact-${index}`}>
                <a
                  href={item.url}
                  title={item.title}
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
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
