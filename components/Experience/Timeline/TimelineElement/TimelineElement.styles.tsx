import { fade, makeStyles } from "@material-ui/core"

export const useTimelineElementStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		background: "transparent",
		marginTop: theme.spacing(8),
		"&:first-child": {
			marginTop: 0,
		},
		"&:hover": {
			"& $content": {
				opacity: 1,
			},
			"& $svg": {
				fill: theme.palette.primary.main,
			},
			"& $icon": {
				top: 0,
				left: 0,
				width: 40,
				height: 40,
				backgroundColor: theme.palette.primary.main,
				boxShadow: "inset 0 2px 0 rgba(0, 0, 0, 0.2)",
				"& svg": {
					transform: "translate(-50%, -50%) scale(1)",
					opacity: 1,
				},
			},
		},
	},
	content: {
		opacity: 0.85,
		position: "relative",
		background: "transparent",
		borderRadius: 0,
		boxShadow: "none",
		padding: `0 ${theme.spacing(2)}px`,
		marginLeft: 60,
		transition: theme.transitions.create(["opacity"]),
	},
	svg: {
		height: 40,
		maxWidth: "95%",
		width: "auto",
		marginBottom: theme.spacing(1.5),
		fill: theme.palette.text.primary,
		transition: theme.transitions.create(["fill"]),
	},
	smallerSvg: {
		height: 30,
	},
	title: {
		fontWeight: 600,
		fontSize: theme.typography.fontSize * 1.25,
		lineHeight: 1,
	},
	location: {
		fontWeight: 300,
		fontSize: theme.typography.fontSize,
		color: fade(theme.palette.text.primary, 0.85),
		fontStyle: "italic",
	},
	subtitlesContainer: {
		margin: `${theme.spacing(1.5)}px 0`,
	},
	subtitle: {
		fontSize: theme.typography.fontSize,
		lineHeight: 1.3,
	},
	icon: {
		position: "absolute",
		top: 10,
		left: 10,
		width: 20,
		height: 20,
		border: `4px solid ${theme.palette.text.primary}`,
		borderRadius: "50%",
		textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
		backgroundColor: theme.palette.text.primary,
		transition: theme.transitions.create([
			"left",
			"top",
			"width",
			"height",
			"background-color",
			"border-color",
			"box-shadow",
		]),
		"& svg": {
			fill: theme.palette.text.primary,
			display: "block",
			width: 18,
			height: "auto",
			position: "relative",
			left: "50%",
			top: "50%",
			opacity: 0,
			transform: "translate(-50%, -50%) scale(0)",
			transition: theme.transitions.create(["fill", "transform", "opacity"]),
		},
	},
	date: {
		fontSize: theme.typography.fontSize * 0.75,
		fontStyle: "italic",
		transition: theme.transitions.create(["color"]),
	},
}))
