import "./styles/Navbar.scss"

import { Col, Container, Row } from "react-bootstrap"

import { Link } from "gatsby"
import { NavLink } from "./styles/NavLink"
import React from "react"
import Toggle from "./Toggle"

export default function NavLinks({
  theme,
  toggleTheme,
  setThemeToggled,
  atHome,
}) {
  return (
    <Container fluid id="navbar" className={`${atHome ? " at-home" : ""}`}>
      <Row id="navbar-content">
        <Col xs={1} id="navbar-brand-container">
          <Link to="/" id="navbar-brand">
            RG
          </Link>
        </Col>
        {/* BREAKPOINT is 710px  */}
        <Col xs={9} id="nav-links-container">
          <div id="nav-links">
            <NavLink
              to="/about"
              className={`navbar-link ${atHome ? " at-home" : ""}`}
              activeClassName="active-nav-link"
            >
              About
            </NavLink>
            <NavLink
              to="/experience"
              className={`navbar-link ${atHome ? " at-home" : ""}`}
              activeClassName="active-nav-link"
            >
              Experience
            </NavLink>
            <NavLink
              to="/projects"
              className={`navbar-link ${atHome ? " at-home" : ""}`}
              activeClassName="active-nav-link"
            >
              Projects
            </NavLink>
            <NavLink
              to="/"
              className={`navbar-link ${atHome ? " at-home" : ""}`}
            >
              Resume
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
