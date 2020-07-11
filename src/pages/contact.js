import { Field, Form, Formik, useField } from "formik"
import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import * as yup from "yup"
import { contactLinks } from "../assets/data/ContactLinksData"
import { LabeledTextArea, LabeledTextInput } from "../components/Inputs"
import {
  BorderedAnchor,
  BorderedButton,
} from "../components/styles/BorderedAction"
import InfoParagraph from "../components/styles/InfoParagraph"
// import InlineLink from "../components/styles/InlineLink"
import StyledContainer from "../components/styles/StyledContainer"

// const InlineLink = styled.a`
//   color: ${({ theme }) => theme.fontRGBA + ".65)"};
//   font-size: 1rem;
//   margin: 0;
//   font-weight: 400;
//   line-height: 1.4;
//   position: relative;
//   text-decoration: none;
//   transition: color 0.3s linear;
//   &:after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 50%;
//     width: 0;
//     height: 1px;
//     background-color: ${({ theme }) => theme.fontRGBA + ".95)"};
//     transform: translateX(-50%);
//     transition: width 0.3s linear;
//   }
//   &:hover,
//   &:focus {
//     text-decoration: none;
//     color: ${({ theme }) => theme.fontRGBA + ".95)"};
//     &:after {
//       width: 100%;
//     }
//   }
//   @media screen and (min-width: 768px) {
//     font-size: 1.25rem;
//   }
// `

const ContactLinkIconContainer = styled.span`
  position: absolute;
  z-index: 89;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  /* padding-right: 50%; */
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: ${({ theme }) => theme.fontRGBA + ".15)"};
    height: 80%;
    width: auto;
    transition: height 0.3s linear, opacity 0.3s linear, fill 0.3s linear;
  }
  &:hover {
    svg {
      fill: var(--green);
      height: 120%;
      opacity: 0;
    }
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const validationSchema = yup.object({
  name: yup.string().required("Please enter your name."),
  email: yup
    .string()
    .required("Please enter your email.")
    .email("Please enter a valid email."),
  phone: yup.string().matches(/^[0-9]*$/, "Please enter a valid phone number."),
  message: yup.string().required("Please enter a message."),
})

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ""
  return <LabeledTextInput label={label} errorText={errorText} {...field} />
}

const TextAreaField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ""
  return <LabeledTextArea label={label} errorText={errorText} {...field} />
}

export default function Contact() {
  const [success, setSuccess] = useState(false)
  return (
    <Container
      fluid
      className="fluid-container"
      style={{ minHeight: "calc(100vh-56px)" }}
    >
      <StyledContainer>
        <Row style={{ margin: "0 -8px 4px" }}>
          {contactLinks.map((contactLink, index) => {
            return (
              <Col
                key={`contact-link-${index}`}
                className="animate__animated animate__fadeIn"
                style={{
                  padding: "0 8px",
                  marginBottom: 16,
                  animationDelay: `${index * 50}ms`,
                }}
                xs={12}
                sm={6}
              >
                <BorderedAnchor
                  target="_blank"
                  rel="noopener noreferrer"
                  href={contactLink.url}
                  title={contactLink.title}
                >
                  <ContactLinkIconContainer>
                    {contactLink.icon}
                  </ContactLinkIconContainer>
                  {contactLink.title}
                </BorderedAnchor>
              </Col>
            )
          })}
        </Row>
        <Formik
          initialValues={{
            "bot-field": "",
            "form-name": "contact-form",
            name: "",
            email: "",
            phone: "",
            message: "",
          }}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            fetch("/", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: encode({ ...data }),
            })
              .then(() => {
                setSuccess(true)
                setSubmitting(false)
                resetForm()
              })
              .catch(error => {
                setSuccess(false)
                alert(
                  "There was an issue when submitting your form. Please try again later!"
                )
              })
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => {
            return (
              <Form
                id="contact-form"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <Field type="hidden" name="bot-field" />
                <Field type="hidden" name="form-name" />
                <Row
                  style={{ margin: "0 -8px" }}
                  className="animate__animated animate__fadeIn"
                >
                  <Col xs={12} className="mb-4" style={{ padding: "0 8px" }}>
                    <TextField name="name" type="input" label="Name" />
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                    className="mb-4"
                    style={{ padding: "0 8px" }}
                  >
                    <TextField
                      name="email"
                      type="input"
                      label="Email Address"
                    />
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                    className="mb-4"
                    style={{ padding: "0 8px" }}
                  >
                    <TextField name="phone" type="input" label="Phone Number" />
                  </Col>
                  <Col xs={12} className="mb-4" style={{ padding: "0 8px" }}>
                    <TextAreaField
                      name="message"
                      type="input"
                      label="Message"
                    />
                  </Col>
                  <Col xs={12} style={{ padding: "0 8px" }}>
                    <BorderedButton
                      onClick={() => setSuccess(false)}
                      type="submit"
                      disabled={isSubmitting}
                      id="submit-button"
                      style={{ fontSize: "1rem" }}
                    >
                      Submit
                    </BorderedButton>
                  </Col>
                  {success ? (
                    <Col className="mt-3">
                      <InfoParagraph
                        style={{
                          color: "#53a653",
                          margin: 0,
                          textAlign: "center",
                          fontSize: "1rem",
                        }}
                      >
                        Thank you for reaching out! I will try to contact you as
                        soon as possible regarding your message.
                      </InfoParagraph>
                    </Col>
                  ) : null}
                </Row>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </Form>
            )
          }}
        </Formik>
      </StyledContainer>
    </Container>
  )
}
