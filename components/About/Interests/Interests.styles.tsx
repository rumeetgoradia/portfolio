import { makeStyles } from "@material-ui/core"

export const useInterestsStyles = makeStyles((theme) => ({
	root: {
		borderRadius: theme.shape.borderRadius,
		border: `1px solid ${theme.palette.grey[300]}`,
	},
}))
