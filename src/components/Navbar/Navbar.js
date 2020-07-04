import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import NavbarBrand from "./NavbarBrand"
import NavbarCollapseToggler from "./NavbarCollapseToggler"
import NavbarContainer from "./NavbarContainer"
import NavbarLinksContainer from "./NavbarLinksContainer"
// import "./styles/Navbar.scss"
import { NavLink } from "./NavLink"
import ThemeToggler from "./ThemeToggler"

export default function Navbar({ theme, toggleTheme, atHome }) {
  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    window.addEventListener("resize", updateWidth)
    return () => {
      window.removeEventListener("resize", updateWidth)
    }
  }, [])

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  // const handleToggle = expanded => {
  //   if (expanded) {
  //     setScrollPosition(window.scrollY)
  //   } else {
  //     window.scrollTo(0, scrollPosition)
  //   }
  //   setOpen(expanded)
  // }

  // const closeNav = () => {
  //   handleToggle(false)
  //   window.scrollTo(0, 0)
  // }

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <NavbarContainer
      className={`${atHome ? "at-home" : ""} ${
        open ? "open" : ""
      } animate__animated animate__slideInDown`}
      style={{ animationDelay: `${atHome ? 300 : 20}ms` }}
    >
      <Row className="d-flex h-100 align-items-center justify-content-between">
        <Col
          xs={1}
          className="d-flex align-items-center text-center justify-content-center h-100"
          style={{ minWidth: 59 }}
        >
          <NavbarBrand atHome={atHome} open={open} setOpen={setOpen}>
            RG
          </NavbarBrand>
        </Col>
        {/* BREAKPOINT is 710px  */}
        <Col
          xs={1}
          className="align-items-center text-center justify-content-center h-100"
          style={{ display: width > 768 ? "none" : "flex" }}
        >
          <NavbarCollapseToggler open={open} toggleOpen={toggleOpen} />
        </Col>

        <NavbarLinksContainer atHome={atHome} open={open} className="col">
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
        </NavbarLinksContainer>

        <Col
          xs={1}
          className="d-flex align-items-center text-center justify-content-center h-100"
          style={{ minWidth: 65 }}
        >
          <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
        </Col>
      </Row>
    </NavbarContainer>
  )
}
