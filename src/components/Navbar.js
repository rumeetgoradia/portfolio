import "./styles/Navbar.scss"

import { Col, Container, Row } from "react-bootstrap"
import React, { useState } from "react"

import { Link } from "gatsby"
import { NavLink } from "./styles/NavLink"
import Toggle from "./Toggle"

export default function NavLinks({ theme, toggleTheme, atHome }) {
  const [open, setOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleToggle = expanded => {
    // console.log("expanded ", expanded)
    if (expanded) {
      setScrollPosition(window.scrollY)
      // document.getElementById("body").classList.add("hide-overflow")
    } else {
      // document.getElementById("body").classList.remove("hide-overflow")
      window.scrollTo(0, scrollPosition)
    }
    setOpen(expanded)
  }

  const closeNav = () => {
    handleToggle(false)
    window.scrollTo(0, 0)
  }

  return (
    // <Navbar
    //   expand="md"
    //   id="navbar"
    //   className={`${atHome ? " at-home" : ""}`}
    //   expanded={open}
    //   onToggle={handleToggle}
    // >
    //   <div id="navbar-brand-container">
    //     <Link
    //       to="/"
    //       id="navbar-brand"
    //       onClick={() => {
    //         window.scrollTo(0, 0)
    //       }}
    //     >
    //       RG
    //     </Link>
    //   </div>
    //   <Navbar.Toggle
    //     aria-controls="nav-links-container"
    //     id="navbar-toggler"
    //     className="m-auto"
    //   >
    //     {/* <div id="toggler-icon"></div> */}
    //   </Navbar.Toggle>
    //   <Navbar.Collapse id="nav-links-container">
    //     <Nav id="nav-links">
    //       <NavLink
    //         to="/about"
    //         activeClassName="active-nav-link"
    //         className={`navbar-link ${atHome ? " at-home" : ""}`}
    //         onClick={closeNav}
    //       >
    //         About
    //       </NavLink>
    //       <NavLink
    //         to="/experience"
    //         activeClassName="active-nav-link"
    //         className={`navbar-link ${atHome ? " at-home" : ""}`}
    //         onClick={closeNav}
    //       >
    //         Experience
    //       </NavLink>
    //       <NavLink
    //         to="/projects"
    //         activeClassName="active-nav-link"
    //         className={`navbar-link ${atHome ? " at-home" : ""}`}
    //         onClick={closeNav}
    //       >
    //         Projects
    //       </NavLink>
    //       <NavLink
    //         to="/"
    //         className={`navbar-link ${atHome ? " at-home" : ""}`}
    //         onClick={closeNav}
    //       >
    //         Resume
    //       </NavLink>
    //     </Nav>
    //   </Navbar.Collapse>
    //   <div id="navbar-toggle-container ml-auto">
    //     <Toggle theme={theme} toggleTheme={toggleTheme} />
    //   </div>
    // </Navbar>
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
