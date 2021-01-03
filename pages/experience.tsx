import { Timeline } from "../components/Experience"
import Layout from "../components/Layout"
import Base from "../components/Layout/Base"
import { Header } from "../components/Typography"
import { EXPERIENCE } from "../content"

const ExperiencePage = () => {
	return (
		<Layout title="Experience">
			{EXPERIENCE.map((experienceObj, index) => (
				<Base key={`experience-${index}`} xs={12} md={6}>
					<Header>{experienceObj.type}</Header>
					<Timeline experience={experienceObj} />
				</Base>
			))}
		</Layout>
	)
}

export default ExperiencePage
