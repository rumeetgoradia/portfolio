import { Grid } from "@material-ui/core"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Project, PROJECT_CATEGORIES } from "../../../content"
import BorderedButton from "../../BorderedButton"

interface ProjectFiltersProps {
	allProjects: Project[]
	setDisplayedProjects: Dispatch<SetStateAction<Project[]>>
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
	allProjects,
	setDisplayedProjects,
}) => {
	const [activeCategories, setActiveCategories] = useState<
		typeof PROJECT_CATEGORIES[number][]
	>([])

	useEffect(() => {
		if (activeCategories.length === 0) {
			setDisplayedProjects(allProjects)
		} else {
			setDisplayedProjects(
				allProjects.filter((project) =>
					project.categories.some((category) =>
						activeCategories.includes(category)
					)
				)
			)
		}
	}, [activeCategories])

	return (
		<Grid container spacing={2}>
			{PROJECT_CATEGORIES.map((category, index) => (
				<Grid key={`category-filter-${index}`} item xs={12} sm={6} md={3}>
					<BorderedButton
						active={activeCategories.includes(category)}
						onClick={() => {
							const newActiveCategories = [...activeCategories]
							if (newActiveCategories.includes(category)) {
								newActiveCategories.splice(
									newActiveCategories.indexOf(category),
									1
								)
							} else {
								newActiveCategories.push(category)
							}
							setActiveCategories(newActiveCategories)
						}}
					>
						{category}
					</BorderedButton>
				</Grid>
			))}
		</Grid>
	)
}

export default ProjectFilters
