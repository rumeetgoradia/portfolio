import {
	Icon,
	Link,
	LinkProps,
	useColorModeValue,
	useTheme,
} from "@chakra-ui/react"
import { createTransition } from "@utils"

type HyperlinkProps = LinkProps & {
	withArrow?: boolean
}

const Hyperlink: React.FC<HyperlinkProps> = ({
	children,
	withArrow,
	...props
}) => {
	const theme = useTheme()
	const currentcolor = useColorModeValue("black", "white")
	const opacity = useColorModeValue(0.7, 0.6)

	return (
		<Link
			bg={`linear-gradient(to right, rgba(0,0,0, 0), rgba(0,0,0, 0)),
			linear-gradient(to right, ${theme.colors["brand"]}, ${theme.colors["brand"]})`}
			bgSize="100% 0.1em, 0 0.1em"
			bgPos="100% 100%, 0 100%"
			bgRepeat="no-repeat"
			opacity={opacity}
			transition={createTransition(["background-size", "color", "opacity"])}
			_hover={{
				bgSize: withArrow ? "100% 0.1em, 0 0.1em" : "0 0.1em, 100% 0.1em",
				color: "brand",
				opacity: 1,
				"& .arrow": {
					transform: "translateX(5px)",
				},
			}}
			_focus={{
				bgSize: withArrow ? "100% 0.1em, 0 0.1em" : "0 0.1em, 100% 0.1em",
				color: "brand",
				opacity: 1,
				"& .arrow": {
					transform: "translateX(5px)",
				},
			}}
			{...props}
		>
			{children}
			{withArrow && (
				<>
					{" "}
					<Icon
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						w="20px"
						h="auto"
						mt="-1px"
						className="arrow"
						transition={createTransition("transform")}
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
						/>
					</Icon>
				</>
			)}
		</Link>
	)
}

export default Hyperlink
