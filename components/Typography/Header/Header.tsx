import { Typography } from "@material-ui/core"
import { useStyles } from "./styles"

const Header: React.FC = ({ children }) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Typography variant="h3" className={classes.header}>
				{children}
			</Typography>
			<hr className={classes.divider} />
		</div>
	)
}

export default Header
