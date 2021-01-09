import { fade, makeStyles } from "@material-ui/core"

export const useContactButtonStyles = makeStyles((theme) => ({
	root: {
		"&:hover $iconContainer": {
			color: theme.palette.primary.main,
			opacity: 0,
			transform: "scale(3)",
		},
	},
	iconContainer: {
		color: fade(theme.palette.text.primary, 0.1),
		fontSize: 24,
		position: "absolute",
		transition: theme.transitions.create(["color", "opacity", "transform"]),
	},
}))
