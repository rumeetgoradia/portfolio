import { Interests, Introduction, Skills } from "../components/About"
import Layout from "../components/Layout"
import Base from "../components/Layout/Base"

const AboutPage = () => {
	return (
		<Layout title={"About"}>
			<Base xs={12}>
				<Introduction />
			</Base>
			<Base xs={12}>
				<Skills />
			</Base>
			<Base xs={12}>
				<Interests />
			</Base>
		</Layout>
	)
}

export default AboutPage
