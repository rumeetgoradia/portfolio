import { Container, Grid } from "@material-ui/core"
import { NextSeo } from "next-seo"
import React from "react"
import { useLayoutStyles } from "./Layout.styles"
interface LayoutProps {
	title: string
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
	const classes = useLayoutStyles()

	return (
		<>
			<NextSeo title={title} />
			<Container maxWidth="lg" className={classes.root}>
				<Grid container spacing={4}>
					{children}
				</Grid>
			</Container>
		</>
	)
}

export default Layout
