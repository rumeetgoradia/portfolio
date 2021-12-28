import { Box, Text } from "@chakra-ui/react"
import { Layout } from "@components/Layout"
import type { NextPage } from "next"

const WorkPage: NextPage = () => {
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
		</Layout>
	)
}

export default WorkPage
