import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { createTransition } from "@utils"
import { IoIosMoon, IoMdSunny } from "react-icons/io"

const ThemeToggle: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const bg = useColorModeValue("white", "black")

	return (
		<Flex
			justify="center"
			align="center"
			aria-label="Toggle theme"
			overflow="hidden"
		>
			<Box
				as="label"
				position="relative"
				display="inline-block"
				w="45px"
				h="25px"
				m={0}
				zIndex={1700 - 2}
			>
				<Box
					as="input"
					id="theme-toggle"
					name="theme-toggle"
					type="checkbox"
					checked={colorMode === "dark"}
					onChange={toggleColorMode}
					opacity={0}
					w={0}
					h={0}
				/>
				<Box
					as="span"
					position="absolute"
					cursor="pointer"
					top={0}
					left={0}
					right={0}
					bottom={0}
					borderRadius="27px"
					w="45px"
					h="25px"
					zIndex={1700 - 1}
					bg="currentcolor"
					transition={createTransition("background")}
				>
					<Flex
						as="span"
						justify="center"
						align="center"
						lineHeight={1}
						position="absolute"
						h="17px"
						w="17px"
						borderRadius="50%"
						left="4px"
						bottom="4px"
						fontSize="15px"
						bg={bg}
						color="currentcolor"
						transform={colorMode === "dark" ? "translateX(20px)" : ""}
						transition={createTransition(["transform"])}
					>
						{colorMode === "dark" ? <IoIosMoon /> : <IoMdSunny />}
					</Flex>
				</Box>
			</Box>
		</Flex>
	)
}

export default ThemeToggle
