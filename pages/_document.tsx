import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/core/styles"
import NextDocument, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document"
import React from "react"
import { ServerStyleSheet as StyledComponentSheets } from "styled-components"

export default class Document extends NextDocument {
	static async getInitialProps(ctx: DocumentContext) {
		const styledComponentSheet = new StyledComponentSheets()
		const materialUiSheets = new MaterialUiServerStyleSheets()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: Function) => (props: Object) => {
						return styledComponentSheet.collectStyles(
							materialUiSheets.collect(<App {...props} />)
						)
					},
				})

			const initialProps = await NextDocument.getInitialProps(ctx)

			return {
				...initialProps,
				styles: [
					<React.Fragment key="styles">
						{initialProps.styles}
						{materialUiSheets.getStyleElement()}
						{styledComponentSheet.getStyleElement()}
					</React.Fragment>,
				],
			}
		} finally {
			styledComponentSheet.seal()
		}
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
						rel="stylesheet"
					/>
					<link rel="icon" href="/favicon.ico" />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
