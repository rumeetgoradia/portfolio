import { makeStyles } from "@material-ui/core"

export const useLandingStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		zIndex: 5,
		// padding: theme.spacing(2),
	},
	title: {
		fontSize: "calc(5vw + 1rem)",
		fontWeight: 600,
		textTransform: "uppercase",
		letterSpacing: 2,
		marginBottom: theme.spacing(1),
	},
	subtitle: {
		fontStyle: "italic",
		fontWeight: 200,
		fontSize: "calc(2vw + 0.75rem)",
		userSelect: "none",
		display: "none",
		// [theme.breakpoints.up("md")]: {
		// 	display: "block",
		// },
	},
	typedSubtitle: {
		fontWeight: 400,
	},
}))
