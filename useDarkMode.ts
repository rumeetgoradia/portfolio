import { useCallback, useEffect, useState } from "react"

export type ThemeString = "light" | "dark"

export const useDarkMode = (): [ThemeString, () => void, boolean] => {
	const [theme, setTheme] = useState<ThemeString>("light")
	const [componentMounted, setComponentMounted] = useState<boolean>(false)

	const setMode = useCallback((mode: ThemeString) => {
		window.localStorage.setItem("theme", mode)
		setTheme(mode)
	}, [])

	const toggleTheme = (): void => {
		if (theme === "light") {
			setMode("dark")
		} else {
			setMode("light")
		}
	}

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme") as ThemeString
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches &&
		!localTheme
			? setMode("dark")
			: localTheme
			? setTheme(localTheme)
			: setMode("light")
		setComponentMounted(true)
	}, [setMode])

	return [theme, toggleTheme, componentMounted]
}
