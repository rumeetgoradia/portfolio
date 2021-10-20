import { IconButton } from "@chakra-ui/button"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Link, VStack } from "@chakra-ui/layout"
import { DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/modal"
import { Drawer } from "@chakra-ui/react"
import { NAV_ITEMS } from "@constants"
import { createTransition } from "@utils"
import NextLink from "next/link"
import React from "react"
import { VscChromeClose, VscMenu } from "react-icons/vsc"

type DrawerNavListProps = {
	activePath: string
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
	isScrolled?: boolean
}

const DrawerNavList: React.FC<DrawerNavListProps> = ({
	activePath,
	isOpen,
	onOpen,
	onClose,
	isScrolled,
}) => {
	const btnRef = React.useRef<HTMLButtonElement>(null)

	const bg = useColorModeValue("white", "black")

	return (
		<>
			<IconButton
				aria-label="Open navigation"
				icon={isOpen ? <VscChromeClose /> : <VscMenu />}
				ref={btnRef}
				onClick={isOpen ? onClose : onOpen}
				display={{ base: "inherit", md: "none" }}
				maxW="24px"
				minW="none"
				h="24px"
				size="lg"
				bg="none"
				ml="14px"
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
					transform: "scale(0.95)",
				}}
				transition={createTransition(["color", "transform"], "fast")}
			/>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
				size="full"
			>
				<DrawerOverlay zIndex={9998} display={{ md: "none" }}>
					<DrawerContent bg={bg}>
						<DrawerBody pt={isScrolled ? "80px" : "112px"} pb={8}>
							<VStack spacing={8}>
								{NAV_ITEMS.map((navItem) => {
									const path = `/${navItem}`
									const isActive = activePath === path

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
