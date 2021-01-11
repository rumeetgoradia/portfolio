import { useDynamicSvgGeneration } from "@/hooks"
import { Box, Typography } from "@material-ui/core"
import Image from "next/image"
import React from "react"
import { useInterestDisplayStyles } from "./InterestDisplay.styles"
interface InterestDisplayProps {
	interest: string
}

const InterestDisplay: React.FC<InterestDisplayProps> = ({ interest }) => {
	const classes = useInterestDisplayStyles()
	const svg = useDynamicSvgGeneration(
		`interests/icons/${interest}`,
		classes.svg,
		classes
	)

	return (
		<div className={classes.root}>
			<div className={classes.titleContainer}>
				<Typography align="center" className={classes.title}>
					{interest}
				</Typography>
			</div>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="80%"
				className={classes.iconContainer}
			>
				{svg}
			</Box>
			<div className={classes.overlay} />
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="100%"
				className={classes.imgContainer}
			>
				<Image
					src={`/images/interests/background/${interest}.png`}
					alt={interest}
					title={interest}
					layout="fill"
					objectFit="cover"
					objectPosition="center center"
					quality={15}
				/>
			</Box>
		</div>
	)
}

export default InterestDisplay
