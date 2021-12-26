import { CarouselImage } from "@components/Home"
import { promises as fs } from "fs"
import sizeof from "image-size"
import type { NextApiRequest, NextApiResponse } from "next"
import path from "path"
import { getPlaiceholder } from "plaiceholder"

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// Carousel
	const carouselImagesDirectory = path.resolve(
		process.cwd(),
		"public",
		"images",
		"home",
		"carousel"
	)
	const filenames = await fs.readdir(carouselImagesDirectory)
	const carouselImages: CarouselImage[] = []
	for (const filename of filenames) {
		const { width, height, orientation } = sizeof(
			path.join(carouselImagesDirectory, filename)
		)
		const src = `/images/home/carousel/${filename}`
		const { base64 } = await getPlaiceholder(src)
		carouselImages.push({
			src,
			width: orientation === 6 ? height || 0 : width || 0,
			height: orientation === 6 ? width || 0 : height || 0,
			blurDataUrl: base64,
		})
	}

	return res.status(200).json({ carouselImages })
}
