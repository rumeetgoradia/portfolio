export type Work = {
	title: string
	description: string
	liveUrl?: string
	repoUrl?: string
	tags: string[]
	imageSlug: string
	imagePath?: string
	imageBase64?: string
	isFeatured?: boolean
}

export const WORK: Work[] = [
	{
		title: "Manasi Parikh's Portfolio",
		description:
			"A custom portfolio website for a friend of mine working in data analytics.",
		liveUrl: "https://manasiparikh.com",
		repoUrl: "https://github.com/rumeetgoradia/manasi-parikh",
		tags: ["next.js", "typescript", "vercel"],
		imageSlug: "manasi-parikh",
		isFeatured: true,
	},
	{
		title: "Pokédex",
		description:
			"My rendition of a complete Pokédex. On the home page, you can filter by name and/or type, and you can see each individual Pokémon's characteristics on their dedicated page. The database for this project was seeded using a Python scraper on a popular Pokemon wiki.",
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
		imageSlug: "pokedex",
		isFeatured: true,
	},
	{
		title: "Harshem Family Practice",
		description:
			"The official website for Harshem Family Practice, a medical clinic with offices in Rahway, New Jersey and Elizabeth, New Jersey. Visitors can request appointments and check out information about the company, the doctors, and the offices.",
		liveUrl: "https://www.harshemfamilypractice.com/",
		repoUrl: "https://github.com/rumeetgoradia/harshem",
		tags: ["next.js", "typescript", "netlify"],
		imageSlug: "harshem",
	},
	{
		title: "Advocate BLM",
		description:
			"A website built with the intention of assisting in conversations regarding the Black Lives Matter movement. This website's primary purpose is to address that claim and act as a comprehensive guide to help engage in fact-based advocacy. It aims to educate readers about the undeniable validity of Black Lives Matter, as well as the movement's foundation and motivation.",
		liveUrl: "https://www.advocateblm.com",
		repoUrl: "https://github.com/rumeetgoradia/advocate-blm",
		tags: ["next.js", "typescript", "contentful", "vercel"],
		imageSlug: "advocate-blm",
		isFeatured: true,
	},
	{
		title: "Android64",
		description:
			"The Android implementation of the Photos64 project. Features are essentially the same, with a functionality adapted to an Android environment.",
		repoUrl: "https://bitbucket.org/rumeetgoradia/android64/src/master/",
		tags: ["java", "android-studio"],
		imageSlug: "android64",
	},
	{
		title: "Photos64",
		description:
			"An application that enables users to save photo albums. The application comes complete with search functionality and enables users to manipulate photos and albums in numerous different ways. It also implements serialization for data persistence.",
		repoUrl: "https://bitbucket.org/rumeetgoradia/photos64/src/master/",
		tags: ["java", "java-fx"],
		imageSlug: "photos64",
	},
	{
		title: "SongLib",
		description:
			"A simple application for organizing a user's song collection. Songs can be added, edited, and deleted from the user's list. This list persists after the application is closed.",
		repoUrl: "https://bitbucket.org/rumeetgoradia/songlib/src/master/",
		tags: ["java", "java-fx"],
		imageSlug: "songlib",
	},

	{
		title: "Sorting Visualizer",
		description:
			"A visualization tool for 6 different sorting algorithms. The number of elements, sorting speed, and the final gradient pattern of the completed visualization can all be customized.",
		liveUrl: "https://rumeetgoradia.github.io/sorting-visualizer",
		repoUrl: "https://github.com/rumeetgoradia/sorting-visualizer",
		tags: ["react.js"],
		imageSlug: "sorting-visualizer",
	},
	{
		title: "City Reservations",
		description:
			"A mock website for a city-based hotel. This website is built upon React Context, which feeds the hotel room data from Contentful to all relevant components. Rooms can also be filtered based on a number of criteria, including price, number of beds, and so on.",
		liveUrl: "https://rumeetgoradia-hotel-reservation.netlify.com/",
		repoUrl: "https://github.com/rumeetgoradia/hotel_reservation",
		tags: ["react.js", "contentful", "netlify"],
		imageSlug: "city-reservations",
	},
	{
		title: "Tetris",
		description:
			"The classic game of Tetris. Custom hooks and components come together to form the game's pieces, logic, and counters for score, current level, and completed rows. Use the arrow keys and spacebar to play!",
		liveUrl: "https://rumeetgoradia.github.io/tetris/",
		repoUrl: "https://github.com/rumeetgoradia/tetris",
		tags: ["react.js"],
		imageSlug: "tetris",
	},
]
