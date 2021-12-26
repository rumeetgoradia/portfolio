import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import { Carousel, CarouselImage, FeaturedWorkCard } from "@components/Home"
import { Hyperlink } from "@components/Typography"
import HeadshotImage from "@images/home/headshot.jpeg"
import { createTransition } from "@utils"
import { Work, WORK } from "@work"
import { promises as fs } from "fs"
import sizeof from "image-size"
import type { GetStaticProps, NextPage } from "next"
import NextImage from "next/image"
import NextLink from "next/link"
import path from "path"
import { getPlaiceholder } from "plaiceholder"
import React from "react"
// import { Document, Page, pdfjs } from "react-pdf"
// @ts-ignore
// import url from "pdfjs-dist/build/pdf.worker"

// pdfjs.GlobalWorkerOptions.workerSrc = url

export const getStaticProps: GetStaticProps = async () => {
	// Carousel
	const carouselImagesDirectory = path.resolve(
		process.cwd(),
		"public",
		"images",
		"home",
		"carousel"
	)
	const filenames = await fs.readdir(carouselImagesDirectory)
	const carouselImages = filenames.map(async (filename) => {
		const { width, height, orientation } = sizeof(
			path.join(carouselImagesDirectory, filename)
		)
		const src = `/images/home/carousel/${filename}`
		const { base64 } = await getPlaiceholder(src)
		return {
			src,
			width: orientation === 6 ? height : width,
			height: orientation === 6 ? width : height,
			blurDataUrl: base64,
		}
	})

	// Featured projects
	const featuredWork = WORK.filter((work) => work.isFeatured).slice(0, 3)

	for (const work of featuredWork) {
		const { base64 } = await getPlaiceholder(`/images/work/${work.imagePath}`)
		work.imageBase64 = base64
	}

	// const { results: currentlyReadingResults } = await notion.databases.query({
	// 	database_id: process.env.NOTION_READING_DB_ID,
	// 	filter: {
	// 		property: "Status",
	// 		select: {
	// 			equals: "In Progress",
	// 		},
	// 	},
	// 	sorts: [
	// 		{
	// 			property: "Status",
	// 			timestamp: "last_edited_time",
	// 			direction: "descending",
	// 		},
	// 	],
	// })

	// const currentlyReadingBooks: Book[] = []
	// for (const result of currentlyReadingResults) {
	// 	const coverArtPath = `https://covers.openlibrary.org/b/isbn/${result.properties["ISBN"].number}-L.jpg`
	// 	const { base64: coverArtBase64 } = await getPlaiceholder(coverArtPath)

	// 	currentlyReadingBooks.push({
	// 		title: result.properties["Title"].title[0]["plain_text"],
	// 		author: result.properties["Author"]["rich_text"][0]["plain_text"],
	// 		coverArtPath,
	// 		coverArtBase64,
	// 	})
	// }

	return {
		props: {
			featuredWork,
			carouselImages: await Promise.all(carouselImages),
		},
	}
}

// type Book = {
// 	title: string
// 	author: string
// 	coverArtPath: string
// 	coverArtBase64: string
// }

type HomePageProps = {
	featuredWork: Work[]
	carouselImages: CarouselImage[]
}

const HomePage: NextPage<HomePageProps> = ({
	featuredWork,
	carouselImages,
}) => {
	return (
		<VStack spacing={8} justify="flex-start" align="flex-start" as="main">
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
					<Text
						textStyle="paragraph"
						mt={{ base: 4, md: 6 }}
						display={{ base: "block", sm: "none", md: "block" }}
					>
						Recent graduate from Rutgers University. Currently exploring
						fin-tech. Specializing in full-stack development, principally Java
						and React.
					</Text>
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
			<Text
				textStyle="paragraph"
				display={{ base: "none", sm: "block", md: "none" }}
			>
				Recent graduate from Rutgers University. Currently exploring fin-tech.
				Specializing in full-stack development, principally Java and React.
			</Text>
			<Box w="full">
				<Carousel images={carouselImages} />
			</Box>
			<Box w="full">
				<Text as="h3" textStyle="subheader">
					Featured Work
				</Text>
				<Flex gap={4} mb={4} w="full" direction={{ base: "column", md: "row" }}>
					{featuredWork.map((work) => (
						<Box flexBasis="33.333%" key={`${work.title}-featured-project`}>
							<FeaturedWorkCard {...work} />
						</Box>
					))}
				</Flex>
				<NextLink href="/work" passHref>
					<Hyperlink title="Work" withArrow>
						View all work
					</Hyperlink>
				</NextLink>
			</Box>
		</VStack>
	)
}

export default HomePage
