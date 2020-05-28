import {
  FaAndroid,
  FaChartLine,
  FaDatabase,
  FaHtml5,
  FaLinux,
  FaPython,
} from "react-icons/fa"

import React from "react"

export const skills = [
  {
    title: "Web Design & Development",
    tools: ["ReactJS", "HTML5", "CSS3", "Vanilla JavaScript"],
    icon: <FaHtml5 />,
  },
  {
    title: "Procedural Programming",
    tools: ["Java 8", "Python 3"],
    icon: <FaPython />,
  },
  {
    title: "App Development",
    tools: ["JavaFX", "Android Studio"],
    icon: <FaAndroid />,
  },
  {
    title: "Low-Level Programming",
    tools: ["C", "Assembly", "Linux Command Line"],
    icon: <FaLinux />,
  },
  {
    title: "Database Management",
    tools: ["MySQL", "Microsoft Access"],
    icon: <FaDatabase />,
  },
  {
    title: "Data Analysis & Modeling",
    tools: ["R, Microsoft Excel, NumPy"],
    icon: <FaChartLine />,
  },
]
