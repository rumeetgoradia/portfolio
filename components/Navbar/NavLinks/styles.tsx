import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		padding: `${theme.spacing(2)}px 0`,
	},
	navLinkContainer: {
		padding: `0 ${theme.spacing(1.5)}px`,
		margin: `0 ${theme.spacing(0.75)}px`,
		textAlign: "center",
	},
	navLink: {
		fontWeight: 300,
		textTransform: "uppercase",
		color: theme.palette.text.primary,
		letterSpacing: 2,
		padding: `0 ${theme.spacing(0.5) - 2}px 0 ${theme.spacing(0.5)}px`,
		cursor: "pointer",
		lineHeight: 1,
		transition: theme.transitions.create(["text-shadow"]),
		"&:hover, &:focus": {
			textShadow: `0 0 6px ${theme.palette.text.primary}`,
		},
		"&.active": {
			color: theme.palette.primary.main,
			textShadow: `0 0 6px ${theme.palette.primary.main}`,
		},
	},
	underline: {
		position: "absolute",
		height: 4,
		bottom: -2,
		backgroundColor: theme.palette.primary.main,
		transition: theme.transitions.create(["left", "width", "opacity"]),
	},
}))
