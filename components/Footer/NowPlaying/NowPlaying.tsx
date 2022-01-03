import { Box, Flex, Text } from "@chakra-ui/react"
import { Hyperlink } from "@components/Hyperlink"
import fetcher from "@lib/fetcher"
import { NowPlayingTrack } from "@lib/spotify"
import { createTransition } from "@utils"
import useSWR from "swr"
import { AnimatedBars } from "./AnimatedBars"

const NowPlaying: React.FC = () => {
	const { data } = useSWR<NowPlayingTrack>("/api/now-playing", fetcher, {
		refreshInterval: 60 * 1000,
	})

	return (
		<Flex gap={2}>
			<AnimatedBars animate={!!data?.trackUrl} />
			<Box>
				{data?.title && data?.trackUrl ? (
					<Hyperlink
						href={data.trackUrl}
						title={data.title}
						color="current"
						isExternal
					>
						<Text lineHeight={1} fontWeight="medium">
							{data.title}
						</Text>
					</Hyperlink>
				) : (
					<Text
						lineHeight={1}
						fontWeight="medium"
						transition={createTransition("color")}
					>
						Not Playing
					</Text>
				)}
				<Text
					textStyle="paragraph"
					mt={1}
					lineHeight={1}
					fontWeight={300}
					fontSize="sm"
				>
					{data?.artist ? data.artist : "Spotify"}
				</Text>
			</Box>
		</Flex>
	)
}

export default NowPlaying
