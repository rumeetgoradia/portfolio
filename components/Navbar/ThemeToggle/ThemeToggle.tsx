import { Button, useColorMode } from "@chakra-ui/react"

const ThemeToggle: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Button w="40px" h="21px" onClick={toggleColorMode}>
			T
		</Button>
	)
}

export default ThemeToggle
