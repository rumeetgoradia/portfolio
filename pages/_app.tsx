import { Button, CssBaseline } from "@material-ui/core"
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles"
import { DefaultSeo } from "next-seo"
import NextApp from "next/app"
import { useEffect } from "react"
import { ThemeProvider as SCThemeProvider } from "styled-components"
import ParticlesBackground from "../components/ParticlesBackground"
import SEO from "../next-seo.config"
import { DarkGradient, darkTheme } from "../themes/DarkTheme"
import { LightGradient, lightTheme } from "../themes/LightTheme"
import { useDarkMode } from "../useDarkMode"

const App: React.FC = ({ children }) => {
	const [theme, toggleTheme, componentMounted] = useDarkMode()
	const themeMode = theme === "light" ? lightTheme : darkTheme

	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles && jssStyles.parentNode)
			jssStyles.parentNode.removeChild(jssStyles)
	}, [])

	if (!componentMounted) {
		return (
			<>
				<DefaultSeo {...SEO} />
				<div style={{ display: "none" }}>{children}</div>
			</>
		)
	}

	return (
		<>
			<DefaultSeo {...SEO} />
			<MaterialThemeProvider theme={themeMode}>
				<CssBaseline />
				<SCThemeProvider theme={themeMode}>
					<LightGradient style={{ opacity: theme === "light" ? 1 : 0 }} />
					<DarkGradient style={{ opacity: theme === "dark" ? 1 : 0 }} />
					<ParticlesBackground />
					<Button
						onClick={toggleTheme}
						style={{
							zIndex: 99999999999,
							top: "50%",
							left: "50%",
							position: "absolute",
						}}
					>
						HERE
					</Button>
					{children}
				</SCThemeProvider>
			</MaterialThemeProvider>
		</>
	)
}
export default class InheritedApp extends NextApp {
	render() {
		const { Component, pageProps } = this.props

		return (
			<App>
				<Component {...pageProps} />
			</App>
		)
	}
}
