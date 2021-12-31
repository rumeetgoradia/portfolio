import { Container, VStack } from "@chakra-ui/react"
import { NextSeo } from "next-seo"

type LayoutProps = {
	title?: string
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
	return (
		<>
			<NextSeo title={title} />
			<Container
				maxW="container.md"
				minH={{ base: "calc(100vh - 260px)", md: "calc(100vh - 220px)" }}
				px={8}
				pt={{ base: "105px", md: "125px" }}
				pb={16}
				bg="transparent"
			>
				<VStack
					as="main"
					spacing={12}
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
