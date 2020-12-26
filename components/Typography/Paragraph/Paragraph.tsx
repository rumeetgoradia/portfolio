import { Typography } from "@material-ui/core"

const Paragraph: React.FC = ({ children }) => {
	return (
		<Typography variant="body1" align="justify">
			{children}
		</Typography>
	)
}

export default Paragraph
