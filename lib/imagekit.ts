var ImageKit = require("imagekit")

const imagekit = new ImageKit({
	publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
	privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
	urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
})

export default imagekit

export type ImageKitResponse = {
	width: number
	height: number
	url: string
	filePath: string
}
