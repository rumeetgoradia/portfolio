import { fade, makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(4),
		backdropFilter: "saturate(180%) blur(5px)",
		backgroundColor: fade(theme.palette.background.default, 0.55),
		transition: theme.transitions.create(["background-color", "elevation"]),
	},
}))
