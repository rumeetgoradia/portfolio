import Document, { Head, Html, Main, NextScript } from "next/document"
import React from "react"

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preload"
						href="/fonts/Inter.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					{/* TODO: Add favicon info */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
