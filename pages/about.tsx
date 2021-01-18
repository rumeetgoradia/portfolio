import { getBase64 } from "@plaiceholder/base64"
import { getImage } from "@plaiceholder/next"
import { GetStaticProps } from "next"
import { Interests, Introduction, Skills } from "../components/About"
import Layout from "../components/Layout"
import Base from "../components/Layout/Base"

export const getStaticProps: GetStaticProps = async () => {
	const imgSrc = "/images/profile.jpg"
	const img = await getImage(imgSrc)
	const imgBase64 = await getBase64(img)

	return {
		props: {
			imgBase64,
			imgSrc,
		},
	}
}

interface AboutPageProps {
	imgBase64: string
	imgSrc: string
}

const AboutPage: React.FC<AboutPageProps> = ({ imgBase64, imgSrc }) => {
	return (
		<Layout title={"About"}>
			<Base xs={12}>
				<Introduction imgBase64={imgBase64} imgSrc={imgSrc} />
			</Base>
			<Base xs={12}>
				<Skills />
			</Base>
			<Base xs={12}>
				<Interests />
			</Base>
		</Layout>
	)
}

export default AboutPage
