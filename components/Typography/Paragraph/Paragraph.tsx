import { Text, TextProps, useColorModeValue } from "@chakra-ui/react"
import { createTransition } from "@utils"

const Paragraph: React.FC<TextProps> = ({ children, ...props }) => {
	const opacity = useColorModeValue(0.7, 0.6)
	return (
		<Text
			as="p"
			fontSize="md"
			opacity={opacity}
			transition={createTransition("color")}
			{...props}
		>
			{children}
		</Text>
	)
}

export default Paragraph
