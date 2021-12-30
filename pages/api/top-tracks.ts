import { getTopTracks, Track } from "@lib/spotify"
import type { NextApiRequest, NextApiResponse } from "next"
import defaultHandler from "./_defaultHandler"

const handler = defaultHandler<NextApiRequest, NextApiResponse>().get(
	async (req: NextApiRequest, res: NextApiResponse) => {
		const response = await getTopTracks()
		const { items } = await response.json()

		const tracks: Track[] = items.slice(0, 10).map((track: any) => ({
			artist: track.artists.map((_artist: any) => _artist.name).join(", "),
			trackUrl: track.external_urls.spotify,
			title: track.name,
		}))

		res.setHeader(
			"Cache-Control",
			"public, s-maxage=86400, stale-while-revalidate=43200"
		)

		return res.status(200).json({ tracks })
	}
)

export default handler
