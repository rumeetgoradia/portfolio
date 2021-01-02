import {
	FaAndroid,
	FaDatabase,
	FaDocker,
	FaFigma,
	FaGitAlt,
	FaHtml5,
	FaNodeJs,
	FaPython,
	FaReact,
	FaRegChartBar,
	FaTerminal,
	FaUserShield,
} from "react-icons/fa"
import { Skill } from "./interfaces"

export const WHO_AM_I =
	"My name is Rumeet Goradia, and I am currently a senior at the Rutgers University Honors College in New Brunswick, NJ. I'm studying Computer Science and Business Analytics & Information Technology. One day, I hope to be able to market my own software and bring more technology into lower-income communities. This summer, I was employed at Schonfeld Strategic Advisors in New York City as a Software Engineering Intern, and I will be returning to Schonfeld as a full-time Software Engineer post-graduation. When I'm not studying or working, you can find me at the gym, hanging out with my friends, or working on personal projects like this website."

export const SKILLS: Skill[] = [
	{
		title: "Procedural Programming",
		tools: ["Java 8", "Python 3"],
		icon: <FaPython />,
	},
	{
		title: "Web Design & Development",
		tools: ["JavaScript ES6", "HTML5", "CSS3"],
		icon: <FaHtml5 />,
	},
	{
		title: "Front-End Frameworks",
		tools: ["ReactJS", "GatsbyJS", "Bootstrap"],
		icon: <FaReact />,
	},
	{
		title: "Back-End Frameworks",
		tools: ["NodeJS", "ExpressJS"],
		icon: <FaNodeJs />,
	},
	{
		title: "App Development",
		tools: ["JavaFX", "Android Studio", "JSP"],
		icon: <FaAndroid />,
	},
	{
		title: "Low-Level Programming",
		tools: ["C", "Assembly", "Linux CLI"],
		icon: <FaTerminal />,
	},
	{
		title: "Database Management",
		tools: ["MySQL", "Microsoft Access"],
		icon: <FaDatabase />,
	},
	{
		title: "Data Analysis & Modeling",
		tools: ["R", "Microsoft Excel", "NumPy"],
		icon: <FaRegChartBar />,
	},
	{
		title: "Version Control",
		tools: ["Git CLI", "GitHub", "Bitbucket"],
		icon: <FaGitAlt />,
	},
	{
		title: "Concept Prototyping",
		tools: ["Figma", "UML"],
		icon: <FaFigma />,
	},
	{
		title: "System Administration",
		tools: ["Active Directory", "Office 365"],
		icon: <FaUserShield />,
	},
	{
		title: "AWS-Based Microservices",
		tools: ["Docker", "Kafka", "Spring"],
		icon: <FaDocker />,
	},
]
