import React from "react"
import { ThemeProvider } from "styled-components"
import Sphere from "../components/Sphere"
import Toggle from "../components/Toggle"
import { GlobalStyles } from "../styles/global"
import "../styles/normalize.css"
import { darkTheme, lightTheme } from "../styles/themes"
import { useDarkMode } from "../useDarkMode"
import Intro from "../components/Intro"

export default function Index() {
  const [theme, toggleTheme, componentMounted] = useDarkMode()

  const themeMode = theme === "light" ? lightTheme : darkTheme

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Sphere theme={theme} />
        <Intro />
      </>
    </ThemeProvider>
  )
}
