import { Box, Flex, Text, useColorModeValue, useTheme } from "@chakra-ui/react"
import { Hyperlink } from "@components/Typography"
import fetcher from "@lib/fetcher"
import { TopTracks } from "@lib/spotify"
import { createTransition, fade } from "@utils"
import useSWR from "swr"
const TopTracks: React.FC = () => {
	const theme = useTheme()
	const borderColor = useColorModeValue("black", "white")
	const borderOpacity = useColorModeValue(0.1, 0.2)

	const { data } = useSWR<TopTracks>("/api/top-tracks", fetcher)

	if (!data) {
		return null
	}

	return (
		<Box w="full">
			{data.tracks.map(({ title, artist, trackUrl }, index) => (
				<Flex
					w="full"
					py={4}
					borderBottom="1px"
					borderColor={fade(theme.colors[borderColor], borderOpacity)}
					transition={createTransition("border-color")}
					key={`${title}-top-track`}
				>
					<Box flexBasis="15px" opacity={0.8}>
						<Text
							textStyle="paragraph"
							fontWeight={700}
							fontSize="xs"
							textAlign="right"
						>
							{index + 1}
						</Text>
					</Box>
					<Box ml={4}>
						<Hyperlink
							href={trackUrl}
							title={title}
							isExternal
							color="current"
							lineHeight={1}
							fontWeight={500}
						>
							<Text>{title}</Text>
						</Hyperlink>
						<Text textStyle="paragraph" fontSize="sm">
							{artist}
						</Text>
					</Box>
				</Flex>
			))}
		</Box>
	)
}

export default TopTracks
