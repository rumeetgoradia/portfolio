import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: "left",
	},
	header: {
		textTransform: "uppercase",
		fontWeight: 600,
		letterSpacing: 2,
		fontSize: theme.typography.fontSize * 1.25,
		marginBottom: theme.spacing(1),
	},
	divider: {
		border: `1px solid ${theme.palette.text.primary}`,
		width: 30,
		margin: `0 0 ${theme.spacing(1.5)}px`,
		transition: theme.transitions.create(["border-color"]),
	},
}))
