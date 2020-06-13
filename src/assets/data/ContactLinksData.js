import { FaFileAlt, FaGithub, FaLinkedinIn } from "react-icons/fa"

import { BsFillEnvelopeFill } from "react-icons/bs"
import React from "react"

export const contactLinks = [
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
    url: "../../RumeetGoradiaResume.pdf",
    icon: <FaFileAlt />,
  },
]
