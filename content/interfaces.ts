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
	iconId: string
	smallerIcon?: boolean
}
