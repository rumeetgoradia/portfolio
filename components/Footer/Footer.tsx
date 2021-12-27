import { Container, Flex, useColorModeValue, useTheme } from "@chakra-ui/react"
import { fade } from "utils/opacity"
import { createTransition } from "utils/transition"
import { NowPlaying } from "./NowPlaying"
const Footer: React.FC = () => {
	const theme = useTheme()
	const bg = useColorModeValue("white", "black")

	return (
		<Flex
			w="full"
			zIndex={999998}
			justify="center"
			userSelect="none"
			py={4}
			bg={fade(theme.colors[bg], 0.9)} //background
			backdropFilter="saturate(180%) blur(5px)"
			transition={createTransition("background-color")}
			sx={{
				"@supports not (backdrop-filter: none)": {
					backdropFilter: "none",
				},
			}}
		>
			<Container as="footer" maxW="container.md" px={8}>
				<NowPlaying />
			</Container>
		</Flex>
	)
}

export default Footer
