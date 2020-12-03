import { Typography } from "@material-ui/core"
import { NextSeo } from "next-seo"
import { SITE_NAME } from "../constants"

const IndexPage = () => {
	return (
		<>
			<NextSeo titleTemplate="%s" title={SITE_NAME} />

			<Typography
				variant="h1"
				style={{
					zIndex: 100,
					position: "absolute",
					top: 50,
					fontWeight: 600,
					textTransform: "uppercase",
				}}
			>
				{SITE_NAME}
			</Typography>
		</>
	)
}

export default IndexPage
