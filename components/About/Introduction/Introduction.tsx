import { Grid } from "@material-ui/core"
import Img from "react-optimized-image"
import { SITE_NAME, WHO_AM_I } from "../../../constants"
import Header from "../../Typography/Header"
import Paragraph from "../../Typography/Paragraph"
import { useStyles } from "./styles"

const Introduction: React.FC = () => {
	const classes = useStyles()

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
				<Paragraph>{WHO_AM_I}</Paragraph>
			</Grid>
		</Grid>
	)
}

export default Introduction
