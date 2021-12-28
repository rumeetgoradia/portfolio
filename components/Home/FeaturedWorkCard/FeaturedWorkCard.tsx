import {
	Box,
	Flex,
	Link,
	Text,
	useColorModeValue,
	useTheme,
} from "@chakra-ui/react"
import { Button } from "@components/Button"
import { createTransition, fade } from "@utils"
import NextImage from "next/image"
import { Fragment } from "react"
import { Work } from "work"

const FeaturedWorkCard: React.FC<Work> = ({
	title,
	imagePath,
	imageBase64,
	liveUrl,
	repoUrl,
}) => {
	const theme = useTheme()
	const bg = useColorModeValue("white", "black")
	const borderColor = useColorModeValue("black", "white")
	const borderOpacity = useColorModeValue(0.4, 0.2)

	return (
		<Flex
			direction="column"
			w="full"
			h="full"
			borderRadius="md"
			overflow="hidden"
			role="group"
			border="1px"
			borderColor={fade(theme.colors[borderColor], borderOpacity)}
			bg={fade(theme.colors[bg], 0.9)}
			backdropFilter="saturate(180%) blur(5px)"
			sx={{
				"@supports not (backdrop-filter: none)": {
					backdropFilter: "none",
				},
			}}
			transition={createTransition([
				"transform",
				"border-color, background-color",
			])}
			_hover={{ transform: "scale(1.025)", borderColor: "currentcolor" }}
		>
			<Box h="15vh" w="full" position="relative">
				<NextImage
					src={imagePath || ""}
					layout="fill"
					objectFit="cover"
					objectPosition="center center"
					placeholder="blur"
					blurDataURL={imageBase64}
				/>
			</Box>
			<Box borderTop="none" p={4} flexGrow={1}>
				<Flex direction="column" h="full" justify="space-between">
					<Text
						as="h4"
						fontSize="lg"
						fontWeight={600}
						lineHeight={1.2}
						transition={createTransition("color")}
					>
						{title}
					</Text>
					<Flex gap={2} mt={4}>
						{[liveUrl, repoUrl].map((url, index) => {
							const liveOrRepo = index === 0 ? "Live" : "Repo"
							return (
								<Fragment key={`${title}-featured-project-${liveOrRepo}-link`}>
									{url && (
										<Link
											href={url}
											variant="unstyled"
											w="full"
											textDecoration="none !important"
											title={`${title} – ${liveOrRepo}`}
											isExternal
										>
											<Button
												w="full"
												size="sm"
												opacity={borderOpacity}
												transitionProperties={["opacity"]}
												_groupHover={{ opacity: 1 }}
											>
												{liveOrRepo}
											</Button>
										</Link>
									)}
								</Fragment>
							)
						})}
					</Flex>
				</Flex>
			</Box>
		</Flex>
	)
}

export default FeaturedWorkCard
