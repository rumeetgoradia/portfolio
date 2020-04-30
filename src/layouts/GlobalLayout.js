import React from "react"
import { ThemeProvider } from "styled-components"
import NavLinks from "../components/NavLinks"
import Toggle from "../components/Toggle"
import { GlobalStyles } from "../styles/global"
import { darkTheme, lightTheme } from "../styles/themes"
import { useDarkMode } from "../useDarkMode"

export default function GlobalLayout({ children, location, navbar }) {
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

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { theme, themeToggled })
  )

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <NavLinks navbar={navbar} setThemeToggled={setThemeToggled} />

        <div id="gradient"></div>
        <div
          id="gradient-transition"
          style={{ display: themeToggled ? "block" : "none" }}
        ></div>
        {childrenWithProps}
        {/* <Transition location={location}>
          </Transition> */}
      </>
    </ThemeProvider>
  )
}
