import {
	Button as ChakraButton,
	ButtonProps,
	useColorModeValue,
} from "@chakra-ui/react"
import { createTransition } from "@utils"

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
	const currentBg = useColorModeValue("white", "black")
	const oppositeBg = useColorModeValue("black", "white")

	return (
		<ChakraButton
			variant="unstyled"
			display="flex"
			justify="center"
			align="center"
			border="1px"
			borderColor="current"
			borderRadius="sm"
			bg={currentBg}
			textTransform="uppercase"
			fontWeight={400}
			fontSize="sm"
			lineHeight={1}
			letterSpacing={2}
			pl="5px"
			pr="3px"
			transition={createTransition(
				["transform", "border-color", "color", "background"],
				"normal",
				"ease-out"
			)}
			_hover={{
				bg: oppositeBg,
				color: currentBg,
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
