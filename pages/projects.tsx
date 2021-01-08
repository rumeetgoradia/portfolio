import { Grid } from "@material-ui/core"
import { useState } from "react"
import Layout, { Base } from "../components/Layout"
import MasonryGrid from "../components/Projects/MasonryGrid"
import ProjectCard from "../components/Projects/ProjectCard"
import ProjectFilters from "../components/Projects/ProjectFilters"
import { Project, PROJECTS } from "../content"

const ProjectsPage: React.FC = () => {
	const [displayedProjects, setDisplayedProjects] = useState<Project[]>(
		PROJECTS
	)

	return (
		<Layout title="Projects">
			<Base xs={12}>
				<ProjectFilters
					allProjects={PROJECTS}
					setDisplayedProjects={setDisplayedProjects}
				/>
			</Base>
			<Grid item xs={12}>
				<MasonryGrid>
					{displayedProjects.map((project, index) => (
						<ProjectCard key={`project-${index}`} project={project} />
					))}
				</MasonryGrid>
			</Grid>
		</Layout>
	)
}

export default ProjectsPage
