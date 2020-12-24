import { makeStyles } from "@material-ui/core"

interface ThemeToggleStyleProps {
	checked: boolean
}

export const useStyles = makeStyles((theme) => ({
	root: {
		overflow: "hidden",
		opacity: 0.85,
		transition: theme.transitions.create("opacity"),
		"&:hover": {
			opacity: 1,
		},
	},
	label: {
		position: "relative",
		display: "inline-block",
		width: 35,
		height: 21,
		margin: 0,
		zIndex: 9999,
	},
	input: {
		opacity: 0,
		width: 0,
		height: 0,
	},
	slider: {
		position: "absolute",
		cursor: "pointer",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		borderRadius: 21,
		width: 35,
		height: 21,
		zIndex: 10000,
		backgroundColor: theme.palette.text.primary,
		transition: theme.transitions.create("background-color"),
	},
	switch: {
		position: "absolute",
		height: 13,
		width: 13,
		borderRadius: "50%",
		left: 4,
		bottom: 4,
		textAlign: "center",
		paddingTop: 1,
		fontSize: 11,
		background: theme.palette.background.default,
		color: theme.palette.text.primary,
		transform: (props: ThemeToggleStyleProps) =>
			props.checked ? "translateX(14px)" : "",
		transition: theme.transitions.create(["transform", "background-color"]),
	},
}))
