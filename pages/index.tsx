import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import { FeaturedProjectCard } from "@components/Home"
import { Hyperlink, Paragraph } from "@components/Typography"
import HeadshotImage from "@images/home/headshot.jpeg"
import notion from "@notion"
import { Project, PROJECTS } from "@projects"
import { createTransition } from "@utils"
import type { GetStaticProps, NextPage } from "next"
import NextImage from "next/image"
import NextLink from "next/link"
import { getPlaiceholder } from "plaiceholder"
import React from "react"

export const getStaticProps: GetStaticProps = async () => {
	const featuredProjects = PROJECTS.filter(
		(project) => project.isFeatured
	).slice(0, 3)

	for (const project of featuredProjects) {
		const { base64 } = await getPlaiceholder(
			`/images/projects/${project.imagePath}`
		)
		project.imageBase64 = base64
	}

	const { results: currentlyReadingResults } = await notion.databases.query({
		database_id: process.env.NOTION_READING_DB_ID,
		filter: {
			property: "Status",
			select: {
				equals: "In Progress",
			},
		},
		sorts: [
			{
				property: "Status",
				timestamp: "last_edited_time",
				direction: "descending",
			},
		],
	})
	console.log(currentlyReadingResults)

	const currentlyReadingBooks: Book[] = []
	for (const result of currentlyReadingResults) {
		const coverArtPath = `https://covers.openlibrary.org/b/isbn/${result.properties["ISBN"].number}-L.jpg`
		const { base64: coverArtBase64 } = await getPlaiceholder(coverArtPath)

		currentlyReadingBooks.push({
			title: result.properties["Title"].title[0]["plain_text"],
			author: result.properties["Author"]["rich_text"][0]["plain_text"],
			coverArtPath,
			coverArtBase64,
		})
	}

	return {
		props: {
			featuredProjects,
			currentlyReadingBooks,
		},
	}
}

type Book = {
	title: string
	author: string
	coverArtPath: string
	coverArtBase64: string
}

type HomePageProps = {
	featuredProjects: Project[]
	currentlyReadingBooks: Book[]
}

const HomePage: NextPage<HomePageProps> = ({
	featuredProjects,
	currentlyReadingBooks,
}) => {
	console.log(currentlyReadingBooks)
	return (
		<VStack
			spacing={{ base: 8, md: 12 }}
			justify="flex-start"
			align="flex-start"
		>
			<Flex
				flexDirection={{ base: "column", sm: "row" }}
				justify={{ base: "flex-start", md: "space-between" }}
				mb={{ base: 0, sm: -4, md: 0 }}
			>
				<Box
					flex="1 1 auto"
					w={{ base: "100px", sm: "80px" }}
					h={{ base: "100px", sm: "80px" }}
					borderRadius="50%"
					overflow="hidden"
					display={{ md: "none" }}
					mb={6}
					mr={{ sm: 6 }}
				>
					<NextImage
						src={HeadshotImage}
						placeholder="blur"
						alt="Rumeet Goradia"
					/>
				</Box>
				<Box flex={{ base: "1 1 auto", md: "0 1 65%" }}>
					<Text
						as="h1"
						color="brand"
						fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
						fontWeight="bold"
						letterSpacing={{ base: -1, md: -2 }}
						lineHeight={1.25}
					>
						Rumeet Goradia
					</Text>
					<Text
						as="h2"
						fontSize={{ base: "lg", sm: "xl" }}
						fontWeight={300}
						lineHeight={1.1}
						transition={createTransition("color")}
					>
						Software Engineer @{" "}
						<Box as="strong" fontWeight={500}>
							Schonfeld
						</Box>
					</Text>
					<Paragraph
						as="p"
						mt={{ base: 4, md: 6 }}
						display={{ base: "block", sm: "none", md: "block" }}
					>
						Recent graduate from Rutgers University. Currently exploring
						fin-tech. Specializing in full-stack development, principally Java
						and React.
					</Paragraph>
				</Box>
				<Box
					flex="0 1 25%"
					position="relative"
					borderRadius="lg"
					overflow="hidden"
					opacity={0.9}
					filter="grayscale(0.2)"
					transition={createTransition(["opacity", "filter"])}
					_hover={{
						opacity: 1,
						filter: "none",
					}}
					display={{ base: "none", md: "block" }}
				>
					<NextImage
						src={HeadshotImage}
						layout="fill"
						objectFit="cover"
						objectPosition="center center"
						placeholder="blur"
						alt="Rumeet Goradia"
					/>
				</Box>
			</Flex>
			<Paragraph display={{ base: "none", sm: "block", md: "none" }}>
				Recent graduate from Rutgers University. Currently exploring fin-tech.
				Specializing in full-stack development, principally Java and React.
			</Paragraph>
			<Box w="full">
				<Text as="h3" textStyle="sectionHeader">
					Featured Projects
				</Text>
				<Flex gap={4} mb={4} w="full" direction={{ base: "column", md: "row" }}>
					{featuredProjects.map((project) => (
						<Box flexBasis="33.333%" key={`${project.title}-featured-project`}>
							<FeaturedProjectCard {...project} />
						</Box>
					))}
				</Flex>
				<NextLink href="/projects" passHref>
					<Hyperlink title="Projects" withArrow>
						View all projects
					</Hyperlink>
				</NextLink>
			</Box>
			<Box w="200px" h="600px" position="relative" overflow="hidden">
				<NextImage
					src={currentlyReadingBooks[0].coverArtPath}
					layout="fill"
					objectFit="contain"
					objectPosition="center 0%"
					placeholder="blur"
					blurDataURL={currentlyReadingBooks[0].coverArtBase64}
				/>
			</Box>
		</VStack>
	)
}

export default HomePage
