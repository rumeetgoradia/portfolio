import { Grid, GridProps, Paper } from "@material-ui/core"
import { useBaseStyles } from "./Base.styles"

const Base: React.FC<GridProps> = ({ children, ...props }) => {
	const classes = useBaseStyles()
	return (
		<Grid item {...props}>
			<Paper className={classes.root}>{children}</Paper>
		</Grid>
	)
}

export default Base
