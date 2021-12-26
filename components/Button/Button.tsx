import {
	Button as ChakraButton,
	ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react"
import { createTransition } from "@utils"

type ButtonProps = ChakraButtonProps & {
	transitionProperties?: string[]
}

const Button: React.FC<ButtonProps> = ({
	children,
	transitionProperties,
	...props
}) => {
	return (
		<ChakraButton
			variant="unstyled"
			display="flex"
			justify="center"
			align="center"
			border="1px"
			borderColor="current"
			borderRadius="sm"
			bg="var(--bg-color)"
			textTransform="uppercase"
			fontWeight={400}
			fontSize="sm"
			lineHeight={1}
			letterSpacing={2}
			pl="5px"
			pr="3px"
			transition={createTransition(
				["transform", "border-color", "color", "background"].concat(
					transitionProperties || []
				),
				"normal",
				"ease-out"
			)}
			_hover={{
				bg: "var(--text-color)",
				color: "var(--bg-color)",
			}}
			_focus={{
				outline: "none",
				boxShadow: "none",
			}}
			_active={{
				transform: "scale(0.975)",
			}}
			{...props}
		>
			{children}
		</ChakraButton>
	)
}

export default Button
