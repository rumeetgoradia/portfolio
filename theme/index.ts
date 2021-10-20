import { extendTheme } from "@chakra-ui/react"
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"
import { createTransition } from "@utils"

const theme = extendTheme({
	config: {
		initialColorMode: "light",
		useSystemColorMode: false,
	},
	styles: {
		global: (props: StyleFunctionProps) => ({
			html: {
				scrollBehavior: "smooth",
				bg: mode("gray.50", "gray.900")(props),
				color: mode("gray.900", "gray.50")(props),
				transition: createTransition(["color", "background-color"]),
			},
			body: {
				scrollBehavior: "smooth",
				bg: mode("gray.50", "gray.900")(props),
				color: mode("gray.900", "gray.50")(props),
				transition: createTransition(["color", "background-color"]),
			},
			"::-webkit-scrollbar-track": {
				background: mode("gray.50", "gray.900")(props),
			},
			"::-webkit-scrollbar-thumb": {
				background: mode("gray.300", "gray.700")(props),
				border: "4px solid rgba(0, 0, 0, 0)",
				backgroundClip: "padding-box",
				borderRadius: "9999px",
			},
			"::-webkit-scrollbar": {
				width: "14px",
			},
		}),
	},
	colors: {
		brand: "rgb(52, 146, 110)",
		gray: {
			"50": "#f0f9ff",
			"100": "#e9f1fd",
			"200": "#dee7f3",
			"300": "#ced6e2",
			"400": "#aab2bd",
			"500": "#8a919c",
			"600": "#626974",
			"700": "#4f5660",
			"800": "#313841",
			"900": "#111820",
		},
		black: "#111820",
		white: "#f0f9ff",
	},
	fonts: {
		heading: "HeeboVariable",
		body: "HeeboVariable",
	},
})

export default theme
