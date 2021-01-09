import { makeStyles } from "@material-ui/core"

export const useContactFormItemStyles = makeStyles((theme) => ({
	root: {
		transition: theme.transitions.create(["color"]),
		"& fieldset": {
			transition: theme.transitions.create(["border-color"]),
			"& legend span": {
				textTransform: "uppercase",
				fontWeight: 600,
			},
		},
	},
	label: {
		textTransform: "uppercase",
		fontSize: theme.typography.fontSize,
		fontWeight: 500,
		letterSpacing: 2,
	},
}))
