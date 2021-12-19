import { Box, Container, Flex } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { DesktopMenu } from "./DesktopMenu"
import { MobileMenu } from "./MobileMenu"

const Navbar: React.FC = () => {
	const router = useRouter()

	return (
		<Flex w="full" position="fixed" zIndex={999999} justify="center">
			<Container as="header" maxW="container.md">
				<Flex w="full" justify="space-between" align="center">
					<MobileMenu />
					<DesktopMenu activePath={router.pathname} />
					{/* TODO: add theme toggle */}
					<Box w="40px" h="21px" bg="red" />
				</Flex>
			</Container>
		</Flex>
	)
}

export default Navbar
