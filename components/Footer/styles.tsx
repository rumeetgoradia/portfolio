import { fade, makeStyles } from "@material-ui/core"

interface FooterStyleProps {
	onSubPage: boolean
}

export const useStyles = makeStyles((theme) => ({
	root: {
		position: (props: FooterStyleProps) =>
			props.onSubPage ? "relative" : "absolute",
		width: "100%",
		bottom: 0,
		left: 0,
		zIndex: 1299,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: (props: FooterStyleProps) => (props.onSubPage ? 62 : 89),
		backgroundColor: (props: FooterStyleProps) =>
			props.onSubPage
				? fade(theme.palette.background.default, 0.55)
				: "transparent",
		backdropFilter: (props: FooterStyleProps) =>
			props.onSubPage ? "saturate(180%) blur(5px)" : "",
		borderTop: (props: FooterStyleProps) =>
			`1px solid ${
				props.onSubPage ? theme.palette.text.primary : "transparent"
			}`,
		transition: theme.transitions.create([
			"background-color",
			"backdrop-filter",
			"border-color",
			"height",
		]),
	},
	footerLink: {
		padding: theme.spacing(1.5),
		opacity: 0.85,
		backgroundColor: theme.palette.text.primary,
		color: theme.palette.background.default,
		fontSize: theme.typography.fontSize * 1.25,
		borderRadius: "50%",
		margin: `0 ${theme.spacing(1)}px`,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		transition: theme.transitions.create([
			"background-color",
			"opacity",
			"color",
			"transform",
			"box-shadow",
		]),
		"&:hover, &:focus": {
			transform: "scale(1.1)",
			opacity: 1,
			color: theme.palette.primary.main,
			boxShadow: `0 0 6px 0 ${theme.palette.text.primary}`,
		},
		"&:active": {
			transform: "scale(0.9)",
		},
	},
}))
