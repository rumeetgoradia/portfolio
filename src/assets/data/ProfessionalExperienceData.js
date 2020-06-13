import KPMGSVG from "../images/experience/kpmg.inline.svg"
import OrthoSVG from "../images/experience/ortho.inline.svg"
import React from "react"
import SchonfeldSVG from "../images/experience/schonfeld.inline.svg"

export const professionalExperience = [
  {
    company: "Schonfeld Strategic Advisors",
    date: "June 2020 — August 2020",
    location: "New York, New York",
    role: "Incoming Software Engineering Intern",
    tools: ["TBD"],
    icon: <SchonfeldSVG />,
  },
  {
    company: "KPMG LLP",
    date: "June 2019 — August 2019",
    location: "New York, New York",
    role: "Information Technology Audit and Assurance Intern",
    tools: ["Microsoft Excel"],
    icon: <KPMGSVG />,
  },
  {
    company: "Ortho Clinical Diagnostics",
    date: "June 2019 — August 2019",
    location: "Raritan, New Jersey",
    role: "Compute Services Intern",
    tools: [
      "Windows Active Directory",
      "Office 365 Admin Center",
      "Linux CLI",
      "SharePoint",
    ],
    icon: <OrthoSVG />,
  },
]
