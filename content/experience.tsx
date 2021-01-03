import { FaBriefcase, FaGraduationCap } from "react-icons/fa"
import { Experience } from "./interfaces"

export const EXPERIENCE: Experience[] = [
	{
		type: "Professional",
		icon: <FaBriefcase />,
		items: [
			{
				title: "Schonfeld Strategic Advisors",
				subtitleItems: ["Incoming Software Engineering Intern"],
				date: "June 2020 — August 2020",
				location: "New York, New York",
				info: [
					{
						title: "Primary Software",
						items: [
							"Java 11",
							"JUnit",
							"Maven",
							"Spring Boot",
							"Docker",
							"Jenkins",
						],
					},
				],
				svgId: "schonfeld",
			},
			{
				title: "KPMG LLP",
				subtitleItems: ["Information Technology Audit and Assurance Intern"],
				date: "June 2019 — August 2019",
				location: "New York, New York",
				info: [
					{
						title: "Primary Software",
						items: ["Microsoft Excel", "eAudit"],
					},
				],
				svgId: "kpmg",
			},
			{
				title: "Ortho Clinical Diagnostics",
				subtitleItems: ["Compute Services Intern"],
				date: "June 2018 — August 2018",
				location: "Raritan, New Jersey",
				info: [
					{
						title: "Primary Software",
						items: [
							"Windows Active Directory",
							"Office 365 Admin Center",
							"Linux CLI",
							"SharePoint",
						],
					},
				],
				svgId: "ortho",
			},
		],
	},
	{
		type: "Academic",
		icon: <FaGraduationCap />,
		items: [
			{
				title: "Rutgers University",
				subtitleItems: [
					"B.S. in Computer Science",
					"B.S. in Business Analytics & Information Technology",
				],
				date: "September 2017 — Present",
				location: "New Brunswick, New Jersey",
				info: [
					{
						title: "Involvement",
						items: [
							"Road to Silicon V/Alley (VP of External Affairs)",
							"TEDx Rutgers (Technology Team Member)",
							"Google Community Leaders Program (NGO Team Member)",
							"Road to Wall Street (Cohort 8 Member)",
							"Alpha Kappa Psi (Treasurer)",
						],
					},
					{
						title: "Honors",
						items: [
							"Dean's List (all semesters)",
							"Presidential Scholar",
							"Honors College",
							"Beta Gamma Sigma Honor Society",
						],
					},
				],
				svgId: "rutgers",
			},
			{
				title: "John P. Stevens High School",
				date: "September 2013 — May 2017",
				location: "Edison, New Jersey",
				info: [
					{
						title: "Involvement",
						items: [
							"Model United Nations (Director of Finance)",
							"Student Council (Student Action Committee Director)",
							"Lacrosse",
						],
					},
					{
						title: "Honors",
						items: [
							"National AP Scholar",
							"National Honor Society",
							"National Social Studies Honor Society",
							"National English Honor Society",
							"National Spanish Honor Society",
						],
					},
				],
				svgId: "jps",
				smallerSvg: true,
			},
		],
	},
]
