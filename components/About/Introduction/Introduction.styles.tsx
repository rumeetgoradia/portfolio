import { makeStyles } from "@material-ui/core"

export const useIntroductionStyles = makeStyles((theme) => ({
	profileImageContainer: {
		position: "relative",
		overflow: "hidden",
		borderRadius: "50%",
		border: `8px solid ${theme.palette.text.primary}`,
		opacity: 0.85,
		transition: theme.transitions.create(["border-color", "opacity"]),
		"&:hover": {
			opacity: 1,
		},
		[theme.breakpoints.down("md")]: {
			maxWidth: 350,
			maxHeight: 350,
		},
	},
	profileImage: {},
}))
