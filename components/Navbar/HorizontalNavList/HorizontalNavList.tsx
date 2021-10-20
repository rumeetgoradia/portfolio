import { HStack, Link } from "@chakra-ui/layout"
import { Logo } from "@components/Logo"
import { NAV_ITEMS } from "@constants"
import { createTransition } from "@utils"
import NextLink from "next/link"

type HorizontalNavListProps = {
	activePath: string
}

const HorizontalNavList: React.FC<HorizontalNavListProps> = ({
	activePath,
}) => {
	return (
		<HStack
			spacing="20px"
			justify="center"
			align="center"
			display={{ base: "none", md: "inherit" }}
		>
			<NextLink href="/" passHref>
				<Logo
					height="24px"
					width="auto"
					fill="currentcolor"
					cursor="pointer"
					mt="-1px"
					_hover={{
						fill: "brand",
					}}
					transition={createTransition("fill")}
				/>
			</NextLink>
			<HStack spacing="8px" justify="center" align="center" as="nav">
				{NAV_ITEMS.map((navItem) => {
					const path = `/${navItem}`
					const isActive = activePath === path

					return (
						<NextLink href={path} passHref key={`${navItem}-nav-item`}>
							<Link
								lineHeight={1}
								letterSpacing={1}
								pl="7px"
								pr="6px"
								pt="6px"
								pb="4px"
								textDecoration="none"
								fontSize="sm"
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
			</HStack>
		</HStack>
	)
}

export default HorizontalNavList
