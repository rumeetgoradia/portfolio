import { Box, Text } from "@chakra-ui/react"
import type { NextPage } from "next"

const HomePage: NextPage = () => {
	return (
		<Box pt="100px">
			<Text>Hello</Text>
			<Text fontStyle="italic">Italic</Text>
		</Box>
	)
}

export default HomePage
