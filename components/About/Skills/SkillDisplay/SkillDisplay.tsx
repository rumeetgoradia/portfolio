import { Box, Grid, Typography } from "@material-ui/core"
import { Skill } from "../../../../constants"
import { useSkillDisplayStyles } from "./SkillDisplay.styles"

interface SkillDisplayProps {
	skill: Skill
}

const SkillDisplay: React.FC<SkillDisplayProps> = ({ skill }) => {
	const { icon, title, tools } = skill
	const classes = useSkillDisplayStyles()

	return (
		<Grid container className={classes.root}>
			<Grid item xs={2}>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					width="100%"
					height="100%"
					className={classes.icon}
				>
					{icon}
				</Box>
			</Grid>
			<Grid item xs={10} className={classes.info}>
				<Typography className={classes.title}>{title}</Typography>
				<Typography className={classes.tools}>{tools.join(" ⋅ ")}</Typography>
			</Grid>
		</Grid>
	)
}

export default SkillDisplay
