import { Button, ButtonProps } from "@material-ui/core"
import clsx from "clsx"
import { useBorderedButtonStyles } from "./BorderedButton.styles"

interface BorderedButtonProps extends ButtonProps {
	active?: boolean
}

const BorderedButton: React.FC<BorderedButtonProps> = ({
	children,
	active,
	className,
	...props
}) => {
	const classes = useBorderedButtonStyles({ active: active || false })

	return (
		<Button {...props} className={clsx(classes.root, className)}>
			{children}
		</Button>
	)
}

export default BorderedButton
