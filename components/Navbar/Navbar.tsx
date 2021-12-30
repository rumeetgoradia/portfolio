import { Container, Flex, useColorModeValue, useTheme } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { fade } from "utils/opacity"
import { createTransition } from "utils/transition"
import { DesktopMenu } from "./DesktopMenu"
import { MobileMenu } from "./MobileMenu"
import { ThemeToggle } from "./ThemeToggle"

const Navbar: React.FC = () => {
	const theme = useTheme()
	const bg = useColorModeValue("white", "black")

	const router = useRouter()

	const [isScrolled, setScrolled] = useState<boolean>()

	const handleScroll = () => {
		const bodyScrollTop =
			document.documentElement.scrollTop || document.body.scrollTop
		setScrolled(bodyScrollTop > 40)
	}

	useEffect(() => {
		handleScroll()
		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<Flex
			w="full"
			position="fixed"
			zIndex={1700 - 3}
			justify="center"
			userSelect="none"
			py={{ base: 8, md: 10 }}
			bg={{
				base: fade(theme.colors[bg], 0.9),
				md: isScrolled ? fade(theme.colors[bg], 0.9) : "transparent",
			}}
			backdropFilter={{
				base: "saturate(180%) blur(5px)",
				md: isScrolled ? "saturate(180%) blur(5px)" : "none",
			}}
			transition={createTransition(["background-color", "backdrop-filter"])}
			sx={{
				"@supports not (backdrop-filter: none)": {
					backdropFilter: "none",
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
