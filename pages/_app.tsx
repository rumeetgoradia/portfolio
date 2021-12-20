import { Container } from "@chakra-ui/react"
import { Chakra } from "@components/Chakra"
import { Navbar } from "@components/Navbar"
import theme, { Fonts } from "@theme"
import { DefaultSeo } from "next-seo"
import SeoProps from "next-seo.config"
import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...SeoProps} />
			<Chakra cookies={pageProps.cookies} theme={theme}>
				<Fonts />
				<Navbar />
				<Container
					maxW="container.md"
					px={8}
					pt={{ base: "121px", md: "125px" }}
					pb={{ base: "137px", md: "141px" }}
				>
					<Component {...pageProps} />
				</Container>
			</Chakra>
		</>
	)
}

export { getServerSideProps } from "@components/Chakra"
