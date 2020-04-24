import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light")
  const [componentMounted, setComponentMounted] = useState(false)
  const [themeToggled, setThemeToggled] = useState(false)
  const setMode = mode => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
    setThemeToggled(true)
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme)
      : setMode("light")
    setComponentMounted(true)
  }, [])

  return [theme, toggleTheme, componentMounted, themeToggled]
}
