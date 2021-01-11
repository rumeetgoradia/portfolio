import { fade, makeStyles } from "@material-ui/core"

export const useProjectCardStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		padding: 0,
		backdropFilter: "saturate(180%) blur(5px)",
		backgroundColor: fade(theme.palette.background.default, 0.55),
		overflow: "hidden",
		transition: theme.transitions.create([
			"background-color",
			"box-shadow",
			"opacity",
		]),
		"&:hover": {
			"& $img, & $imgContainer svg": {
				transform: "scale(1.1)",
				opacity: 1,
				filter: "blur(0px)",
			},
			"& $content": {
				opacity: 1,
			},
		},
	},
	imgContainer: {
		"& svg": {
			fill: theme.palette.primary.main,
			width: "95%",
			height: "auto",
			opacity: 0.85,
			filter: "blur(1px)",
			transition: theme.transitions.create(["transform", "opacity", "filter"]),
		},
	},
	img: {
		opacity: 0.85,
		filter: "blur(1px)",
		transition: theme.transitions.create(["transform", "opacity", "filter"]),
	},
	svg: {},
	content: {
		padding: theme.spacing(4),
		opacity: 0.85,
		transition: theme.transitions.create(["opacity"]),
	},
	title: {
		fontWeight: 600,
		fontSize: theme.typography.fontSize * 1.25,
		lineHeight: 1,
		marginBottom: theme.spacing(1.5),
	},
	description: {
		fontSize: theme.typography.fontSize,
	},
	buttons: {
		marginTop: theme.spacing(0.5),
	},
}))
