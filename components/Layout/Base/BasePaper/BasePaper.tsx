import { Paper } from "@material-ui/core"
import { useBasePaperStyles } from "./BasePaper.styles"

const BasePaper: React.FC = ({ children }) => {
	const classes = useBasePaperStyles()

	return <Paper className={classes.root}>{children}</Paper>
}

export default BasePaper
