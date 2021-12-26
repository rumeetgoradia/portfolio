import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import { CurrentlyBox, CurrentlyItem, TopTracks } from "@components/About"
import { Hyperlink } from "@components/Typography"
import notion from "@notion"
import type { GetStaticProps, NextPage } from "next"
import { NextSeo } from "next-seo"
import NextLink from "next/link"

export const getStaticProps: GetStaticProps = async () => {
	// Currently reading
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

	const currentlyReading: CurrentlyItem[] = []
	for (const result of currentlyReadingResults) {
		currentlyReading.push({
			title: result.properties["Title"].title[0]["plain_text"],
			subtitle: result.properties["Author"]["rich_text"][0]["plain_text"],
			genres: result.properties["Genre"]["multi_select"].map(
				(genreObject: { name: string }) => genreObject.name
			),
		})
	}

	// Currently watching
	const { results: currentlyWatchingResults } = await notion.databases.query({
		database_id: process.env.NOTION_WATCHING_DB_ID,
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
				direction: "ascending",
			},
		],
	})

	const currentlyWatching: CurrentlyItem[] = []
	for (const result of currentlyWatchingResults) {
		currentlyWatching.push({
			title: result.properties["Title"].title[0]["plain_text"],
			genres: result.properties["Genre"]["multi_select"].map(
				(genreObject: { name: string }) => genreObject.name
			),
		})
	}

	// Currently playing
	const { results: currentlyPlayingResults } = await notion.databases.query({
		database_id: process.env.NOTION_PLAYING_DB_ID,
		filter: {
			property: "Status",
			select: {
				equals: "Playing",
			},
		},
		sorts: [
			{
				property: "Status",
				timestamp: "last_edited_time",
				direction: "ascending",
			},
		],
	})

	const currentlyPlaying: CurrentlyItem[] = []
	for (const result of currentlyPlayingResults) {
		currentlyPlaying.push({
			title: result.properties["Title"].title[0]["plain_text"],
			genres: result.properties["Genre"]["multi_select"].map(
				(genreObject: { name: string }) => genreObject.name
			),
		})
	}

	return {
		props: { currentlyReading, currentlyWatching, currentlyPlaying },
	}
}

type AboutPageProps = {
	currentlyReading: CurrentlyItem[]
	currentlyWatching: CurrentlyItem[]
	currentlyPlaying: CurrentlyItem[]
}

const AboutPage: NextPage<AboutPageProps> = ({
	currentlyReading,
	currentlyWatching,
	currentlyPlaying,
}) => {
	return (
		<>
			<NextSeo title="About" />
			<VStack spacing={8} justify="flex-start" align="flex-start" as="main">
				<Box>
					<Text as="h1" textStyle="header">
						About Me
					</Text>
					<VStack spacing={4} justify="flex-start" align="flex-start">
						<Text textStyle="paragraph">
							Hey! I&apos;m Rumeet Goradia. I&apos;m currently a Software
							Engineer at Schonfeld Strategic Advisors in New York City. I
							mostly work on back-end microservices that serve as the backbone
							for much of the firm&apos;s operations, using Java, PostgreSQL,
							Kafka, and many other tools. On the other hand, most of my
							personal projects deal with front-end technologies, most often
							Next.js.
						</Text>
						<Text textStyle="paragraph">
							I recently graduated from the Rutgers University Honors College in
							New Brunswick, New Jersey. I double majored in Computer Science
							and Business Analytics & Information Technology. I served as the
							founding Director of Recruitment for the Road to Silicon V/Alley
							Program and was also involved in various other organizations on
							campus, including Alpha Kappa Psi, TEDxRutgers, and Road to Wall
							Street.
						</Text>
						<Text textStyle="paragraph">
							In my free time, I&apos;m usually at the gym, playing video games,
							or hanging out with my friends. I also recently picked up reading
							again and have been really enjoying modern novels.
						</Text>
						<Text textStyle="paragraph">
							Please feel free to{" "}
							<NextLink href="/contact" passHref>
								<Hyperlink title="Contact">reach out</Hyperlink>
							</NextLink>{" "}
							if you would like to get in touch!
						</Text>
					</VStack>
				</Box>
				<Box w="full">
					<Flex
						gap={8}
						mb={4}
						w="full"
						direction={{ base: "column", md: "row" }}
					>
						<Box flexBasis="33.333%">
							<CurrentlyBox title="reading" currentlyItems={currentlyReading} />
						</Box>
						<Box flexBasis="33.333%">
							<CurrentlyBox
								title="watching"
								currentlyItems={currentlyWatching}
							/>
						</Box>
						<Box flexBasis="33.333%">
							<CurrentlyBox title="playing" currentlyItems={currentlyPlaying} />
						</Box>
					</Flex>
				</Box>
				<Box w="full">
					<Text as="h2" textStyle="subheader">
						Top Tracks
					</Text>
					<Text textStyle="paragraph">
						The songs I listen to the most, updated daily via Spotify.
					</Text>
					<Box w="full">
						<TopTracks />
					</Box>
				</Box>
			</VStack>
		</>
	)
}

export default AboutPage
