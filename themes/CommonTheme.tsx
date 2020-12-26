import { Theme } from "@material-ui/core"
import { PaletteOptions } from "@material-ui/core/styles/createPalette"
import { TypographyOptions } from "@material-ui/core/styles/createTypography"
import { Overrides } from "@material-ui/core/styles/overrides"
import { ComponentsProps } from "@material-ui/core/styles/props"
import { ZIndexOptions } from "@material-ui/core/styles/zIndex"
import { css } from "styled-components"

export interface PortfolioTheme extends Theme {
	background: string
}

export const PRIMARY_COLOR: string = "rgb(52, 146, 110)"
export const BLACK: string = "rgb(17, 24, 32)"
export const WHITE: string = "rgb(231, 231, 234)"
export const ERROR: string = "rgb(206, 98, 98)"

export const commonPaletteOptions: PaletteOptions = {
	common: {
		black: BLACK,
		white: WHITE,
	},
	primary: {
		main: PRIMARY_COLOR,
	},
	error: {
		main: ERROR,
	},
}

export const commonTypographyOptions: TypographyOptions = {
	fontFamily: ['"Inter"', '"Helvetica"', "Arial", "sans-serif"].join(","),
	fontSize: 16,
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

export const commonZIndexOptions: ZIndexOptions = {
	appBar: 1400,
	drawer: 1399,
}

export const gradientBackgroundCss = css`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 4;
	transition: ${({ theme }: { theme: Theme }) =>
		theme.transitions.create("opacity")};
`
