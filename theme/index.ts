import { extendTheme } from "@chakra-ui/react"

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
	colors: {
		brand: "#035841",
		white: "#F5F5F5",
		black: "#111820",
		red: "#83171C",
	},
	fonts: {
		heading: fonts,
		body: fonts,
	},
})

export default theme

export { default as Fonts } from "./fonts"
