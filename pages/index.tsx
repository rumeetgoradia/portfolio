import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import HeadshotImage from "@images/home/headshot.jpeg"
import type { NextPage } from "next"
import NextImage from "next/image"
import { createTransition } from "utils/transition"

const HomePage: NextPage = () => {
	return (
		<VStack spacing={12} justify="flex-start" align="flex-start">
			<Flex
				flexDirection={{ base: "column", md: "row" }}
				justify={{ base: "flex-start", md: "space-between" }}
			>
				<Box
					flex="1 1 auto"
					w="80px"
					h="80px"
					borderRadius="50%"
					overflow="hidden"
					display={{ md: "none" }}
					mb={8}
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
						fontSize={{ base: "3xl", md: "5xl" }}
						fontWeight="bold"
						letterSpacing={{ base: -1, md: -2 }}
						lineHeight={1}
					>
						Rumeet Goradia
					</Text>
					<Text as="h2" fontSize={{ base: "lg", md: "xl" }} fontWeight={300}>
						Software Engineer @{" "}
						<Box as="strong" fontWeight={500}>
							Schonfeld
						</Box>
					</Text>
					<Text as="p" fontSize="md" opacity={0.8} mt={6}>
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
			<Box>
				<Text
					as="h3"
					fontSize={{ base: "xl", md: "2xl" }}
					fontWeight={600}
					letterSpacing={-1}
				>
					Featured Projects
				</Text>
			</Box>
		</VStack>
	)
}

export default HomePage
