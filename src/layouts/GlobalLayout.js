import React, { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import Toggle from "../components/Toggle"
import { GlobalStyles } from "../styles/global"
import { darkTheme, lightTheme } from "../styles/themes"
import { useDarkMode } from "../useDarkMode"
import NavLinks from "../components/NavLinks"

export default function GlobalLayout({ children, navbar }) {
  const [theme, toggleTheme, componentMounted, themeToggled] = useDarkMode()

  const themeMode = theme === "light" ? lightTheme : darkTheme

  useEffect(() => {
    console.log("NAVBAR ", navbar)
  }, [])

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
        <NavLinks navbar={navbar} />
        <div id="gradient"></div>
        <div
          id="gradient-transition"
          style={{ display: themeToggled ? "block" : "none" }}
        ></div>
        {childrenWithProps}
      </>
    </ThemeProvider>
  )
}
