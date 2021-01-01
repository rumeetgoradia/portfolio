import { Container, Grid } from "@material-ui/core"
import { NextSeo } from "next-seo"
import React from "react"
import { useStyles } from "./styles"
interface LayoutProps {
	title: string
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
	// const containerRef = useRef<HTMLDivElement>(null)
	// const paperRef = useRef<HTMLDivElement>(null)

	// const theme = useTheme()

	// const addBottomMarginToContainer = () => {
	// 	if (containerRef.current && paperRef.current) {
	// 		const paperHeight = paperRef.current.offsetHeight + theme.spacing(14)
	// 		if (paperHeight > window.innerHeight - theme.spacing(12)) {
	// 			containerRef.current.style.marginBottom = `${theme.spacing(12)}px`
	// 		} else {
	// 			const marginBottom = window.innerHeight - paperHeight - 62
	// 			containerRef.current.style.marginBottom = `${marginBottom}px`
	// 		}
	// 	}
	// }

	// useEffect(() => {
	// 	window.addEventListener("resize", addBottomMarginToContainer)
	// 	return () => {
	// 		window.removeEventListener("resize", addBottomMarginToContainer)
	// 	}
	// })

	// useEffect(() => {
	// 	addBottomMarginToContainer()
	// }, [containerRef.current, paperRef.current])

	const classes = useStyles()

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
