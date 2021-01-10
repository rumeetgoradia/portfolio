import { Grid, Typography } from "@material-ui/core"
import Image from "next/image"
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
				<Image
					src="/images/profile.jpg"
					width={350}
					height={350}
					alt={SITE_NAME}
					title={SITE_NAME}
					quality={30}
					layout="intrinsic"
					className={classes.profileImage}
					priority
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
