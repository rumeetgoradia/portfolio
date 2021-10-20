import { useColorModeValue } from "@chakra-ui/color-mode"
import { useDisclosure } from "@chakra-ui/hooks"
import { Box, Container, Flex } from "@chakra-ui/layout"
import { useTheme } from "@chakra-ui/system"
import { Logo } from "@components/Logo"
import { createTransition, fade } from "@utils"
import { useRouter } from "next/dist/client/router"
import NextLink from "next/link"
import { useEffect, useState } from "react"
import { DrawerNavList } from "./DrawerNavList"
import { HorizontalNavList } from "./HorizontalNavList"
import { ThemeToggle } from "./ThemeToggle"

const Navbar: React.FC = () => {
	const [isScrolled, setScrolled] = useState<boolean>()

	const handleScroll = () => {
		const bodyScrollTop =
			document.documentElement.scrollTop || document.body.scrollTop
		setScrolled(bodyScrollTop > 32)
	}

	useEffect(() => {
		handleScroll()
		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const router = useRouter()

	const theme = useTheme()
	const bg = useColorModeValue("white", "black")

	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Box
			position="fixed"
			top={0}
			left={0}
			zIndex={9999}
			w="full"
			px={8}
			pt={isScrolled ? 0 : 8}
			bg={fade(theme.colors[bg], 0.9)} //background
			backdropFilter="saturate(180%) blur(5px)"
			sx={{
				"@supports not (backdrop-filter: none)": {
					backdropFilter: "none",
					bg: "white",
				},
			}}
			transition={createTransition(["background-color", "padding"])}
		>
			<Container
				as="header"
				maxW="container.md"
				py={4}
				transition={createTransition("padding")}
			>
				<Flex justifyContent="space-between" align="center">
					<HorizontalNavList activePath={router.pathname} />
					<ThemeToggle />
					<NextLink href="/" passHref>
						<Logo
							onClick={onClose}
							height="24px"
							width="auto"
							fill="currentcolor"
							cursor="pointer"
							mt="-1px"
							_hover={{
								fill: "brand",
							}}
							display={{ md: "none" }}
							transition={createTransition("fill")}
						/>
					</NextLink>
					<DrawerNavList
						activePath={router.pathname}
						isOpen={isOpen}
						onOpen={onOpen}
						onClose={onClose}
						isScrolled={isScrolled}
					/>
				</Flex>
			</Container>
		</Box>
	)
}

export default Navbar
