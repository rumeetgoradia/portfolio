import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, Container, Flex, HStack, Link } from "@chakra-ui/layout"
import { useTheme } from "@chakra-ui/system"
import { Logo } from "@components/Logo"
import { NAV_ITEMS } from "@constants"
import { createTransition, fade } from "@utils"
import { useRouter } from "next/dist/client/router"
import NextLink from "next/link"
import { ThemeToggle } from "./ThemeToggle"

const Navbar: React.FC = () => {
	const theme = useTheme()
	const router = useRouter()
	const bg = useColorModeValue("white", "black")

	return (
		<Box
			position="sticky"
			top={0}
			left={0}
			zIndex={9999}
			w="full"
			px={8}
			mt={{ md: 8 }}
			bg={fade(theme.colors[bg], 0.9)} //background
			backdropFilter="saturate(180%) blur(5px)"
			sx={{
				"@supports not (backdrop-filter: none)": {
					backdropFilter: "none",
					bg: "white",
				},
			}}
			transition={createTransition("background-color")}
		>
			<Container
				as="header"
				maxW="container.md"
				py={4}
				transition={createTransition("padding")}
			>
				<Flex justifyContent="space-between">
					<HStack spacing="20px" justify="center" align="center">
						<NextLink href="/" passHref>
							<Logo
								height="24px"
								width="auto"
								fill="currentcolor"
								cursor="pointer"
								mt="-1px"
								_hover={{
									fill: "brand",
								}}
								transition={createTransition("fill")}
							/>
						</NextLink>
						<HStack spacing="8px" justify="center" align="center">
							{NAV_ITEMS.map((navItem) => {
								const path = `/${navItem}`
								const isActive = router.pathname === path

								return (
									<NextLink href={path} passHref key={`${navItem}-nav-item`}>
										<Link
											lineHeight={1}
											letterSpacing={1}
											pl="7px"
											pr="6px"
											pt="4px"
											pb="2px"
											textDecoration="none"
											fontSize="sm"
											cursor="pointer"
											position="relative"
											color={isActive ? "brand" : "currentcolor"}
											_hover={{
												_after: {
													opacity: 1,
												},
												textDecoration: "none",
											}}
											_focus={{
												_after: {
													opacity: 1,
												},
												textDecoration: "none",
											}}
											_after={{
												content: '""',
												w: isActive ? "full" : "90%",
												h: "1px",
												opacity: isActive ? 1 : 0,
												position: "absolute",
												bgColor: isActive ? "brand" : "currentcolor",
												left: "50%",
												bottom: 0,
												transform: "translateX(-50%)",
												transition: createTransition(["opacity", "width"]),
											}}
										>
											{navItem.toUpperCase()}
										</Link>
									</NextLink>
								)
							})}
						</HStack>
					</HStack>
					<ThemeToggle />
				</Flex>
			</Container>
		</Box>
	)
}

export default Navbar
