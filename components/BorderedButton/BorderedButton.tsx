import { Button, ButtonProps } from "@material-ui/core"
import { useBorderedButtonStyles } from "./BorderedButton.styles"

interface BorderedButtonProps extends ButtonProps {
	active: boolean
}

const BorderedButton: React.FC<BorderedButtonProps> = ({
	children,
	active,
	...props
}) => {
	const classes = useBorderedButtonStyles({ active })

	return (
		<Button {...props} className={classes.root}>
			{children}
		</Button>
	)
}

export default BorderedButton
