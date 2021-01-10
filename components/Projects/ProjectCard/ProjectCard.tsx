import { useDynamicSvgGeneration } from "@/hooks/useDynamicSvgGeneration"
import { Box, Grid, Paper, Typography } from "@material-ui/core"
import Image from "next/image"
import { Project } from "../../../content"
import BorderedButton from "../../BorderedButton"
import { Lists } from "../../Typography"
import { useProjectCardStyles } from "./ProjectCard.styles"

interface ProjectCardProps {
	project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const classes = useProjectCardStyles()

	const svg =
		!project.imageId && project.svgId
			? useDynamicSvgGeneration(
					`projects/${project.svgId}`,
					classes.svg,
					classes
			  )
			: undefined

	return (
		<Paper className={classes.root}>
			<Box
				position="relative"
				display="flex"
				justifyContent="center"
				alignItems="center"
				width="100%"
				height="30vh"
				textAlign="center"
				minHeight={175}
				overflow="hidden"
				className={classes.imgContainer}
			>
				{project.imageId ? (
					<Image
						src={`/images/projects/${project.imageId}.png`}
						layout="fill"
						objectFit="cover"
						objectPosition="center center"
						alt={project.title}
						title={project.title}
						className={classes.img}
					/>
				) : (
					<>{svg}</>
				)}
			</Box>
			<div className={classes.content}>
				<Typography className={classes.title}>{project.title}</Typography>
				<Typography className={classes.description}>
					{project.description}
				</Typography>
				<Lists
					lists={{ title: "Software", items: project.software }}
					keyId={project.title}
				/>
				<Grid container spacing={2} className={classes.buttons}>
					<Grid item xs={12} lg={project.live ? 6 : 12}>
						<BorderedButton href={project.repo}>Repository</BorderedButton>
					</Grid>
					{project.live && (
						<Grid item xs={12} lg={6}>
							<BorderedButton href={project.live}>Live</BorderedButton>
						</Grid>
					)}
				</Grid>
			</div>
		</Paper>
	)
}

export default ProjectCard
