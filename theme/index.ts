import { extendTheme } from "@chakra-ui/react"
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"
import { createTransition } from "@utils"

const fonts = [
	"Inter",
	"ui-sans-serif",
	"system-ui",
	"-apple-system",
	"BlinkMacSystemFont",
	"Segoe UI",
	"Roboto",
	"Helvetica Neue",
	"Arial",
	"Noto Sans",
	"sans-serif",
	"Apple Color Emoji",
	"Segoe UI Emoji",
	"Segoe UI Symbol",
	"Noto Color Emoji",
].join(",")

const theme = extendTheme({
	styles: {
		global: (props: StyleFunctionProps) => ({
			html: {
				scrollBehavior: "smooth",
				bg: mode("white", "black")(props),
				fontFamily: fonts,
				transition: createTransition("background"),
			},
			body: {
				scrollBehavior: "smooth",
				bg: mode("white", "black")(props),
				color: mode("black", "white")(props),
				transition: createTransition(["background", "color"]),
			},
			"::-webkit-scrollbar-track": {
				background: mode("white", "black")(props),
			},
			"::-webkit-scrollbar-thumb": {
				background: mode("gray.400", "gray.700")(props),
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
		brand: "#035841",
		white: "#F5F5F5",
		black: "#111820",
		red: "#83171C",
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
	},
	fonts: {
		heading: fonts,
		body: fonts,
	},
	config: {
		initialColorMode: "light",
		useSystemColorMode: false,
	},
})

export default theme

export { default as Fonts } from "./fonts"
