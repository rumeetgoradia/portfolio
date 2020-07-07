import "bootstrap/dist/css/bootstrap.min.css"
import React, { memo } from "react"
import styled, { ThemeProvider } from "styled-components"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import "../styles/FontProvider.scss"
import { GlobalStyles } from "../styles/GlobalStyles"
import { darkTheme, lightTheme } from "../styles/Themes"
import { useDarkMode } from "../useDarkMode"
import ParticlesLayout from "./ParticlesLayout"
import SphereLayout from "./SphereLayout"

require("animate.css")

const LightGradient = memo(styled.div`
  display: block;
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100vh;
  background-color: ${lightTheme.body};
  background-image: ${lightTheme.gradient};
  transition: opacity 0.3s linear;
`)

const DarkGradient = memo(styled.div`
  display: block;
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100vh;
  background-color: ${darkTheme.body};
  background-image: ${darkTheme.gradient};
  transition: opacity 0.3s linear;
`)

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
        <Navbar theme={theme} toggleTheme={toggleTheme} atHome={atHome} />

        {atHome ? (
          <SphereLayout theme={theme} themeToggled={themeToggled}>
            {children}
          </SphereLayout>
        ) : (
          <>
            <LightGradient style={{ opacity: theme === "light" ? 1 : 0 }} />
            <DarkGradient style={{ opacity: theme === "light" ? 0 : 1 }} />
            <ParticlesLayout setThemeToggled={setThemeToggled}>
              {children}
            </ParticlesLayout>
          </>
        )}
        <Footer atHome={atHome} />
      </>
    </ThemeProvider>
  )
}
