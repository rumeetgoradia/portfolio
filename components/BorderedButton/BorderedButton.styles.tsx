import { fade, makeStyles } from "@material-ui/core"

interface BorderedButtonStylesProps {
	active: boolean
}

export const useBorderedButtonStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		border: `1px solid ${theme.palette.text.primary}`,
		borderRadius: theme.shape.borderRadius,
		color: (props: BorderedButtonStylesProps) =>
			props.active ? theme.palette.primary.main : theme.palette.text.primary,
		width: "100%",
		textTransform: "uppercase",
		fontWeight: 400,
		fontSize: theme.typography.fontSize * 0.75,
		backgroundColor: (props: BorderedButtonStylesProps) =>
			props.active ? fade(theme.palette.text.primary, 0.85) : "transparent",
		letterSpacing: (props: BorderedButtonStylesProps) => (props.active ? 1 : 2),
		lineHeight: 1,
		padding: `${theme.spacing(1.5)}px ${theme.spacing(0.75)}px`,
		opacity: (props: BorderedButtonStylesProps) => (props.active ? 1 : 0.85),
		textShadow: (props: BorderedButtonStylesProps) =>
			props.active
				? `0 0 4px ${fade(theme.palette.primary.main, 0.4)}`
				: "none",
		transition: theme.transitions.create([
			"letter-spacing",
			"background-color",
			"color",
			"transform",
			"text-shadow",
			"box-shadow",
			"opacity",
		]),
		"&:hover": {
			opacity: 1,
			letterSpacing: 1,
			backgroundColor: theme.palette.text.primary,
			color: (props: BorderedButtonStylesProps) =>
				props.active
					? theme.palette.primary.main
					: theme.palette.background.default,
			boxShadow: `0 0 6px 0 ${theme.palette.text.primary}`,
		},
		"&:active": {
			transform: "translateY(3px)",
		},
	},
}))
