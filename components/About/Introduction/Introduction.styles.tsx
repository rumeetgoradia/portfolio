import { makeStyles } from "@material-ui/core"

export const useIntroductionStyles = makeStyles((theme) => ({
	profileImageContainer: {
		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	},
	profileImage: {
		borderRadius: "50%",
		border: `8px solid ${theme.palette.text.primary} !important`,
		height: "auto",
		width: "100%",
		opacity: 0.85,
		margin: 0,
		transition: theme.transitions.create(["border-color", "opacity"]),
		"&:hover": {
			opacity: 1,
		},
		[theme.breakpoints.down("md")]: {
			maxWidth: "350px ",
			maxHeight: "350px ",
		},
	},
}))
