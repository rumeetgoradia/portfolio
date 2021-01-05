import { Grid } from "@material-ui/core"
import { useState } from "react"
import Layout, { Base } from "../components/Layout"
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
				{displayedProjects.map((project, index) => (
					<div>{project.title}</div>
				))}
			</Grid>
		</Layout>
	)
}

export default ProjectsPage
