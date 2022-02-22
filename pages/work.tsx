import { Box, Text } from "@chakra-ui/react"
import { Layout } from "@components/Layout"
import { WorkItemsGrid } from "@components/Work"
import { Work, WORK } from "@work"
import type { GetStaticProps, NextPage } from "next"
import { getPlaiceholder } from "plaiceholder"

export const getStaticProps: GetStaticProps = async () => {
	const workItems = [...WORK]
	for (const work of workItems) {
		const { base64 } = await getPlaiceholder(`/images/work/${work.imagePath}`)
		work.imageBase64 = base64
	}

	return {
		props: {
			workItems,
		},
		revalidate: 60,
	}
}

type WorkPageProps = {
	workItems: Work[]
}

const WorkPage: NextPage<WorkPageProps> = ({ workItems }) => {
	return (
		<Layout title="Work">
			<Box>
				<Text as="h1" textStyle="header">
					My Work
				</Text>
				<Text textStyle="paragraph">
					Below is a list of projects that I have worked on in my free time or
					for academic purposes. Selecting the tags in a project will filter
					this list for similar projects.
				</Text>
			</Box>
			<WorkItemsGrid workItems={workItems} />
		</Layout>
	)
}

export default WorkPage
