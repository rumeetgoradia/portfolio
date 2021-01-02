import { makeStyles } from "@material-ui/core"

export const useSkillDisplayStyles = makeStyles((theme) => ({
	root: {
		borderRadius: theme.shape.borderRadius,
		border: `1px solid ${theme.palette.grey[600]}`,
		padding: theme.spacing(1.75),
		transition: theme.transitions.create(["border-color"]),
		"&:hover": {
			borderColor: theme.palette.grey[300],
			"& $icon": {
				color: theme.palette.primary.main,
			},
			"& $info": {
				opacity: 1,
				textShadow: `0 0 4px ${theme.palette.text.primary}`,
			},
		},
	},
	icon: {
		fontSize: theme.typography.fontSize * 2,
		transition: theme.transitions.create(["color"]),
	},
	info: {
		opacity: 0.85,
		transition: theme.transitions.create(["opacity", "text-shadow"]),
	},
	title: {
		fontSize: theme.typography.fontSize,
		fontWeight: 500,
		marginLeft: theme.spacing(1.75),
	},
	tools: {
		fontWeight: 400,
		fontSize: theme.typography.fontSize * 0.75,
		marginLeft: theme.spacing(1.75),
	},
}))
