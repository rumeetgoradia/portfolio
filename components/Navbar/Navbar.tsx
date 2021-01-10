import Logo from "@/images/logo.svg"
import {
	AppBar,
	Box,
	Drawer,
	Grid,
	Theme,
	useMediaQuery,
} from "@material-ui/core"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { NAV_LINKS } from "../../constants"
import { ThemeString } from "../../hooks/useDarkMode"
import { useNavbarStyles } from "./Navbar.styles"
import NavLinks from "./NavLinks"
import ThemeToggle from "./ThemeToggle"

interface NavbarProps {
	theme: ThemeString
	toggleTheme: () => void
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

	const smallScreen = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("sm")
	)

	const router = useRouter()

	useEffect(() => {
		if (!smallScreen) {
			setDrawerOpen(false)
		}
	}, [smallScreen])

	const closeDrawer = () => setDrawerOpen(false)

	const classes = useNavbarStyles({
		onSubPage:
			NAV_LINKS.findIndex((navLink) => navLink.path === router.pathname) !== -1,
		drawerOpen,
	})

	return (
		<AppBar
			position="fixed"
			color="transparent"
			elevation={0}
			className={classes.root}
		>
			<Grid container>
				<Grid item xs={4} sm={1}>
					<Box display="flex" width="100%" className={classes.brandContainer}>
						<Link href="/">
							<Logo className={classes.brand} />
						</Link>
					</Box>
				</Grid>
				<Grid item xs={4} sm={10}>
					{smallScreen ? (
						<>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								width="100%"
								height="100%"
							>
								<Box
									onClick={() => setDrawerOpen(!drawerOpen)}
									display="flex"
									justifyContent="center"
									alignItems="center"
									className={classes.drawerOpenerContainer}
								>
									<div className={classes.drawerOpener} />
								</Box>
							</Box>
							<Drawer
								anchor="top"
								open={drawerOpen}
								onClose={closeDrawer}
								transitionDuration={500}
								BackdropProps={{ style: { opacity: 0 } }}
								classes={{ paper: classes.drawer }}
							>
								<NavLinks drawer closeDrawer={closeDrawer} />
							</Drawer>
						</>
					) : (
						<NavLinks />
					)}
				</Grid>
				<Grid item xs={4} sm={1}>
					<Box
						display="flex"
						justifyContent="flex-end"
						alignItems="center"
						width="100%"
						height="100%"
					>
						<ThemeToggle theme={theme} toggleTheme={toggleTheme} />
					</Box>
				</Grid>
			</Grid>
		</AppBar>
	)
}

export default Navbar
