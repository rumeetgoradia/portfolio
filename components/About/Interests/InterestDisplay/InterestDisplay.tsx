import { Box, Typography } from "@material-ui/core"
import Img, { Svg } from "react-optimized-image"
import { useInterestDisplayStyles } from "./InterestDisplay.styles"

interface InterestDisplayProps {
	interest: string
}

const InterestDisplay: React.FC<InterestDisplayProps> = ({ interest }) => {
	const classes = useInterestDisplayStyles()

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
				<Svg
					src={require(`images/interests/icons/${interest}.svg`)}
					className={classes.icon}
				/>
			</Box>
			<div className={classes.overlay} />
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				className={classes.imgContainer}
			>
				<Img
					src={require(`images/interests/background/${interest}.png`)}
					sizes={[300, 500]}
					alt={interest}
					title={interest}
					className={classes.img}
				/>
			</Box>
		</div>
	)
}

export default InterestDisplay
