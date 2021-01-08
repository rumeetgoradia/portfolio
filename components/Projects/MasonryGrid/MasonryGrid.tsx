import { useTheme } from "@material-ui/core"
import Masonry from "react-masonry-css"
import { useMasonryGridStyles } from "./MasonryGrid.styles"

const MasonryGrid: React.FC = ({ children }) => {
	const theme = useTheme()
	const breakpoints = {
		default: 3,
		[theme.breakpoints.values.md]: 2,
		[theme.breakpoints.values.sm]: 1,
	}

	const classes = useMasonryGridStyles()

	return (
		<Masonry
			breakpointCols={breakpoints}
			columnClassName={classes.col}
			className={classes.root}
		>
			{children}
		</Masonry>
	)
}

export default MasonryGrid
