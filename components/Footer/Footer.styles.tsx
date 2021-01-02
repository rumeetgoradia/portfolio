import { fade, makeStyles } from "@material-ui/core"

interface FooterStylesProps {
	onSubPage: boolean
}

export const useFooterStyles = makeStyles((theme) => ({
	root: {
		position: (props: FooterStylesProps) =>
			props.onSubPage ? "relative" : "absolute",
		width: "100%",
		bottom: 0,
		left: 0,
		zIndex: 1299,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: (props: FooterStylesProps) => (props.onSubPage ? 62 : 89),
		backgroundColor: (props: FooterStylesProps) =>
			props.onSubPage
				? fade(theme.palette.background.default, 0.55)
				: "transparent",
		backdropFilter: (props: FooterStylesProps) =>
			props.onSubPage ? "saturate(180%) blur(5px)" : "",
		borderTop: (props: FooterStylesProps) =>
			`1px solid ${
				props.onSubPage ? theme.palette.text.primary : "transparent"
			}`,
		transition: theme.transitions.create([
			"background-color",
			"backdrop-filter",
			"border-color",
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
