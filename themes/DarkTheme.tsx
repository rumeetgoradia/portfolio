import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import styled from "styled-components"
import {
	commonOverridesOptions,
	commonPaletteOptions,
	commonPropsOptions,
	commonTypographyOptions,
	commonZIndexOptions,
	gradientBackgroundCss,
	PortfolioTheme,
} from "./CommonTheme"

export const darkMuiTheme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			...commonPaletteOptions,
			type: "dark",
			text: {
				primary: "rgb(231, 231, 234)",
			},
			background: {
				default: "rgb(17, 24, 32)",
				paper: "rgba(19, 26, 35, .65)",
			},
			action: {
				hover: "rgb(231, 231, 234)",
				focus: "rgb(231, 231, 234)",
				hoverOpacity: 1,
				focusOpacity: 1,
			},
		},
		typography: {
			...commonTypographyOptions,
		},
		props: {
			...commonPropsOptions,
			MuiPaper: {
				elevation: 0,
			},
		},
		overrides: {
			...commonOverridesOptions,
		},
		zIndex: {
			...commonZIndexOptions,
		},
	})
)

export const darkTheme: PortfolioTheme = {
	...darkMuiTheme,
	background: "linear-gradient(to bottom right, #111820, #0e131a, #0a0e13)",
}

export const DarkGradient = styled.div`
	${gradientBackgroundCss}
	background: ${darkTheme.background}
`
