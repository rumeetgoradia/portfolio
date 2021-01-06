import { PROJECT_CATEGORIES } from "./projects"
export interface Skill {
	title: string
	tools: string[]
	icon: JSX.Element
}

export interface Experience {
	type: string
	icon: JSX.Element
	items: ExperienceItem[]
}

export interface ExperienceItem {
	title: string
	subtitleItems?: string[]
	date: string
	location: string
	info: {
		title: string
		items: string[]
	}[]
	svgId: string
	smallerSvg?: boolean
}
export interface Project {
	title: string
	categories: typeof PROJECT_CATEGORIES[number][]
	description: string
	repo: string
	live?: string
	software: string[]
	pictureId: string
}
