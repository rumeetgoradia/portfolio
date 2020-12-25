import { BsFillEnvelopeFill } from "react-icons/bs"
import { FaFileAlt, FaGithub, FaLinkedinIn } from "react-icons/fa"

type ContactLinks = {
	title: string
	url: string
	icon: JSX.Element
}[]

export const CONTACT_LINKS: ContactLinks = [
	{
		title: "GitHub",
		url: "https://github.com/rumeetgoradia",
		icon: <FaGithub />,
	},
	{
		title: "LinkedIn",
		url: "https://www.linkedin.com/in/rgoradia/",
		icon: <FaLinkedinIn />,
	},
	{
		title: "Email",
		url: "mailto:rumeet.goradia@gmail.com",
		icon: <BsFillEnvelopeFill />,
	},
	{
		title: "Resume",
		url: "/RumeetGoradiaResume.pdf",
		icon: <FaFileAlt />,
	},
]
