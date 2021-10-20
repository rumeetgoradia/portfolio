import { Box, Heading, Text } from "@chakra-ui/layout"
import { Container } from "@chakra-ui/react"
import type { NextPage } from "next"
import { NextSeo } from "next-seo"

const Home: NextPage = () => {
	return (
		<>
			<NextSeo titleTemplate="%s" title="Rumeet Goradia" />
			<Box p={8}>
				<Container maxW="container.md">
					<Heading size="3xl" my={2} fontWeight={800} letterSpacing="-2px">
						Rumeet Goradia
					</Heading>
					<Text>
						In aliqua in ad laboris laborum eiusmod enim fugiat minim.
						Consectetur in deserunt ex tempor aliquip esse veniam do eu
						excepteur id sint occaecat. Officia velit adipisicing ipsum eu.
						Cupidatat cupidatat qui id exercitation esse labore quis do in
						labore qui mollit. Reprehenderit esse aliquip qui amet reprehenderit
						ullamco in eiusmod veniam sit. Ad exercitation Lorem voluptate quis
						sint ad consequat elit elit irure cillum. Nulla voluptate
						reprehenderit amet labore commodo sit ad dolor proident amet.
					</Text>
					<Box h={2000}></Box>
				</Container>
			</Box>
		</>
	)
}

export default Home
