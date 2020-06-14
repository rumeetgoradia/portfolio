import "./styles/Navbar.scss"

import { Col, Container, Row } from "react-bootstrap"
import React, { useState } from "react"

import { Link } from "gatsby"
import { NavLink } from "./styles/NavLink"
import Toggle from "./Toggle"

export default function Navbar({ theme, toggleTheme, atHome }) {
  const [open, setOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleToggle = expanded => {
    if (expanded) {
      setScrollPosition(window.scrollY)
    } else {
      window.scrollTo(0, scrollPosition)
    }
    setOpen(expanded)
  }

  const closeNav = () => {
    handleToggle(false)
    window.scrollTo(0, 0)
  }

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <Container
      fluid
      id="navbar"
      className={`${atHome ? "at-home" : ""} ${
        open ? "open" : ""
      } animate__animated animate__slideInDown`}
      style={{ animationDelay: `${atHome ? 300 : 20}ms` }}
    >
      <Row id="navbar-content">
        <Col xs={1} id="navbar-brand-container">
          <Link
            to="/"
            id="navbar-brand"
            onClick={() => {
              setOpen(false)
            }}
          >
            RG
          </Link>
        </Col>
        {/* BREAKPOINT is 710px  */}
        <Col
          xs={1}
          id="navbar-toggler"
          className={`${open ? "" : "collapsed"}`}
          onClick={toggleOpen}
        >
          <div id="toggler-icon"></div>
        </Col>
        <Col
          id="nav-links-container"
          className={`${atHome ? "at-home" : ""} ${open ? "show" : ""}`}
        >
          <div id="nav-links">
            <NavLink
              to="/about"
              className={`navbar-link ${atHome ? " at-home" : ""} ${
                open ? "open-menu" : ""
              }`}
              activeClassName="active-nav-link"
              onClick={() => {
                setOpen(false)
              }}
            >
              About
            </NavLink>
            <NavLink
              to="/experience"
              className={`navbar-link ${atHome ? " at-home" : ""} ${
                open ? "open-menu" : ""
              }`}
              activeClassName="active-nav-link"
              onClick={() => {
                setOpen(false)
              }}
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={`navbar-link ${atHome ? " at-home" : ""} ${
                open ? "open-menu" : ""
              }`}
              activeClassName="active-nav-link"
              onClick={() => {
                setOpen(false)
              }}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={`navbar-link ${atHome ? " at-home" : ""} ${
                open ? "open-menu" : ""
              }`}
              activeClassName="active-nav-link"
              onClick={() => {
                setOpen(false)
              }}
            >
              Contact
            </NavLink>
          </div>
        </Col>
        <Col xs={1} id="navbar-toggle-container">
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </Col>
      </Row>
    </Container>
  )
}
