import { extendTheme } from "@chakra-ui/react"
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"
import { createTransition } from "@utils"
import { components } from "./components/index"

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
				transition: createTransition(["background"]),
			},
			":root": {
				"--bg-color": mode(
					"var(--chakra-colors-white)",
					"var(--chakra-colors-black)"
				)(props),
				"--text-color": mode(
					"var(--chakra-colors-black)",
					"var(--chakra-colors-white)"
				)(props),
				"--text-opacity": mode(0.8, 0.7)(props),
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
		error: "#83171C",
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
	textStyles: {
		header: {
			fontSize: { base: "3xl", sm: "4xl", md: "5xl" },
			fontWeight: 700,
			letterSpacing: -1,
			lineHeight: { base: "2.25rem", md: 1 },
			mb: 4,
			transition: createTransition("color"),
		},
		subheader: {
			fontSize: { base: "2xl", md: "3xl" },
			fontWeight: 600,
			letterSpacing: -1,
			lineHeight: { base: "2rem", md: "2.5rem" },
			mb: 4,
			transition: createTransition("color"),
		},
		paragraph: {
			opacity: "var(--text-opacity)",
			transition: createTransition("color"),
		},
	},
	components,
})

export default theme

export { default as Fonts } from "./fonts"
