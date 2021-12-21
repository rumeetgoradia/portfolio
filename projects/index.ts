type Project = {
	title: string
	description: string
	liveUrl?: string
	repoUrl?: string
	tags: string[]
	imagePath: string
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
		imagePath: "manasi-parikh.jpeg",
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
		imagePath: "pokedex.jpeg",
		isFeatured: true,
	},
]
