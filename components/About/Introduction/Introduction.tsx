import { Grid } from "@material-ui/core"
import Img from "react-optimized-image"
import { SITE_NAME } from "../../../constants"
import Header from "../../Typography/Header"
import Paragraph from "../../Typography/Paragraph"
import { useStyles } from "./styles"

const Introduction: React.FC = () => {
	const classes = useStyles()

	return (
		<>
			<Grid item xs={12} md={4}>
				<Img
					src={require("images/profile.jpg")}
					alt={SITE_NAME}
					title={SITE_NAME}
				/>
			</Grid>
			<Grid item xs={12} md={8} container>
				<Grid item xs={12}>
					<Header>Who Am I?</Header>
				</Grid>
				<Grid item xs={12}>
					<Paragraph>
						My name is Rumeet Goradia, and I am currently a rising senior at the
						Rutgers University Honors College in New Brunswick, NJ. I'm studying
						Computer Science and Business Analytics & Information Technology.
						One day, I hope to be able to market my own software and bring more
						technology into lower-income communities. This summer, I was
						employed at Schonfeld Strategic Advisors in New York City as a
						Software Engineering Intern. While I'm not studying or working, I'm
						at the gym, hanging out with my friends, or working on personal
						projects like this website.
					</Paragraph>
				</Grid>
			</Grid>
		</>
	)
}

export default Introduction
