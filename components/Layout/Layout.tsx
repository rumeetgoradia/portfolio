import {
	Container,
	useColorModeValue,
	useTheme,
	VStack,
} from "@chakra-ui/react"
import { NextSeo } from "next-seo"

type LayoutProps = {
	title?: string
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
	const theme = useTheme()
	const bg = useColorModeValue("white", "black")

	return (
		<>
			<NextSeo title={title} />
			<Container
				maxW="container.md"
				px={8}
				pt={{ base: "105px", md: "125px" }}
				pb={8}
				bg="transparent"
			>
				<VStack
					as="main"
					spacing={8}
					justify="flex-start"
					align="flex-start"
					position="relative"
					zIndex={1}
				>
					{children}
				</VStack>
			</Container>
		</>
	)
}

export default Layout
