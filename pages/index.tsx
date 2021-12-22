import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import { FeaturedProjectCard } from "@components/Home"
import { Hyperlink, Paragraph } from "@components/Typography"
import HeadshotImage from "@images/home/headshot.jpeg"
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

	return {
		props: {
			featuredProjects,
		},
	}
}

type HomePageProps = {
	featuredProjects: Project[]
}

const HomePage: NextPage<HomePageProps> = ({ featuredProjects }) => {
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
					<Text
						as="p"
						opacity={0.8}
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
		</VStack>
	)
}

export default HomePage
