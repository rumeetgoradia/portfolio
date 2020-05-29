import "bootstrap/dist/css/bootstrap.min.css"

import React, { useEffect, useState } from "react"
import { darkTheme, lightTheme } from "../styles/Themes"

import Footer from "../components/Footer"
import { GlobalStyles } from "../styles/GlobalTheme"
import Navbar from "../components/Navbar"
import ParticlesLayout from "./ParticlesLayout"
import SphereLayout from "./SphereLayout"
import { ThemeProvider } from "styled-components"
import { useDarkMode } from "../useDarkMode"

// import WOW from "wowjs"

export default function GlobalLayout({ children, atHome }) {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      const WOW = require("wowjs")
      new WOW.WOW({ live: false, mobile: false }).init()
    }
  }, [])

  const [
    theme,
    toggleTheme,
    componentMounted,
    themeToggled,
    setThemeToggled,
  ] = useDarkMode()

  const themeMode = theme === "light" ? lightTheme : darkTheme

  if (!componentMounted) {
    return <div style={{ display: "none" }}>{children}</div>
  }

  return (
    <ThemeProvider theme={themeMode} id="body">
      <>
        <GlobalStyles />
        <Navbar theme={theme} toggleTheme={toggleTheme} atHome={atHome} />
        <div id="gradient"></div>
        <div
          id="gradient-transition"
          style={{
            display: themeToggled ? "block" : "none",
          }}
        ></div>
        {atHome ? (
          <SphereLayout theme={theme} themeToggled={themeToggled}>
            {children}
          </SphereLayout>
        ) : (
          <ParticlesLayout setThemeToggled={setThemeToggled}>
            {children}
          </ParticlesLayout>
        )}
        <Footer atHome={atHome} />
      </>
    </ThemeProvider>
  )
}
