import { Grid } from "@material-ui/core"
import Layout from "../components/Layout"
import Header from "../components/Typography/Header"
import Paragraph from "../components/Typography/Paragraph"

const AboutPage = () => {
	return (
		<Layout title={"About"}>
			<Grid item xs={12} container>
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
		</Layout>
	)
}

export default AboutPage
