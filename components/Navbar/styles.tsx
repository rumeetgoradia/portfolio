import { fade, makeStyles } from "@material-ui/core"

interface NavbarStyleProps {
	onSubPage: boolean
	drawerOpen: boolean
}

export const useStyles = makeStyles((theme) => ({
	root: {
		padding: (props: NavbarStyleProps) =>
			`${
				props.onSubPage || props.drawerOpen ? "0" : `${theme.spacing(2)}px`
			} ${theme.spacing(6)}px`,
		borderBottom: (props: NavbarStyleProps) =>
			`1px solid ${
				props.onSubPage && !props.drawerOpen
					? theme.palette.text.primary
					: "transparent"
			}`,
		backgroundColor: (props: NavbarStyleProps) =>
			props.onSubPage && !props.drawerOpen
				? fade(theme.palette.background.default, 0.4)
				: "transparent",
		backdropFilter: (props: NavbarStyleProps) =>
			props.onSubPage && !props.drawerOpen ? "saturate(180%) blur(5px)" : "",
		transition: theme.transitions.create([
			"padding",
			"border-bottom",
			"background-color",
			"backdrop-filter",
		]),
	},
	brandContainer: {
		padding: `${theme.spacing(2)}px 0`,
		opacity: (props: NavbarStyleProps) =>
			props.onSubPage || props.drawerOpen ? 1 : 0,
		pointerEvents: (props: NavbarStyleProps) =>
			props.onSubPage || props.drawerOpen ? "all" : "none",
		transition: theme.transitions.create("opacity"),
	},
	brand: {
		cursor: "pointer",
		height: 24,
		width: "auto",
		fill: theme.palette.text.primary,
		transition: theme.transitions.create(["fill", "filter", "transform"]),
		"&:hover, &:focus": {
			fill: theme.palette.primary.main,
			filter: `drop-shadow(0 0 6px ${fade(theme.palette.primary.main, 0.7)})`,
			transform: "scale(1.1)",
		},
		"&:active": {
			transform: "scale(0.9)",
		},
	},
	drawerOpenerContainer: {
		padding: theme.spacing(1),
		textAlign: "center",
		cursor: "pointer",
		transition: theme.transitions.create(["transform"]),
		"&:hover, &:focus": {
			transform: "scale(1.1)",
			"& $drawerOpener": {
				backgroundColor: (props: NavbarStyleProps) =>
					props.drawerOpen
						? "transparent"
						: fade(theme.palette.primary.main, 0.7),
				boxShadow: (props: NavbarStyleProps) =>
					props.drawerOpen
						? ""
						: `0 0 6px ${fade(theme.palette.primary.main, 0.7)}`,
				"&::after, &::before": {
					backgroundColor: fade(theme.palette.primary.main, 0.7),
					boxShadow: `0 0 6px ${fade(theme.palette.primary.main, 0.7)}`,
				},
			},
		},
		"&:active": {
			transform: "scale(0.9)",
		},
	},
	drawerOpener: {
		position: "relative",
		width: 20,
		height: 2,
		backgroundColor: (props: NavbarStyleProps) =>
			props.drawerOpen ? "transparent" : theme.palette.text.primary,
		transition: theme.transitions.create(["background-color", "box-shadow"]),
		"&::after, &::before": {
			content: '""',
			position: "absolute",
			width: "100%",
			height: "100%",
			left: "0",
			backgroundColor: theme.palette.text.primary,
			transition: theme.transitions.create([
				"top",
				"bottom",
				"transform",
				"background-color",
				"box-shadow",
			]),
		},
		"&::after": {
			bottom: (props: NavbarStyleProps) => (props.drawerOpen ? 0 : -5),
			transform: (props: NavbarStyleProps) =>
				props.drawerOpen ? "rotate(-45deg)" : "",
		},
		"&::before": {
			top: (props: NavbarStyleProps) => (props.drawerOpen ? 0 : -5),
			transform: (props: NavbarStyleProps) =>
				props.drawerOpen ? "rotate(45deg)" : "",
		},
	},
	drawer: {
		height: "100vh",
		padding: ` 0 ${theme.spacing(6)}px `,
		backgroundColor: fade(theme.palette.background.default, 0.4),
		backdropFilter: "saturate(180%) blur(5px)",
	},
}))
