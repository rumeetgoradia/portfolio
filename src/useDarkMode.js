import { useEffect, useState } from "react"

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light")
  const [componentMounted, setComponentMounted] = useState(false)
  const [themeToggled, setThemeToggled] = useState(false)
  const setMode = mode => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode)
    fadeOut()
  }

  const fadeOut = () => {
    const gradientTran = document.getElementById("gradient-transition")
    gradientTran.style.opacity = 1
    const fadeEffect = setInterval(function () {
      if (gradientTran.style.opacity > 0) {
        gradientTran.style.opacity -= 0.333333333333
      } else {
        clearInterval(fadeEffect)
      }
    }, 1)
  }

  const toggleTheme = () => {
    setThemeToggled(true)
    if (theme === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
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
  }, [setMode])

  return [theme, toggleTheme, componentMounted, themeToggled, setThemeToggled]
}
