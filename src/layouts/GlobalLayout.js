import React, { useState } from "react"
import { darkTheme, lightTheme } from "../styles/themes"

import { GlobalStyles } from "../styles/global"
import NavLinks from "../components/Navbar"
import ParticlesLayout from "./ParticlesLayout"
import SphereLayout from "./SphereLayout"
import { ThemeProvider } from "styled-components"
import Toggle from "../components/Toggle"
import { useDarkMode } from "../useDarkMode"

export default function GlobalLayout({ children, atHome }) {
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
        <NavLinks theme={theme} toggleTheme={toggleTheme} atHome={atHome} />
        <div id="gradient"></div>
        <div
          id="gradient-transition"
          style={{ display: themeToggled ? "block" : "none" }}
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
      </>
    </ThemeProvider>
  )
}
