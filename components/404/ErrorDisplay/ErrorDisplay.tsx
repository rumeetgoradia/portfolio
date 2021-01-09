import { Box, Typography } from "@material-ui/core"
import Link from "next/link"
import { ERROR_SUBTITLE } from "../../../content"
import BorderedButton from "../../BorderedButton"
import { useErrorDisplayStyles } from "./ErrorDisplay.styles"

const ErrorDisplay: React.FC = () => {
	const classes = useErrorDisplayStyles()

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
				404
			</Typography>
			<Typography variant="h2" align="center" className={classes.subtitle}>
				{ERROR_SUBTITLE}
			</Typography>
			<Box width="20vw" minWidth={120}>
				<Link href="/">
					<BorderedButton>Home</BorderedButton>
				</Link>
			</Box>
		</Box>
	)
}

export default ErrorDisplay
