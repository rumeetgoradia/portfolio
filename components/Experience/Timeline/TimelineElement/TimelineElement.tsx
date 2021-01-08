import { Typography } from "@material-ui/core"
import clsx from "clsx"
import React from "react"
import { Svg } from "react-optimized-image"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import { ExperienceItem } from "../../../../content"
import { Lists } from "../../../Typography"
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
			<Lists lists={experienceItem.info} keyId={experienceItem.title} />
		</VerticalTimelineElement>
	)
}

export default TimelineElement
