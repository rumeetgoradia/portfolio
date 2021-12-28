import {
	Box,
	Flex,
	Text,
	useColorModeValue,
	useTheme,
	VStack,
} from "@chakra-ui/react"
import { createTransition, fade } from "@utils"

export type CurrentlyItem = {
	title: string
	subtitle?: string
	genres: string[]
}

type CurrentlyBoxProps = {
	title: string
	currentlyItems: CurrentlyItem[]
}

const CurrentlyBox: React.FC<CurrentlyBoxProps> = ({
	title,
	currentlyItems,
}) => {
	const theme = useTheme()
	const borderColor = useColorModeValue("black", "white")
	const borderOpacity = useColorModeValue(0.1, 0.2)
	const tagOpacity = useColorModeValue(0.35, 0.5)

	return (
		<Box w="full">
			<Text
				as="h6"
				fontWeight={700}
				textTransform="uppercase"
				transition={createTransition("color")}
			>
				Currently {title}
			</Text>
			<Box
				as="hr"
				border="1px"
				borderColor="current"
				w="20px"
				transition={createTransition("border-color")}
			/>
			<VStack spacing={4} justify="flex-start" align="flex-start" mt={4}>
				{currentlyItems.map(({ title, subtitle, genres }) => (
					<Flex
						flexDirection="row"
						justify="space-between"
						w="full"
						borderBottom="1px"
						borderColor={fade(theme.colors[borderColor], borderOpacity)}
						pb={4}
						key={`${title}-currently-reading`}
					>
						<Box flex="0 0 100%">
							<Text
								fontSize="md"
								fontWeight={500}
								lineHeight={1.1}
								transition={createTransition("color")}
							>
								{title}
							</Text>
							<Text
								textStyle="paragraph"
								fontWeight={300}
								lineHeight={1.1}
								fontSize="sm"
								mt={1}
								fontStyle="italic"
								transition={createTransition("color")}
							>
								{subtitle}
							</Text>
							<Flex wrap="wrap" mt={3} mb="-2px" gap="3px">
								{genres.map((genre) => (
									<Text
										opacity={tagOpacity}
										userSelect="none"
										borderRadius="sm"
										bg="var(--text-color)"
										color="var(--bg-color)"
										fontWeight={400}
										fontSize="10px"
										lineHeight={1}
										px="5px"
										py={1}
										mb="2px"
										textTransform="uppercase"
										transition={createTransition(["background-color", "color"])}
										key={`${title}-currently-reading-${genre}-genre`}
									>
										{genre}
									</Text>
								))}
							</Flex>
						</Box>
					</Flex>
				))}
			</VStack>
		</Box>
	)
}

export default CurrentlyBox
