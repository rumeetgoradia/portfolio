type NAV_ITEM = {
	title: string
	path: string
}

export const NAV_ITEMS: NAV_ITEM[] = [
	{
		title: "About",
		path: "/about",
	},
	{
		title: "Experience",
		path: "/experience",
	},
	{
		title: "Work",
		path: "/work",
	},
	{
		title: "Contact",
		path: "/contact",
	},
]

export const EXTERNAL_ITEMS: NAV_ITEM[] = [
	{
		title: "Resume",
		path: "/RumeetGoradia.pdf",
	},
	{
		title: "LinkedIn",
		path: "https://www.linkedin.com/in/rgoradia/",
	},
	{
		title: "GitHub",
		path: "https://github.com/rumeetgoradia",
	},
	{
		title: "Email",
		path: "mailto:rumeetgoradia@gmail.com",
	},
]
