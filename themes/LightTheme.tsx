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

export const lightMuiTheme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			...commonPaletteOptions,
			type: "light",
			text: {
				primary: "rgb(17, 24, 32)",
			},
			background: {
				default: "rgb(231, 231, 234)",
				paper: "rgba(227, 227, 229, .65)",
			},
			action: {
				hover: "rgb(17, 24, 32)",
				focus: "rgb(17, 24, 32)",
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
				elevation: 4,
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

export const lightTheme: PortfolioTheme = {
	...lightMuiTheme,
	background: "linear-gradient(to bottom right, #dddde1, #e7e7ea, #f1f1f3)",
}

export const LightGradient = styled.div`
	${gradientBackgroundCss}
	background: ${lightTheme.background}
`
