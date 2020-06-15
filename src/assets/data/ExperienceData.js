import JPSSVG from "../images/experience/jpstevens.inline.svg"
import KPMGSVG from "../images/experience/kpmg.inline.svg"
import OrthoSVG from "../images/experience/ortho.inline.svg"
import React from "react"
import RutgersSVG from "../images/experience/rutgers.inline.svg"
import SchonfeldSVG from "../images/experience/schonfeld.inline.svg"

export const professionalExperience = [
  {
    company: "Schonfeld Strategic Advisors",
    date: "June 2020 — August 2020",
    location: "New York, New York",
    role: "Incoming Software Engineering Intern",
    tools: ["TBD"],
    icon: <SchonfeldSVG className="experience-svg" />,
  },
  {
    company: "KPMG LLP",
    date: "June 2019 — August 2019",
    location: "New York, New York",
    role: "Information Technology Audit and Assurance Intern",
    tools: ["Microsoft Excel"],
    icon: <KPMGSVG className="experience-svg" />,
  },
  {
    company: "Ortho Clinical Diagnostics",
    date: "June 2018 — August 2018",
    location: "Raritan, New Jersey",
    role: "Compute Services Intern",
    tools: [
      "Windows Active Directory",
      "Office 365 Admin Center",
      "Linux CLI",
      "SharePoint",
    ],
    icon: <OrthoSVG className="experience-svg" />,
  },
]

export const academicExperience = [
  {
    school: "Rutgers University",
    date: "2017 — Present",
    degrees: [
      "B.S. in Computer Science",
      "B.S. in Business Analytics & Information Technology",
    ],
    location: "New Brunswick, New Jersey",
    involvement: [
      "Road to Silicon V/Alley (VP of External Affairs)",
      "TEDx Rutgers (Technology Team Member)",
      "Google Community Leaders Program (NGO Team Member)",
      "Road to Wall Street (Cohort 8 Member)",
      "Alpha Kappa Psi (Treasurer)",
    ],
    honors: [
      "Dean's List (all semesters)",
      "Presidential Scholar",
      "Honors College",
      "Beta Gamma Sigma Honor Society",
    ],
    icon: <RutgersSVG className="experience-svg" />,
  },
  {
    school: "John P. Stevens High School",
    date: "2013 — 2017",
    degrees: [],
    location: "Edison, New Jersey",
    involvement: [
      "Model United Nations (Director of Finance)",
      "Student Council (Studen Action Committee Director)",
      "Lacrosse",
    ],
    honors: [
      "National AP Scholar",
      "National Honor Society",
      "National Social Studies Honor Society",
      "National English Honor Society",
      "National Spanish Honor Society",
    ],
    icon: <JPSSVG className="experience-svg smaller" />,
  },
]
