import { Box, Flex, Text } from "@chakra-ui/react"
import { Carousel, CarouselImage, FeaturedWorkCard } from "@components/Home"
import { Hyperlink } from "@components/Hyperlink"
import { Layout } from "@components/Layout"
import HeadshotImage from "@images/home/headshot.jpeg"
import imagekit, { ImageKitResponse } from "@lib/imagekit"
import { createTransition } from "@utils"
import { Work, WORK } from "@work"
import type { GetStaticProps, NextPage } from "next"
import NextImage from "next/image"
import NextLink from "next/link"
import { getPlaiceholder } from "plaiceholder"
import React from "react"

export const getStaticProps: GetStaticProps = async () => {
	// Carousel
	const carouselImages: CarouselImage[] = []
	await imagekit
		.listFiles({
			path: "carousel",
		})
		.then(async (result: ImageKitResponse[]) => {
			for (const item of result) {
				const { width, height, url } = item
				const { base64 } = await getPlaiceholder(url)
				carouselImages.push({
					src: url,
					width,
					height,
					blurDataUrl: base64,
				})
			}
		})
		.catch((error: any) => console.error(error))

	// Featured work
	const featuredWork = WORK.filter((work) => work.isFeatured).slice(0, 3)
	await imagekit
		.listFiles({
			path: "work",
		})
		.then(async (result: ImageKitResponse[]) => {
			for (const work of featuredWork) {
				const { url } = result.filter((item) =>
					item.filePath.includes(work.imageSlug)
				)[0]
				const { base64 } = await getPlaiceholder(url)
				work.imagePath = url
				work.imageBase64 = base64
			}
		})
		.catch((error: any) => console.error(error))

	return {
		props: {
			featuredWork,
			carouselImages,
		},
		revalidate: 60,
	}
}

type HomePageProps = {
	featuredWork: Work[]
	carouselImages: CarouselImage[]
}

const HomePage: NextPage<HomePageProps> = ({
	featuredWork,
	carouselImages,
}) => {
	return (
		<Layout>
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
					filter="grayscale(0.2)"
					transition={createTransition(["filter"])}
					_hover={{
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
		</Layout>
	)
}

export default HomePage
