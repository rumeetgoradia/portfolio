import { Project } from "./interfaces"
export const PROJECT_CATEGORIES = [
	"academic",
	"desktop",
	"web apps",
	"websites",
] as const

export const PROJECTS: Project[] = [
	{
		title: "Advocate BLM",
		categories: ["websites"],
		description:
			"A website built with the intention of assisting in conversations regarding the Black Lives Matter movement. This website’s primary purpose is to address that claim and act as a comprehensive guide to help engage in fact-based advocacy. It aims to educate readers about the undeniable validity of Black Lives Matter, as well as the movement's foundation and motivation.",
		live: "https://www.advocateblm.com/",
		repo: "https://github.com/rumeetgoradia/advocate-blm",
		software: ["ReactJS", "Contentful", "Netlify"],
		imageId: "advocate-blm",
	},
	{
		title: "Hilltop Embrace",
		categories: ["websites"],
		description:
			"The official website for Hilltop Embrace, a charity organization based in New Brunswick, New Jersey. This website includes a calendar that displays the organization's events, the data for which is loaded from Contentful.",
		live: "https://www.hilltopembrace.org/",
		repo: "https://github.com/hilltop-embrace/hilltop-embrace",
		software: ["ReactJS", "Contentful", "Netlify"],
		imageId: "hilltop-embrace",
	},
	{
		title: "Android64",
		categories: ["academic"],
		description:
			"The Android implementation of the Photos64 project. Features are essentially the same, with a functionality adapted to an Android environment.",
		repo: "https://bitbucket.org/rumeetgoradia/android64/src/master/",
		software: ["Java 8", "Android Studio"],
		imageId: "android64",
	},
	{
		title: "Photos64",
		categories: ["academic", "desktop"],
		description:
			"An application that enables users to save photo albums. The application comes complete with search functionality and enables users to manipulate photos and albums in numerous different ways. It also implements serialization for data persistence.",
		repo: "https://bitbucket.org/rumeetgoradia/photos64/src/master/",
		software: ["Java 8", "JavaFX"],
		imageId: "photos64",
	},
	{
		title: "Chess64",
		categories: ["academic", "desktop"],
		description: "A recreation of chess in the Java console.",
		repo: "https://bitbucket.org/rumeetgoradia/chess64/src/master/",
		software: ["Java 8"],
		svgId: "chess64",
	},
	{
		title: "SongLib",
		categories: ["academic", "desktop"],
		description:
			"A simple application for organizing a user's song collection. Songs can be added, edited, and deleted from the user's list. This list persists after the application is closed.",
		repo: "https://bitbucket.org/rumeetgoradia/songlib/src/master/",
		software: ["Java 8", "JavaFX"],
		imageId: "songlib",
	},
	{
		title: "Rutgers Consulting Group",
		categories: ["websites"],
		description:
			"The official website for Rutgers Consulting Group, an academic organization geared towards improving the consulting skills of the students at Rutgers University.",
		live: "https://www.ruconsulting.org/",
		repo: "https://github.com/rcgboard/rcg-website-2.0",
		software: ["ReactJS", "GatsbyJS", "Netlify"],
		imageId: "rcg",
	},
	{
		title: "Sorting Visualizer",
		categories: ["web apps"],
		description:
			"A visualization tool for 6 different sorting algorithms. The number of elements, sorting speed, and the final gradient pattern of the completed visualization can all be customized.",
		live: "https://rumeetgoradia.github.io/sorting-visualizer",
		repo: "https://github.com/rumeetgoradia/sorting-visualizer",
		software: ["ReactJS"],
		imageId: "sorting-visualizer",
	},
	{
		title: "City Reservations",
		categories: ["websites"],
		description:
			"A mock website for a city-based hotel. This website is built upon React Context, which feeds the hotel room data from Contentful to all relevant components. Rooms can also be filtered based on a number of criteria, including price, number of beds, and so on.",
		live: "https://rumeetgoradia-hotel-reservation.netlify.com/",
		repo: "https://github.com/rumeetgoradia/hotel_reservation",
		software: ["ReactJS", "Contentful", "Netlify"],
		imageId: "city-reservations",
	},
	{
		title: "Tetris",
		categories: ["web apps"],
		description:
			"The classic game of Tetris. Custom hooks and components come together to form the game's pieces, logic, and counters for score, current level, and completed rows. Use the arrow keys and spacebar to play!",
		live: "https://rumeetgoradia.github.io/tetris/",
		repo: "https://github.com/rumeetgoradia/tetris",
		software: ["ReactJS"],
		imageId: "tetris",
	},
	{
		title: "Where's The File?",
		categories: ["academic", "desktop"],
		description:
			"A custom version control system. A central server utilizes multithreading and mutexes to maintain and distribute a repository of files to multiple clients. With the help of sockets, this program implements many of the common VCS features, like pushes, pulls, commits, and so on.",
		repo: "https://github.com/rumeetgoradia/wtf",
		software: ["C"],
		svgId: "wtf",
	},
	{
		title: "File Compressor",
		categories: ["academic", "desktop"],
		description:
			"A utility that compresses individual files or whole directories. The program utilizes Huffman trees to translate words in a target directory's files (or in a single file) into 1s and 0s. It maintains a mapping of these translations and can decompress the compressed files as well.",
		repo: "https://github.com/rumeetgoradia/filecompressor",
		software: ["C"],
		svgId: "file-compressor",
	},
	{
		title: "Reddit Bot",
		categories: ["desktop"],
		description:
			"A simple bot for Reddit that automatically replies to certain comments. This bot, when activated, will search through comments on all threads of a specific sub-Reddit and reply to them if they contain distinct keywords.",
		repo: "https://github.com/rumeetgoradia/Reddit-Bot",
		software: ["Python", "Reddit API"],
		imageId: "reddit-bot",
	},
	{
		title: "mymalloc()",
		categories: ["academic", "desktop"],
		description:
			'A custom implementation of C\'s "malloc()" and "free()" functions. The user has 4096 bytes of memory available for use, and the program automatically allocates space for the memory requested by the user. The program only uses 3 bytes of metadata as overhead for each memory allocation, and adjacent free blocks of memory are automatically combined for maximum efficiency.',
		repo: "https://github.com/rumeetgoradia/my-malloc",
		software: ["C"],
		svgId: "mymalloc",
	},
]
