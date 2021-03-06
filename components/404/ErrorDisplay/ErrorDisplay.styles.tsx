import { makeStyles } from "@material-ui/core"

export const useErrorDisplayStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		zIndex: 5,
	},
	title: {
		fontSize: "calc(5vw + 1rem)",
		fontWeight: 600,
		textTransform: "uppercase",
		letterSpacing: 2,
		marginBottom: theme.spacing(1),
	},
	subtitle: {
		fontWeight: 200,
		fontSize: "calc(2vw + 1rem)",
		userSelect: "none",
		marginBottom: theme.spacing(6),
	},
}))
