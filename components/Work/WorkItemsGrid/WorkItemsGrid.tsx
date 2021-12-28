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
import type { Work } from "@work"
import NextImage from "next/image"
import { Fragment, useEffect, useState } from "react"
import Masonry from "react-masonry-css"

type WorkItemsGridProps = {
	workItems: Work[]
}

const WorkItemsGrid: React.FC<WorkItemsGridProps> = ({ workItems }) => {
	const theme = useTheme()
	const bg = useColorModeValue("white", "black")
	const borderColor = useColorModeValue("black", "white")
	const borderOpacity = useColorModeValue(0.4, 0.2)
	const tagOpacity = useColorModeValue(0.35, 0.5)

	const [displayedWorkItems, setDisplayedWorkItems] =
		useState<Work[]>(workItems)
	const [tagsFilters, setTagsFilters] = useState<string[]>([])

	useEffect(() => {
		if (!tagsFilters.length) {
			setDisplayedWorkItems(workItems)
		} else {
			setDisplayedWorkItems(
				workItems.filter((workItem) =>
					workItem.tags.some((tag) => tagsFilters.includes(tag.toLowerCase()))
				)
			)
		}
	}, [tagsFilters, workItems])

	const handleClick = (tag: string) => {
		const newTagsFilters = [...tagsFilters]
		const index = newTagsFilters.indexOf(tag.toLowerCase())
		if (index === -1) {
			newTagsFilters.push(tag.toLowerCase())
		} else {
			newTagsFilters.splice(index, 1)
		}

		setTagsFilters(newTagsFilters)
	}

	return (
		<Box
			w="full"
			sx={{
				".work-items-grid": {
					display: "flex",
					ml: -4,
					mb: -4,
					w: "auto",
				},
				".work-items-grid-col": {
					pl: 4,
					bgClip: "padding-box",
				},
				".work-items-grid-item": {
					mb: 4,
				},
			}}
		>
			<Masonry
				className="work-items-grid"
				columnClassName="work-items-grid-col"
				breakpointCols={{ default: 2, 640: 1 }}
			>
				{displayedWorkItems.map(
					({
						title,
						description,
						liveUrl,
						repoUrl,
						tags,
						imagePath,
						imageBase64,
					}) => (
						<Box
							role="group"
							w="full"
							borderRadius="md"
							overflow="hidden"
							border="1px"
							borderColor={fade(theme.colors[borderColor], borderOpacity)}
							bg={fade(theme.colors[bg], 0.9)}
							backdropFilter="saturate(180%) blur(5px)"
							sx={{
								"@supports not (backdrop-filter: none)": {
									backdropFilter: "none",
								},
							}}
							transition={createTransition(["border-color, background-color"])}
							_hover={{ borderColor: "current" }}
							className="work-items-grid-item"
							key={`${title}-work`}
						>
							<Box h="25vh" w="full" position="relative">
								<NextImage
									src={imagePath || ""}
									layout="fill"
									objectFit="cover"
									objectPosition="center center"
									placeholder="blur"
									blurDataURL={imageBase64}
								/>
							</Box>
							<Box w="full" p={4}>
								<Text
									as="h4"
									fontSize="lg"
									fontWeight={600}
									lineHeight={1.2}
									transition={createTransition("color")}
								>
									{title}
								</Text>
								<Text textStyle="paragraph" mt={1}>
									{description}
								</Text>
								<Flex gap={2} mt={6}>
									{[liveUrl, repoUrl].map((url, index) => {
										const liveOrRepo = index === 0 ? "Live" : "Repo"
										return (
											<Fragment
												key={`${title}-featured-project-${liveOrRepo}-link`}
											>
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
								<Flex wrap="wrap" mt={3} mb="-2px" gap="3px">
									{tags.map((tag) => {
										const isActive = tagsFilters.includes(tag.toLowerCase())

										return (
											<Text
												onClick={() => handleClick(tag)}
												opacity={isActive ? 1 : tagOpacity}
												cursor="pointer"
												userSelect="none"
												borderRadius="sm"
												bg={isActive ? "brand" : "var(--text-color)"}
												color={"var(--bg-color)"}
												fontSize="10px"
												lineHeight={1}
												px="5px"
												py={1}
												mb="2px"
												textTransform="uppercase"
												transition={createTransition([
													"background-color",
													"color",
													"opacity",
												])}
												_hover={{
													opacity: isActive ? 1 : tagOpacity + 0.25,
												}}
												key={`${title}-work-${tag}-tag`}
											>
												{tag}
											</Text>
										)
									})}
								</Flex>
							</Box>
						</Box>
					)
				)}
			</Masonry>
		</Box>
	)
}

export default WorkItemsGrid
