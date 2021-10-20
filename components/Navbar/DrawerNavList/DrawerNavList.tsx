import { IconButton } from "@chakra-ui/button"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { useDisclosure } from "@chakra-ui/hooks"
import { Flex, Link, VStack } from "@chakra-ui/layout"
import {
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
} from "@chakra-ui/modal"
import { Drawer } from "@chakra-ui/react"
import { Logo } from "@components/Logo"
import { NAV_ITEMS } from "@constants"
import { createTransition } from "@utils"
import { useRouter } from "next/dist/client/router"
import NextLink from "next/link"
import React from "react"
import { VscMenu } from "react-icons/vsc"

const DrawerNavList: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = React.useRef<HTMLButtonElement>(null)

	const bg = useColorModeValue("white", "black")

	const router = useRouter()

	return (
		<>
			<IconButton
				aria-label="Open navigation"
				icon={<VscMenu />}
				ref={btnRef}
				onClick={onOpen}
				display={{ base: "inherit", md: "none" }}
				w="24px"
				h="24px"
				bg="none"
				_hover={{
					bg: "none",
					color: "brand",
				}}
				_focus={{
					bg: "none",
					color: "brand",
				}}
				_active={{
					bg: "none",
				}}
				transition={createTransition("color", "fast")}
			/>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
				size="full"
			>
				<DrawerOverlay zIndex={100000} display={{ md: "none" }}>
					<DrawerContent bg={bg} px={8}>
						<Flex p={4} w="full" justifyContent="space-between">
							<NextLink href="/" passHref>
								<Logo
									onClick={onClose}
									height="24px"
									width="auto"
									fill="currentcolor"
									cursor="pointer"
									mt={1}
									_hover={{
										fill: "brand",
									}}
									transition={createTransition("fill")}
								/>
							</NextLink>
							<DrawerCloseButton
								position="static"
								_hover={{ color: "brand" }}
								_focus={{ color: "brand" }}
								_active={{ bg: "none" }}
							/>
						</Flex>

						<DrawerBody py={8}>
							<VStack spacing={8}>
								{NAV_ITEMS.map((navItem) => {
									const path = `/${navItem}`
									const isActive = router.pathname === path

									return (
										<NextLink href={path} passHref key={`${navItem}-nav-item`}>
											<Link
												onClick={onClose}
												lineHeight={1}
												letterSpacing={1}
												pl="7px"
												pr="6px"
												pt="4px"
												pb="4px"
												textDecoration="none"
												fontSize="3xl"
												cursor="pointer"
												position="relative"
												color={isActive ? "brand" : "currentcolor"}
												_hover={{
													_after: {
														opacity: 1,
													},
													textDecoration: "none",
												}}
												_focus={{
													_after: {
														opacity: 1,
													},
													textDecoration: "none",
												}}
												_after={{
													content: '""',
													w: isActive ? "full" : "90%",
													h: "1px",
													opacity: isActive ? 1 : 0,
													position: "absolute",
													bgColor: isActive ? "brand" : "currentcolor",
													left: "50%",
													bottom: 0,
													transform: "translateX(-50%)",
													transition: createTransition(["opacity", "width"]),
												}}
											>
												{navItem.toUpperCase()}
											</Link>
										</NextLink>
									)
								})}
							</VStack>
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	)
}

export default DrawerNavList
