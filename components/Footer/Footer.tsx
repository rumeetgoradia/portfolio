import {
	Box,
	Container,
	Flex,
	Grid,
	Text,
	useColorModeValue,
	useTheme,
	VStack,
} from "@chakra-ui/react"
import { Hyperlink } from "@components/Typography"
import { EXTERNAL_ITEMS, NAV_ITEMS } from "@constants"
import { fade } from "@utils"
import NextLink from "next/link"
import { NowPlaying } from "./NowPlaying"

const Footer: React.FC = () => {
	const theme = useTheme()
	const borderColor = useColorModeValue("black", "white")
	const borderOpacity = useColorModeValue(0.1, 0.2)

	return (
		<Flex
			w="full"
			position="relative"
			zIndex={1299}
			justify="center"
			userSelect="none"
		>
			<Container as="footer" maxW="container.md" px={8} pb={8}>
				<VStack spacing={6} justify="flex-start" align="flex-start" w="full">
					<Box
						as="hr"
						w="full"
						border="1px"
						borderColor="transparent"
						borderTopColor={fade(theme.colors[borderColor], borderOpacity)}
					/>
					<NowPlaying />
					<Grid
						gap={4}
						templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
						w="full"
					>
						{[{ title: "Home", path: "/" }]
							.concat(NAV_ITEMS)
							.map(({ title, path }) => (
								<Box as="span" key={`${title}-footer-link`}>
									<NextLink href={path} passHref>
										<Hyperlink title={title} color="current">
											<Text textStyle="paragraph" as="span">
												{title}
											</Text>
										</Hyperlink>
									</NextLink>
								</Box>
							))}
						{EXTERNAL_ITEMS.map(({ title, path }) => (
							<Box as="span" key={`${title}-footer-link`}>
								<NextLink href={path} passHref>
									<Hyperlink title={title} color="current" isExternal>
										<Text textStyle="paragraph" as="span">
											{title}
										</Text>
									</Hyperlink>
								</NextLink>
							</Box>
						))}
					</Grid>
				</VStack>
			</Container>
		</Flex>
	)
}

export default Footer
