import { Grid } from "@material-ui/core"
import { INTERESTS } from "../../../constants"
import { Header } from "../../Typography"
import InterestDisplay from "./InterestDisplay"
import { useInterestsStyles } from "./Interests.styles"

const Interests: React.FC = () => {
	const classes = useInterestsStyles()

	return (
		<>
			<Header>Interests</Header>
			<Grid container spacing={2}>
				{INTERESTS.map((interest, index) => (
					<Grid key={`interest-${index}`} item xs={12} sm={6} md={4} lg={3}>
						<InterestDisplay interest={interest} />
					</Grid>
				))}
			</Grid>
		</>
	)
}

export default Interests
