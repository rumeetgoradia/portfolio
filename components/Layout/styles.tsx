import { fade, makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		zIndex: 6,
		margin: `${theme.spacing(14)}px auto 0`,
		padding: 0,
		[theme.breakpoints.down(660)]: {
			width: 500,
		},
		[theme.breakpoints.down(560)]: {
			width: 400,
		},
		[theme.breakpoints.down(460)]: {
			width: 350,
		},
		[theme.breakpoints.down(400)]: {
			width: 300,
		},
	},
	paper: {
		padding: theme.spacing(4),
		backdropFilter: "saturate(180%) blur(5px)",
		backgroundColor: fade(theme.palette.background.default, 0.55),
		transition: theme.transitions.create(["background-color", "elevation"]),
	},
}))
