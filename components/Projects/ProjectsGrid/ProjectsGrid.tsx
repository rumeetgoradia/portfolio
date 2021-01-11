import { Project } from "@/content"
import { useDynamicSvgGeneration } from "@/hooks/useDynamicSvgGeneration"
import MasonryGrid from "./MasonryGrid"
import ProjectCard from "./ProjectCard"

interface ProjectsGridProps {
	allProjects: Project[]
	displayedProjects: Project[]
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
	allProjects,
	displayedProjects,
}) => {
	const projectsWithSvgs = allProjects.map((project) => ({
		project,
		svg: project.svgId
			? useDynamicSvgGeneration(`projects/${project.svgId}`, "")
			: undefined,
	}))

	return (
		<MasonryGrid>
			{displayedProjects.map((project, index) => {
				const projectToDisplay = projectsWithSvgs.find(
					(projectWithSvg) => projectWithSvg.project.title === project.title
				)
				return (
					<ProjectCard
						key={`project-${index}`}
						project={projectToDisplay?.project}
						svg={projectToDisplay?.svg}
					/>
				)
			})}
		</MasonryGrid>
	)
}

export default ProjectsGrid
