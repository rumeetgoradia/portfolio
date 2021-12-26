import { Container, Flex, useColorModeValue, useTheme } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { fade } from "utils/opacity"
import { createTransition } from "utils/transition"
import { DesktopMenu } from "./DesktopMenu"
import { MobileMenu } from "./MobileMenu"
import { ThemeToggle } from "./ThemeToggle"

const Navbar: React.FC = () => {
	const theme = useTheme()
	const bg = useColorModeValue("white", "black")

	const router = useRouter()

	return (
		<Flex
			w="full"
			position="fixed"
			zIndex={999999}
			justify="center"
			userSelect="none"
			py={{ base: 8, md: 10 }}
			bg={fade(theme.colors[bg], 0.9)} //background
			backdropFilter="saturate(180%) blur(5px)"
			transition={createTransition("background-color")}
			sx={{
				"@supports not (backdrop-filter: none)": {
					backdropFilter: "none",
					bg,
				},
			}}
		>
			<Container as="header" maxW="container.md" px={8}>
				<Flex w="full" justify="space-between" align="center">
					<DesktopMenu activePath={router.pathname} />
					<ThemeToggle />
					<MobileMenu activePath={router.pathname} />
				</Flex>
			</Container>
		</Flex>
	)
}

export default Navbar
