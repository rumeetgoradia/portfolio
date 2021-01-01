import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		zIndex: 6,
		paddingTop: theme.spacing(14),
		paddingBottom: theme.spacing(12),
		minHeight: "calc(100vh - 62px)",
	},
}))
