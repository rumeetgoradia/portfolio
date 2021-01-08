import { fade, makeStyles } from "@material-ui/core"

export const useListsStyles = makeStyles((theme) => ({
	root: {
		margin: `${theme.spacing(1.5)}px 0`,
	},
	container: {
		marginTop: theme.spacing(0.75),
		"&:first-child": {
			marginTop: 0,
		},
	},
	title: {
		fontWeight: 600,
		fontSize: theme.typography.fontSize * 0.75,
		color: fade(theme.palette.text.primary, 0.85),
	},
	items: {
		fontSize: theme.typography.fontSize * 0.75,
		color: fade(theme.palette.text.primary, 0.85),
	},
}))
