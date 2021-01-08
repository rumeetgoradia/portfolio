import { makeStyles } from "@material-ui/core"

export const useMasonryGridStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		marginRight: 0,
		marginLeft: -theme.spacing(4),
		marginBottom: -theme.spacing(4),
		width: "auto",
	},
	col: {
		paddingLeft: theme.spacing(4),
		backgroundClip: "padding-box",
		"& .MuiPaper-root": {
			marginBottom: theme.spacing(4),
		},
	},
}))
