import { makeStyles } from "@material-ui/core"

export const useStyles = makeStyles((theme) => ({
	profileImage: {
		borderRadius: "50%",
		border: `8px solid ${theme.palette.text.primary}`,
		width: "100%",
		height: "auto",
	},
}))
