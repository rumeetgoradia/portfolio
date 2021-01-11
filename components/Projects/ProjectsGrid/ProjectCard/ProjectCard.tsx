import BorderedButton from "@/components/BorderedButton"
import { Lists } from "@/components/Typography"
import { Project } from "@/content"
import { Box, Grid, Paper, Typography } from "@material-ui/core"
import Image from "next/image"
import { useProjectCardStyles } from "./ProjectCard.styles"

interface ProjectCardProps {
	project: Project | undefined
	svg: React.ReactNode | undefined
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, svg }) => {
	const classes = useProjectCardStyles()

	if (!project) {
		return <div />
	}

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
						alt={project.title}
						title={project.title}
						layout="fill"
						objectFit="cover"
						objectPosition="center center"
						quality={15}
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
