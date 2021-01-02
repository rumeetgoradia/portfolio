import { fade, makeStyles } from "@material-ui/core"

export const useSkillDisplayStyles = makeStyles((theme) => ({
	root: {
		borderRadius: theme.shape.borderRadius,
		border: `1px solid ${fade(theme.palette.grey[500], 0.4)}`,
		padding: theme.spacing(1.75),
		transition: theme.transitions.create(["border-color"]),
		"&:hover": {
			borderColor: fade(theme.palette.grey[500], 0.8),
			"& $icon": {
				color: theme.palette.primary.main,
				"& svg": {
					transform: "scale(1.1)",
				},
			},
			"& $info": {
				opacity: 1,
				textShadow: `0 0 4px ${fade(
					theme.palette.text.primary,
					theme.palette.type === "light" ? 0.5 : 1
				)}`,
			},
		},
	},
	icon: {
		fontSize: theme.typography.fontSize * 2,
		transition: theme.transitions.create(["color"]),
		"& svg": {
			transition: theme.transitions.create(["transform"]),
		},
		[theme.breakpoints.down("xs")]: {
			fontSize: theme.typography.fontSize * 1.25,
		},
	},
	info: {
		opacity: 0.85,
		transition: theme.transitions.create(["opacity", "text-shadow"]),
	},
	title: {
		fontWeight: 500,
		marginLeft: theme.spacing(1.75),
		[theme.breakpoints.down("xs")]: {
			fontSize: theme.typography.fontSize * 0.75,
		},
	},
	tools: {
		fontWeight: 400,
		fontSize: theme.typography.fontSize * 0.75,
		marginLeft: theme.spacing(1.75),
		[theme.breakpoints.down("xs")]: {
			fontSize: theme.typography.fontSize * 0.5,
		},
	},
}))
