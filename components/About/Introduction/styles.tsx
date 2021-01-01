import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
	profileImageContainer: {
		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	},
	profileImage: {
		borderRadius: "50%",
		border: `8px solid ${theme.palette.text.primary}`,
		height: "auto",
		width: "100%",
		opacity: 0.85,
		transition: theme.transitions.create(["border-color", "opacity"]),
		"&:hover": {
			opacity: 1,
		},
		[theme.breakpoints.down("md")]: {
			maxHeight: 350,
			width: "auto",
		},
	},
}))
