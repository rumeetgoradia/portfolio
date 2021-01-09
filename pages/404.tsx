import { NextSeo } from "next-seo"
import { ErrorDisplay } from "../components/404"

const ErrorPage: React.FC = () => {
	return (
		<>
			<NextSeo title="404" />
			<ErrorDisplay />
		</>
	)
}

export default ErrorPage
