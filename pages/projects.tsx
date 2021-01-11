import Layout, { Base } from "@/components/Layout"
import { ProjectFilters, ProjectsGrid } from "@/components/Projects"
import { Project, PROJECTS } from "@/content"
import { Grid } from "@material-ui/core"
import { useState } from "react"

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
				<ProjectsGrid
					allProjects={PROJECTS}
					displayedProjects={displayedProjects}
				/>
			</Grid>
		</Layout>
	)
}

export default ProjectsPage
