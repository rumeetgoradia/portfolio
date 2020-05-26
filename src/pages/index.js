import React from "react"
import Intro from "../components/Intro"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Index() {
  // const [theme, toggleTheme, componentMounted, themeToggled] = useDarkMode()

  // const themeMode = theme === "light" ? lightTheme : darkTheme

  // if (!componentMounted) {
  //   return <div />
  // }

  return (
    // <ThemeProvider theme={themeMode}>
    //   <>
    //     <GlobalStyles />
    //     <Toggle theme={theme} toggleTheme={toggleTheme} />
    //     <Sphere theme={theme} themeToggled={themeToggled}/>
    <Intro />
    //   {/* </>
    // </ThemeProvider> */}
  )
}
