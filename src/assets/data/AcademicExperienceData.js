import JPSSVG from "../images/experience/jpstevens.inline.svg"
import React from "react"
import RutgersSVG from "../images/experience/rutgers.inline.svg"

export const academicExperience = [
  {
    school: "Rutgers University",
    date: "2017 — Present",
    degrees: [
      "B.S. in Computer Science",
      "B.S. in Business Analytics & Information Technology",
    ],
    involvement: [
      "Road to Silicon V/Alley (VP of External Affairs)",
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
    icon: <RutgersSVG />,
  },
  {
    school: "John P. Stevens High School",
    date: "2013 — 2017",
    degrees: [],
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
    icon: <JPSSVG />,
  },
]
