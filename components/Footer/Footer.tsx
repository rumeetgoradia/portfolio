import { Box } from "@material-ui/core"
import { useRouter } from "next/router"
import { CONTACT_LINKS, NAV_LINKS } from "../../constants"
import { useFooterStyles } from "./Footer.styles"

const Footer = () => {
	const router = useRouter()

	const classes = useFooterStyles({
		onSubPage:
			NAV_LINKS.findIndex((navLink) => navLink.path === router.pathname) !== -1,
	})

	return (
		<footer className={classes.root}>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="100%"
			>
				{CONTACT_LINKS.map((contactLink, index) => (
					<a
						key={`footer-link-${index}`}
						href={contactLink.url}
						title={contactLink.title}
						className={classes.footerLink}
					>
						{contactLink.icon}
					</a>
				))}
			</Box>
		</footer>
	)
}

export default Footer
