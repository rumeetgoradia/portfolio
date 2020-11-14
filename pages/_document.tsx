import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/core/styles"
import NextDocument, { DocumentContext } from "next/document"
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
}