import React, { useCallback, useState } from "react"
import { Col, Row } from "react-bootstrap"
// import "./styles/Navbar.scss"
import useWidth from "../../useWidth"
import NavbarBrand from "./NavbarBrand"
import NavbarCollapseToggler from "./NavbarCollapseToggler"
import NavbarContainer from "./NavbarContainer"
import NavbarLink from "./NavbarLink"
import NavbarLinksContainer from "./NavbarLinksContainer"
import ThemeToggler from "./ThemeToggler"

export default function Navbar({ theme, toggleTheme, atHome }) {
  const [open, setOpen] = useState(false)
  const width = useWidth()

  const toggleOpen = useCallback(() => {
    setOpen(!open)
  }, [])

  const closeOpen = useCallback(() => {
    setOpen(false)
  }, [])

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
          <NavbarLink
            to="/about"
            className={`navbar-link ${atHome ? " at-home" : ""} ${
              open ? "open-menu" : ""
            }`}
            activeClassName="active-nav-link"
            onClick={closeOpen}
          >
            About
          </NavbarLink>
          <NavbarLink
            to="/experience"
            className={`navbar-link ${atHome ? " at-home" : ""} ${
              open ? "open-menu" : ""
            }`}
            activeClassName="active-nav-link"
            onClick={closeOpen}
          >
            Experience
          </NavbarLink>
          <NavbarLink
            to="/projects"
            className={`navbar-link ${atHome ? " at-home" : ""} ${
              open ? "open-menu" : ""
            }`}
            activeClassName="active-nav-link"
            onClick={closeOpen}
          >
            Projects
          </NavbarLink>
          <NavbarLink
            to="/contact"
            className={`navbar-link ${atHome ? " at-home" : ""} ${
              open ? "open-menu" : ""
            }`}
            activeClassName="active-nav-link"
            onClick={closeOpen}
          >
            Contact
          </NavbarLink>
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
