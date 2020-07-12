import React, { memo } from "react"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import { contactLinks } from "../../assets/data/ContactLinksData"
// import "./styles/Footer.scss"

const StyledFooter = styled.footer`
  width: 100%;
  overflow-y: hidden;
  z-index: 998;
  left: 0;
  position: relative;
  background-color: ${({ theme }) => theme.bodyRGBA + ".85)"};
  border-top: 1px solid ${({ theme }) => theme.font};
  backdrop-filter: saturate(180%) blur(5px);
  transition: background-color 0.3s linear, border-color 0.3s linear,
    backdrop-filter 0.3s linear;
  &.at-home {
    position: fixed;
    bottom: 0;
    height: 80px;
    display: flex;
    align-items: center;
    border-color: transparent;
    background-color: transparent;
    backdrop-filter: none;
  }
`

const ContactLinkContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  margin: 0 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  .contact-link {
    opacity: 0.85;
    font-size: 1.25rem;
    text-decoration: none;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.body};
    transition: color 0.3s linear, background-color 0.3s linear,
      text-shadow 0.3s linear, box-shadow 0.3s linear, opacity 0.3s linear,
      transform 0.3s linear;
    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.navLinkShadow};
      text-shadow: 0px 0px 4px var(--green);
      color: var(--green);
      opacity: 1;
    }
    &:active {
      transform: scale(0.95);
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0 0.5rem;
    .contact-link {
      font-size: 1rem;
      padding: 6px;
    }
  }
`

function Footer({ atHome }) {
  return (
    <StyledFooter
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
              <ContactLinkContainer key={`contact-${index}`}>
                <a
                  href={item.url}
                  title={item.title}
                  className="contact-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              </ContactLinkContainer>
            )
          })}
        </Row>
      </Container>
    </StyledFooter>
  )
}

export default memo(Footer)
