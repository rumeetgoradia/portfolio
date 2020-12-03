import { Theme } from "@material-ui/core"
import { PaletteOptions } from "@material-ui/core/styles/createPalette"
import { TypographyOptions } from "@material-ui/core/styles/createTypography"
import { Overrides } from "@material-ui/core/styles/overrides"
import { ComponentsProps } from "@material-ui/core/styles/props"
import { css } from "styled-components"

export interface PortfolioTheme extends Theme {
	background: string
}

export const primaryColor: string = "rgb(52, 146, 110)"

export const commonPaletteOptions: PaletteOptions = {
	common: {
		black: "rgb(17, 24, 32)",
		white: "rgb(231, 231, 234)",
	},
	primary: {
		main: primaryColor,
	},
	error: {
		main: "rgb(187, 0, 0)",
	},
}

export const commonTypographyOptions: TypographyOptions = {
	fontFamily: ['"Rubik"', '"Helvetica"', "Arial", "sans-serif"].join(","),
}

export const commonPropsOptions: ComponentsProps = {
	MuiButton: {
		disableRipple: true,
		variant: "outlined",
		disableElevation: true,
	},
}

export const commonOverridesOptions: Overrides = {
	MuiTypography: {
		root: {
			transition: "color 300ms cubic-bezier(0.4,0,0.2,1) 0ms",
		},
	},
}

export const gradientBackgroundCss = css`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 4;
	transition: ${({ theme }: { theme: Theme }) =>
		theme.transitions.create("opacity")};
`
