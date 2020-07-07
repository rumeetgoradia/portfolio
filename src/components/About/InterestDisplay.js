import Img from "gatsby-image/withIEPolyfill"
import PropTypes from "prop-types"
import React, { memo } from "react"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
// import "./styles/InterestDisplay.scss"

const InterestIcon = styled.div`
  position: absolute;
  z-index: 49;
  top: 50%;
  left: 50%;
  height: 90%;
  width: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: ${({ theme }) => theme.fontRGBA + ".2)"};
    height: 100%;
    width: auto;
    transition: fill 0.3s linear, opacity 0.3s linear, height 0.3s linear;
    &.smaller {
      height: 85%;
    }
  }
`

const InterestOverlay = styled.div`
  position: absolute;
  z-index: 48;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: ${({ theme }) => theme.bodyRGBA + ".45)"};
  transition: background-color 0.3s linear, opacity 0.3s linear;
`

const InterestImgContainer = styled.div`
  position: absolute;
  z-index: 47;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s linear;
  .interest-img {
    height: 100%;
  }
`

const InterestDisplayContainer = styled(Container)`
  border-radius: 8px;
  border: solid 1px rgba(160, 160, 160, 0.3);
  margin-bottom: 10px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: relative;
  text-align: center;
  overflow: hidden;
  transition: border-color 0.3s linear;
  .interest-title {
    opacity: 0.85;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: -5px;
    position: relative;
    z-index: 50;
    color: ${({ theme }) => theme.font};
    transition: color 0.3s linear, opacity 0.3s linear, text-shadow 0.3s linear;
  }
  &:hover {
    border-color: rgba(160, 160, 160, 0.8);
    div${InterestIcon} svg {
      fill: var(--green);
      opacity: 0;
      height: 200% !important;
    }
    .interest-title,
    div${InterestOverlay}, div${InterestImgContainer} {
      opacity: 1;
    }
    .interest-title {
      text-shadow: ${({ theme }) => "1px 1px 3px " + theme.fontRGBA + ".35)"};
    }
  }
`

function InterestDisplay({ interest, picSizes }) {
  return (
    <InterestDisplayContainer fluid>
      <Row>
        <Col className="interest-title">{interest.title}</Col>
      </Row>
      <InterestIcon>{interest.icon}</InterestIcon>
      <InterestOverlay />
      <InterestImgContainer>
        <Img
          title={interest.title}
          alt={interest.title}
          sizes={picSizes}
          className="interest-img"
        />
      </InterestImgContainer>
    </InterestDisplayContainer>
  )
}

export default memo(InterestDisplay)

InterestDisplay.propTypes = {
  interest: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }),
}
