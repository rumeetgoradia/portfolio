import { NextSeo } from "next-seo"
import Landing from "../components/Landing"
import { SITE_NAME } from "../constants"

const IndexPage = () => {
	return (
		<>
			<NextSeo titleTemplate="%s" title={SITE_NAME} />
			<Landing />
		</>
	)
}

export default IndexPage
