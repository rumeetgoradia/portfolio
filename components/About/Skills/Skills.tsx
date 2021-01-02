import { Grid } from "@material-ui/core"
import { SKILLS } from "../../../constants"
import { Header } from "../../Typography"
import SkillDisplay from "./SkillDisplay"
import { useSkillsStyles } from "./Skills.styles"

const Skills: React.FC = () => {
	const classes = useSkillsStyles()

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
