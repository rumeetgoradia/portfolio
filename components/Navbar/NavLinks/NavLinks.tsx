import { Box } from "@material-ui/core"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { createRef, RefObject, useEffect, useRef } from "react"
import { NAV_LINKS } from "../../../constants"
import { useStyles } from "./styles"

interface NavLinksProps {
	drawer?: boolean | undefined
	closeDrawer?: () => void
}

const NavLinks: React.FC<NavLinksProps> = ({ drawer, closeDrawer }) => {
	const navLinkRefs = useRef<RefObject<HTMLDivElement>[]>(
		NAV_LINKS.map(() => createRef())
	)
	const movingUnderlineRef = useRef<HTMLDivElement>(null)

	const router = useRouter()

	const moveUnderline = () => {
		const activeLinkIndex = NAV_LINKS.findIndex(
			(navLink) => navLink.path === router.pathname
		)

		if (activeLinkIndex !== -1 && movingUnderlineRef.current) {
			const activeLinkRef = navLinkRefs.current[activeLinkIndex]
			movingUnderlineRef.current.style.left =
				activeLinkRef.current?.offsetLeft + "px"
			movingUnderlineRef.current.style.width =
				activeLinkRef.current?.offsetWidth + "px"
			movingUnderlineRef.current.style.opacity = "1"
		} else if (movingUnderlineRef.current) {
			movingUnderlineRef.current.style.opacity = "0"
		}
	}

	useEffect(() => {
		window.addEventListener("resize", moveUnderline)
		return () => {
			window.removeEventListener("resize", moveUnderline)
		}
	})

	useEffect(() => {
		moveUnderline()
	}, [router.pathname])

	const classes = useStyles({ drawer })

	return (
		<Box
			display="flex"
			flexDirection={drawer ? "column" : "row"}
			justifyContent="center"
			alignItems="center"
			width="100%"
			height="100%"
			className={classes.root}
		>
			{NAV_LINKS.map((navLink, index) => (
				<div
					key={`nav-link-${index}`}
					ref={navLinkRefs.current[index]}
					className={classes.navLinkContainer}
				>
					<Link href={navLink.path}>
						<span
							onClick={closeDrawer}
							className={clsx(
								classes.navLink,
								router.pathname === navLink.path && "active"
							)}
						>
							{navLink.title}
						</span>
					</Link>
				</div>
			))}
			{!drawer && (
				<div ref={movingUnderlineRef} className={classes.underline} />
			)}
		</Box>
	)
}

export default NavLinks
