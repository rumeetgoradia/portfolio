import { makeStyles } from "@material-ui/core"

interface NavLinksStyleProps {
	drawer: boolean | undefined
}

export const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		padding: `${theme.spacing(2)}px 0`,
	},
	navLinkContainer: {
		padding: `0 ${theme.spacing(1.5)}px`,
		margin: (props: NavLinksStyleProps) =>
			`${props.drawer ? `${theme.spacing(3)}px` : "0"} ${
				props.drawer ? "0" : `${theme.spacing(0.75)}px`
			}`,
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
		fontSize: (props: NavLinksStyleProps) =>
			props.drawer ? theme.typography.fontSize * 2 : theme.typography.fontSize,
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
		height: (props: NavLinksStyleProps) => (props.drawer ? 0 : 4),
		bottom: -2,
		backgroundColor: theme.palette.primary.main,
		transition: theme.transitions.create(["left", "width", "opacity"]),
	},
}))
