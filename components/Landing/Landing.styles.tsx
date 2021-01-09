import { makeStyles } from "@material-ui/core"

export const useLandingStyles = makeStyles(() => ({
	root: {
		position: "relative",
		zIndex: 5,
	},
	title: {
		fontSize: "calc(5vw + 1rem)",
		fontWeight: 600,
		textTransform: "uppercase",
		letterSpacing: 2,
		marginRight: -2,
	},
	subtitle: {
		fontStyle: "italic",
		fontWeight: 200,
		fontSize: "calc(2vw + 1rem)",
		userSelect: "none",
	},
	typedSubtitle: {
		fontWeight: 400,
	},
}))
