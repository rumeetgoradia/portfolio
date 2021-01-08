import { Grid, Typography } from "@material-ui/core"
import Img from "react-optimized-image"
import { SITE_NAME } from "../../../constants"
import { WHO_AM_I } from "../../../content"
import Header from "../../Typography/Header"
import { useIntroductionStyles } from "./Introduction.styles"

const Introduction: React.FC = () => {
	const classes = useIntroductionStyles()

	return (
		<Grid container spacing={4}>
			<Grid
				item
				xs={12}
				md={5}
				lg={3}
				xl={2}
				className={classes.profileImageContainer}
			>
				<Img
					src={require("images/profile.jpg")}
					alt={SITE_NAME}
					title={SITE_NAME}
					className={classes.profileImage}
				/>
			</Grid>
			<Grid item xs={12} md={7} lg={9} xl={10}>
				<Header>Who Am I?</Header>
				<Typography variant="body1" align="justify">
					{WHO_AM_I}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default Introduction
