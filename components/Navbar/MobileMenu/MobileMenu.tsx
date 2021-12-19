import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Link,
	useColorModeValue,
	useDisclosure,
	useTheme,
	VStack,
} from "@chakra-ui/react"
import { NAV_ITEMS } from "@constants"
import NextLink from "next/link"
import { fade } from "utils/opacity"
import { createTransition } from "utils/transition"

type MobileMenuProps = {
	activePath: string
}

const MobileMenu: React.FC<MobileMenuProps> = ({ activePath }) => {
	const { isOpen, onClose, onToggle } = useDisclosure()

	const theme = useTheme()
	const bg = useColorModeValue("white", "black")

	return (
		<>
			<Box
				as="button"
				onClick={onToggle}
				aria-label={`${isOpen ? "Close" : "Open"} menu`}
				zIndex={10000000}
				position="relative"
				w="21px"
				h="21px"
				display={{ md: "none" }}
				_focus={{ outline: "none" }}
			>
				{[1, 0, -1].map((v) => (
					<Box
						as="span"
						h="1px"
						w="100%"
						bg="currentColor"
						position="absolute"
						left="50%"
						borderRadius={1}
						opacity={v === 0 && isOpen ? 0 : 1}
						transition={createTransition([
							"transform",
							"background-color",
							"opacity",
						])}
						transform={
							isOpen
								? `translate(-50%, 0) rotate(${v * 45}deg)`
								: `translate(-50%, ${-v * -5.5}px)`
						}
						key={`hamburger-span-${v}`}
					/>
				))}
			</Box>
			<Drawer
				isOpen={isOpen}
				onClose={onClose}
				// initialFocusRef={btnRef}
				placement="bottom"
				size="full"
			>
				<DrawerOverlay display={{ md: "none" }} bg="transparent" />
				<DrawerContent display={{ md: "none" }} bg="transparent">
					<DrawerBody
						mt="101px"
						pb="101px"
						h="calc(100vh - 101px)"
						display="flex"
						flexDirection="column"
						justify="center"
						align="center"
						bg={fade(theme.colors[bg], 0.9)} //background
						backdropFilter="saturate(180%) blur(5px)"
						transition={createTransition("background-color")}
						sx={{
							"@supports not (backdrop-filter: none)": {
								backdropFilter: "none",
								bg,
							},
						}}
					>
						<Flex
							// h="full"
							flexGrow={1}
							justify="center"
							align="center"
							flexDirection="column"
						>
							<Button
								w={0}
								h={0}
								p={0}
								pointerEvents="none"
								variant="unstyled"
								_focus={{
									outline: "none",
									boxShadow: "none",
								}}
								// ref={btnRef}
							/>
							<VStack w="full" spacing={4}>
								{[{ title: "Home", path: "/" }]
									.concat(NAV_ITEMS)
									.map(({ title, path }) => (
										<NextLink href={path} passHref key={`${title}-nav-item`}>
											<Link
												onClick={onClose}
												title={title}
												fontSize="2xl"
												textTransform="uppercase"
												fontWeight={250}
												letterSpacing={2}
												pl="2px"
												pr={0}
												textDecoration="none !important"
												position="relative"
												_hover={{
													_after: {
														width: "50%",
													},
												}}
												_focus={{
													outline: "none",
												}}
												_active={{ transform: "scale(0.975)" }}
												_after={{
													content: '""',
													position: "absolute",
													bottom: 0,
													left: "50%",
													height: "1px",
													width: activePath === path ? "110% !important" : 0,
													transform: "translateX(-50%)",
													bg: "currentColor",
													transition: createTransition("width"),
												}}
											>
												{title}
											</Link>
										</NextLink>
									))}
							</VStack>
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default MobileMenu
