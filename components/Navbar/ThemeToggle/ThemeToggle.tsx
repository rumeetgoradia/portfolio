import { useColorMode } from "@chakra-ui/color-mode"
import { Box, Flex } from "@chakra-ui/layout"
import { createTransition } from "@utils"
import { IoIosMoon } from "react-icons/io"
import { RiSunFill } from "react-icons/ri"

const ThemeToggle: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Box overflow="hidden">
			<Box
				as="label"
				htmlFor="theme-toggle"
				position="relative"
				display="inline-block"
				width="38px"
				height="22px"
				margin={0}
				zIndex={10000}
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
					borderRadius="22px"
					w="38px"
					h="22px"
					zIndex={10001}
					bgColor="currentcolor"
					transition={createTransition("background-color")}
				>
					<Flex
						as="span"
						position="absolute"
						justify="center"
						align="center"
						textAlign="center"
						h="14px"
						w="14px"
						borderRadius="50%"
						left="4px"
						bottom="4px"
						fontSize="12px"
						bgColor={colorMode === "dark" ? "gray.900" : "gray.50"}
						color="currentcolor"
						transform={colorMode === "dark" ? "translateX(16px)" : ""}
						transition={createTransition(["transform", "background-color"])}
					>
						{colorMode === "dark" ? <IoIosMoon /> : <RiSunFill />}
					</Flex>
				</Box>
			</Box>
		</Box>
	)
}

export default ThemeToggle
