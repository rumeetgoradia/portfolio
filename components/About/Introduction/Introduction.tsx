import { Box, Grid, Typography } from "@material-ui/core"
import Image from "next/image"
import { SITE_NAME } from "../../../constants"
import { WHO_AM_I } from "../../../content"
import Header from "../../Typography/Header"
import { useIntroductionStyles } from "./Introduction.styles"

interface IntroductionProps {
	imgBase64: string
	imgSrc: string
}

const Introduction: React.FC<IntroductionProps> = ({ imgBase64, imgSrc }) => {
	const classes = useIntroductionStyles()

	return (
		<Grid container spacing={4}>
			<Grid item xs={12} md={5} lg={3} xl={2}>
				<Box display="flex" justifyContent="center" width="100%">
					<div className={classes.profileImageContainer}>
						<img
							aria-hidden="true"
							alt={SITE_NAME}
							src={imgBase64}
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								width: "100%",
								height: "100%",
								/* Adjust the content to fit */
								objectFit: "cover",
								objectPosition: "center",
								/* Blur the image and scale to avoid transparent corners */
								filter: "blur(2rem)",
								transform: "scale(1.2)",
							}}
						/>
						<Image
							src={imgSrc}
							layout="intrinsic"
							width={350}
							height={350}
							alt={SITE_NAME}
							title={SITE_NAME}
							quality={30}
							objectFit="cover"
							objectPosition="center center"
							className={classes.profileImage}
							priority
						/>
					</div>
				</Box>
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
