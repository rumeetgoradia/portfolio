import Introduction from "../components/About/Introduction"
import Skills from "../components/About/Skills"
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
			<Base xs={12} md={6}></Base>
		</Layout>
	)
}

export default AboutPage
