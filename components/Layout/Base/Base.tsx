import { Grid, GridProps, Paper } from "@material-ui/core"
import { useStyles } from "./styles"

const Base: React.FC<GridProps> = ({ children, ...props }) => {
	const classes = useStyles()

	return (
		<Grid item {...props}>
			<Paper className={classes.paper}>{children}</Paper>
		</Grid>
	)
}

export default Base
