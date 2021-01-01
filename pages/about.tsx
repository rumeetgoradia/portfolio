import Introduction from "../components/About/Introduction"
import Layout from "../components/Layout"
import Base from "../components/Layout/Base"

const AboutPage = () => {
	return (
		<Layout title={"About"}>
			<Base xs={12}>
				<Introduction />
			</Base>
		</Layout>
	)
}

export default AboutPage
