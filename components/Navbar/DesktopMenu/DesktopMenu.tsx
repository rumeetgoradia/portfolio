import { HStack, Link, useTheme } from "@chakra-ui/react"
import { Logo } from "@components/Logo"
import { NAV_ITEMS } from "@constants"
import { createTransition, fade } from "@utils"
import NextLink from "next/link"

type DesktopMenuProps = {
	activePath: string
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ activePath }) => {
	const theme = useTheme()

	return (
		<HStack as="nav" spacing={1} p={10} display={{ base: "none", md: "flex" }}>
			<NextLink href="/" passHref>
				<Link
					title="Home"
					_focus={{
						outline: "none",
						boxShadow: "none",
					}}
					mr={2}
				>
					<Logo
						h="21px"
						w="auto"
						fill="black"
						transition={createTransition(["transform", "fill"])}
						_hover={{
							transform: "scale(1.05)",
							fill: "brand",
						}}
						_active={{
							transform: "scale(0.975)",
						}}
					/>
				</Link>
			</NextLink>
			{NAV_ITEMS.map(({ title, path }) => {
				const isActive = activePath === path

				return (
					<NextLink href={path} passHref key={`${title}-nav-item`}>
						<Link
							title={title}
							pl="12px"
							pr="11px"
							py={1}
							borderRadius="sm"
							fontWeight={400}
							textTransform="uppercase"
							fontSize="sm"
							letterSpacing={1}
							color={isActive ? "brand" : "black"}
							textShadow={
								isActive
									? `1px 1px 3px ${fade(theme.colors.brand, 0.3)}`
									: "none"
							}
							transition={createTransition([
								"text-shadow",
								"background",
								"color",
							])}
							_hover={{
								textDecoration: "none",
								bg: isActive ? "none" : fade(theme.colors.black, 0.1),
							}}
							_focus={{
								textDecoration: "none",
								outline: "none",
								boxShadow: "none",
							}}
							_active={{
								bg: isActive ? "none" : fade(theme.colors.black, 0.4),
							}}
						>
							{title}
						</Link>
					</NextLink>
				)
			})}
		</HStack>
	)
}

export default DesktopMenu
