import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, Container, Flex } from "@chakra-ui/layout"
import { useTheme } from "@chakra-ui/system"
import { createTransition, fade } from "@utils"
import { DrawerNavList } from "./DrawerNavList"
import { HorizontalNavList } from "./HorizontalNavList"
import { ThemeToggle } from "./ThemeToggle"

const Navbar: React.FC = () => {
	const theme = useTheme()
	const bg = useColorModeValue("white", "black")

	return (
		<Box
			position="sticky"
			top={0}
			left={0}
			zIndex={9999}
			w="full"
			px={8}
			mt={{ sm: 8 }}
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
				<Flex justifyContent="space-between" align="center">
					<HorizontalNavList />
					<ThemeToggle />
					<DrawerNavList />
				</Flex>
			</Container>
		</Box>
	)
}

export default Navbar
