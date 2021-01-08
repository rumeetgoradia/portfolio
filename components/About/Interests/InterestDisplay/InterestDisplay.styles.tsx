import { fade, makeStyles } from "@material-ui/core"

export const useInterestDisplayStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		border: `1px solid ${fade(theme.palette.grey[500], 0.4)}`,
		padding: theme.spacing(2.25),
		overflow: "hidden",
		transition: theme.transitions.create(["border-color"]),
		"&:hover": {
			borderColor: fade(theme.palette.grey[500], 0.8),
			"& $icon": {
				fill: theme.palette.primary.main,
				opacity: 0,
				height: "200%",
			},
			"& $titleContainer, & $imgContainer, & $overlay": {
				opacity: 1,
			},
			"& $titleContainer": {
				textShadow: `0 0 4px ${fade(
					theme.palette.text.primary,
					theme.palette.type === "light" ? 0.5 : 1
				)}`,
			},
		},
	},
	imgContainer: {
		position: "absolute",
		zIndex: 47,
		top: 0,
		left: 0,
		opacity: 0,
		transition: theme.transitions.create(["opacity"]),
	},
	img: {
		width: "100%",
	},
	overlay: {
		position: "absolute",
		zIndex: 48,
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		opacity: 0,
		backgroundColor: fade(theme.palette.background.default, 0.45),
		transition: theme.transitions.create(["background-color", "opacity"]),
	},
	iconContainer: {
		position: "absolute",
		zIndex: 49,
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	},
	icon: {
		fill: fade(theme.palette.text.primary, 0.2),
		height: "100%",
		width: "auto",
		transition: theme.transitions.create(["fill", "opacity", "height"]),
	},
	titleContainer: {
		position: "relative",
		zIndex: 50,
		opacity: 0.85,
		transition: theme.transitions.create(["opacity", "text-shadow"]),
	},
	title: {
		fontWeight: 500,
		[theme.breakpoints.down("xs")]: {
			fontSize: theme.typography.fontSize * 0.75,
		},
	},
}))
