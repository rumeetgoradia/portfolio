import { VerticalTimeline } from "react-vertical-timeline-component"
// import "react-vertical-timeline-component/style.min.css"
import { Experience } from "../../../content"
import { useTimelineStyles } from "./Timeline.styles"
import TimelineElement from "./TimelineElement"

interface TimelineProps {
	experience: Experience
}

const Timeline: React.FC<TimelineProps> = ({ experience }) => {
	const classes = useTimelineStyles()

	return (
		<VerticalTimeline
			animate={false}
			layout="1-column"
			className={classes.root}
		>
			{experience.items.map((experienceItem, index) => (
				<TimelineElement
					key={`${experience.type}-experience-item-${index}`}
					experienceItem={experienceItem}
					icon={experience.icon}
				/>
			))}
		</VerticalTimeline>
	)
}

export default Timeline
