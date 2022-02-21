import { Box, Text } from "@chakra-ui/react"
import { Layout } from "@components/Layout"
import { WorkItemsGrid } from "@components/Work"
import imagekit, { ImageKitResponse } from "@lib/imagekit"
import { Work, WORK } from "@work"
import type { GetStaticProps, NextPage } from "next"
import { getPlaiceholder } from "plaiceholder"

export const getStaticProps: GetStaticProps = async () => {
	const workItems = [...WORK]
	await imagekit
		.listFiles({
			path: "work",
		})
		.then(async (result: ImageKitResponse[]) => {
			for (const work of workItems) {
				const { url } = result.filter((item) =>
					item.filePath.includes(work.imageSlug)
				)[0]
				const { base64 } = await getPlaiceholder(url)
				work.imagePath = url
				work.imageBase64 = base64
			}
		})
		.catch((error: any) => console.error(error))

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
