export type Project = {
	title: string
	description: string
	liveUrl?: string
	repoUrl?: string
	tags: string[]
	imagePath: string
	imageBase64?: string
	isFeatured?: boolean
}

export const PROJECTS: Project[] = [
	{
		title: "Manasi Parikh's Portfolio",
		description:
			"A custom portfolio website for a friend of mine working in data analytics.",
		liveUrl: "https://manasiparikh.com",
		repoUrl: "https://github.com/rumeetgoradia/manasi-parikh",
		tags: ["next.js", "typescript", "vercel"],
		imagePath: "manasi-parikh.png",
		isFeatured: true,
	},
	{
		title: "Pokedex",
		description:
			"My rendition of a complete Pokedex. On the home page, you can filter by name and/or type, and you can see each individual Pokemon's characteristics on their dedicated page. The database for this project was seeded using a Python scraper on a popular Pokemon wiki.",
		liveUrl: "https://pokedex.rumeetgoradia.com",
		repoUrl: "https://github.com/rumeetgoradia/pokedex",
		tags: [
			"next.js",
			"typescript",
			"python",
			"beautiful-soup",
			"firebase",
			"vercel",
		],
		imagePath: "pokedex.png",
		isFeatured: true,
	},
	{
		title: "Advocate BLM",
		description:
			"A website built with the intention of assisting in conversations regarding the Black Lives Matter movement. This website's primary purpose is to address that claim and act as a comprehensive guide to help engage in fact-based advocacy. It aims to educate readers about the undeniable validity of Black Lives Matter, as well as the movement's foundation and motivation.",
		liveUrl: "https://www.advocateblm.com",
		repoUrl: "https://github.com/rumeetgoradia/advocate-blm",
		tags: ["next.js", "typescript", "contentful", "vercel"],
		imagePath: "advocate-blm.png",
		isFeatured: true,
	},
]
