import { makeStyles } from "@material-ui/core"

export const useContactFormStyles = makeStyles((theme) => ({
	success: {
		textAlign: "center",
		fontWeight: 600,
		textTransform: "uppercase",
		color: theme.palette.primary.main,
		marginTop: theme.spacing(1.5),
	},
}))
