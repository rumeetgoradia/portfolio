import { Box, Text } from "@chakra-ui/react"
import { Layout } from "@components/Layout"
import { WorkItemsGrid } from "@components/Work"
import cloudinary from "@lib/cloudinary"
import { Work, WORK } from "@work"
import type { GetStaticProps, NextPage } from "next"
import { getPlaiceholder } from "plaiceholder"

export const getStaticProps: GetStaticProps = async () => {
	const { resources: workResources } = await cloudinary.api.resources({
		max_results: 500,
		prefix: "work",
		type: "upload",
	})

	const workItems = [...WORK]
	for (const work of workItems) {
		const { secure_url } = workResources.filter((wr: any) =>
			wr["public_id"].includes(work.imageSlug)
		)[0]
		work.imagePath = secure_url
		const { base64 } = await getPlaiceholder(secure_url)
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
