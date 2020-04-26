import React from "react"
import { ThemeProvider } from "styled-components"
import Toggle from "../components/Toggle"
import { GlobalStyles } from "../styles/global"
import { darkTheme, lightTheme } from "../styles/themes"
import { useDarkMode } from "../useDarkMode"

export default function GlobalLayout({ children }) {
  const [theme, toggleTheme, componentMounted, themeToggled] = useDarkMode()

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
