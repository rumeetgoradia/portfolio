import { Box, Flex, Link, Text } from "@chakra-ui/react"
import { Button } from "@components/Button"
import { Project } from "@projects"
import { createTransition } from "@utils"
import NextImage from "next/image"
import { Fragment } from "react"

const FeaturedProjectCard: React.FC<Project> = ({
	title,
	imagePath,
	imageBase64,
	liveUrl,
	repoUrl,
}) => {
	return (
		<Flex
			direction="column"
			w="full"
			h="full"
			borderRadius="md"
			overflow="hidden"
			role="group"
			border="1px"
			borderColor="currentcolor"
			transition={createTransition(["transform", "border-color"])}
			_hover={{ transform: "scale(1.025)" }}
		>
			<Box h="15vh" w="full" position="relative">
				<NextImage
					src={`/images/projects/${imagePath}`}
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
											<Button w="full" size="sm">
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

export default FeaturedProjectCard
