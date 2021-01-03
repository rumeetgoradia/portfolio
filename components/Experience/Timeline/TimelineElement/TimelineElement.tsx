import { Box, Grid, Typography } from "@material-ui/core"
import clsx from "clsx"
import React from "react"
import { Svg } from "react-optimized-image"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import { ExperienceItem } from "../../../../content"
import { useTimelineElementStyles } from "./TimelineElement.styles"

interface TimelineElementProps {
	experienceItem: ExperienceItem
	icon: JSX.Element
}

const TimelineElement: React.FC<TimelineElementProps> = ({
	experienceItem,
	icon,
}) => {
	const classes = useTimelineElementStyles()

	return (
		<VerticalTimelineElement
			contentArrowStyle={{ display: "none" }}
			date={experienceItem.date}
			icon={icon}
			dateClassName={classes.date}
			iconClassName={classes.icon}
			textClassName={classes.content}
			className={classes.root}
		>
			<Svg
				src={require(`images/experience/${experienceItem.svgId}.svg`)}
				className={clsx(
					classes.svg,
					experienceItem.smallerSvg && classes.smallerSvg
				)}
			/>
			<Typography className={classes.title}>{experienceItem.title}</Typography>
			<Typography className={classes.location}>
				{experienceItem.location}
			</Typography>
			<div className={classes.subtitlesContainer}>
				{experienceItem.subtitleItems?.map((subtitle, index) => (
					<Typography
						key={`${experienceItem.title}-experience-subtitle-${index}`}
						className={classes.subtitle}
					>
						{subtitle}
					</Typography>
				))}
			</div>
			<div className={classes.infoWrapper}>
				{experienceItem.info.map((infoItem, index) => (
					<Grid
						key={`${experienceItem.title}-experience-info-${index}`}
						container
						className={classes.infoContainer}
					>
						<Grid item xs={3} className={classes.infoTitleContainer}>
							<Box
								display="flex"
								justifyContent="flex-start"
								alignItems="center"
								width="100%"
								height="100%"
							>
								<Typography className={classes.infoTitle}>
									{infoItem.title}
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={9} className={classes.infoItemsContainer}>
							<Typography align="justify" className={classes.infoItems}>
								{infoItem.items.join(" ⋅ ")}
							</Typography>
						</Grid>
					</Grid>
				))}
			</div>
		</VerticalTimelineElement>
	)
}

export default TimelineElement
