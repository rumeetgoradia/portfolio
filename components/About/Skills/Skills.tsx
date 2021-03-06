import { Grid } from "@material-ui/core"
import { SKILLS } from "../../../content"
import { Header } from "../../Typography"
import SkillDisplay from "./SkillDisplay"

const Skills: React.FC = () => {
	return (
		<>
			<Header>Skills</Header>
			<Grid container spacing={2}>
				{SKILLS.map((skill, index) => (
					<Grid key={`skill-${index}`} item xs={12} md={6} lg={4}>
						<SkillDisplay skill={skill} />
					</Grid>
				))}
			</Grid>
		</>
	)
}

export default Skills
