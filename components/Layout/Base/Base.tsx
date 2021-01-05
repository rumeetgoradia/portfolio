import { Grid, GridProps } from "@material-ui/core"
import BasePaper from "./BasePaper"

const Base: React.FC<GridProps> = ({ children, ...props }) => {
	return (
		<Grid item {...props}>
			<BasePaper>{children}</BasePaper>
		</Grid>
	)
}

export default Base
