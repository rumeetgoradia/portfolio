import { Box, Typography } from "@material-ui/core"
import ReactTyped from "react-typed"
import { SITE_NAME } from "../../constants"
import { LANDING_SUBTITLE } from "../../content"
import { useLandingStyles } from "./Landing.styles"

const Landing = () => {
	const classes = useLandingStyles()

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100vh"
			className={classes.root}
		>
			<Typography variant="h1" align="center" className={classes.title}>
				{SITE_NAME}
			</Typography>
			<Typography variant="h2" align="center" className={classes.subtitle}>
				{LANDING_SUBTITLE.header}
				<span className={classes.typedSubtitle}>
					<ReactTyped
						strings={LANDING_SUBTITLE.typedStrings}
						typeSpeed={40}
						backSpeed={20}
						backDelay={1150}
						showCursor
						cursorChar="|"
						loop
					/>
				</span>
			</Typography>
		</Box>
	)
}

export default Landing
