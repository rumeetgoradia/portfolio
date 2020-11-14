import { CssBaseline } from "@material-ui/core"
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles"
import { DefaultSeo } from "next-seo"
import NextApp from "next/app"
import { ThemeProvider as SCThemeProvider } from "styled-components"
import SEO from "../next-seo.config"
import theme from "../theme"

export default class App extends NextApp {
	componentDidMount() {
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles && jssStyles.parentNode)
			jssStyles.parentNode.removeChild(jssStyles)
	}

	render() {
		const { Component, pageProps } = this.props

		return (
			<>
				<DefaultSeo {...SEO} />
				<MaterialThemeProvider theme={theme}>
					<CssBaseline />
					<SCThemeProvider theme={theme}>
						<Component {...pageProps} />
					</SCThemeProvider>
				</MaterialThemeProvider>
			</>
		)
	}
}
