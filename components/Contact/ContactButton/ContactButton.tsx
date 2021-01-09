import { Box } from "@material-ui/core"
import { ContactLink } from "../../../constants"
import BorderedButton from "../../BorderedButton"
import { useContactButtonStyles } from "./ContactButton.styles"

interface ContactButtonProps {
	contactLink: ContactLink
}

const ContactButton: React.FC<ContactButtonProps> = ({ contactLink }) => {
	const classes = useContactButtonStyles()

	return (
		<BorderedButton href={contactLink.url} className={classes.root}>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="100%"
				className={classes.iconContainer}
			>
				{contactLink.icon}
			</Box>
			{contactLink.title}
		</BorderedButton>
	)
}

export default ContactButton
