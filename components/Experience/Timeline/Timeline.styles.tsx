import { fade, makeStyles } from "@material-ui/core"

export const useTimelineStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		maxWidth: "none",
		width: "100%",
		padding: `${theme.spacing(3)}px 0`,
		"&:before": {
			content: '""',
			position: "absolute",
			top: 0,
			left: 18,
			height: "100%",
			width: 4,
			backgroundColor: fade(theme.palette.grey[500], 0.4),
			transition: theme.transitions.create(["background-color"]),
		},
		"&:hover": {
			"&:before": {
				backgroundColor: fade(theme.palette.grey[500], 0.8),
			},
		},
	},
}))
