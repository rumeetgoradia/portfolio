import { Heading, Text } from "@chakra-ui/layout"
import { Container } from "@chakra-ui/react"
import type { NextPage } from "next"

const Experience: NextPage = () => {
	return (
		<Container maxW="container.md" pt={16}>
			<Heading size="3xl" my={2} fontWeight={800} letterSpacing="-2px">
				Experience
			</Heading>
			<Text>
				In aliqua in ad laboris laborum eiusmod enim fugiat minim. Consectetur
				in deserunt ex tempor aliquip esse veniam do eu excepteur id sint
				occaecat. Officia velit adipisicing ipsum eu. Cupidatat cupidatat qui id
				exercitation esse labore quis do in labore qui mollit. Reprehenderit
				esse aliquip qui amet reprehenderit ullamco in eiusmod veniam sit. Ad
				exercitation Lorem voluptate quis sint ad consequat elit elit irure
				cillum. Nulla voluptate reprehenderit amet labore commodo sit ad dolor
				proident amet.
			</Text>
		</Container>
	)
}

export default Experience
