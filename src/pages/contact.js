import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import * as yup from "yup"
import { InfoParagraph, InlineLink } from "../components/styles/InfoContent"
import { InfoHeader } from "../components/styles/InfoHeader"
import { StyledContainer } from "../components/styles/StyledContainer"

const validationSchema = yup.object({
  name: yup.string().required("Please enter your name."),
  email: yup
    .string()
    .required("Please enter your email.")
    .email("Please enter a valid email."),
  message: yup.string().required("Please enter a message."),
})

export default function Contact() {
  return (
    <Container fluid className="fluid-container">
      <StyledContainer>
        <Row className="mb-4">
          <Col className="animate__animated animate__fadeIn">
            <InfoHeader>Contact Me</InfoHeader>
            <InfoParagraph>
              For any inquiries or comments, please feel free to reach out to me
              via email at{" "}
              <InlineLink href="mailto:rumeet.goradia@gmail.com">
                rumeet.goradia@gmail.com
              </InlineLink>
              . I can also be reached through the form below.
            </InfoParagraph>
          </Col>
        </Row>
      </StyledContainer>
    </Container>
  )
}
