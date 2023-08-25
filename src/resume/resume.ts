import dayjs from "dayjs"
import {
  ResumeInterface,
  PersonalInfoInterface,
  LinkInterface,
  SkillInterface,
  ExperienceInterface,
  EducationInterface,
  CertificateInterface,
} from "./interfaces"

/// #region Personal Info
const email: LinkInterface = {
  label: "leong.shi.yun@gmail.com",
  url: "mailto:leong.shi.yun@gmail.com",
}

const website: LinkInterface = {
  label: "Website: DavDevs",
  url: "https://www.davina-devs.com/",
  target: "_blank",
}

const linkedIn: LinkInterface = {
  label: "LinkedIn: Davina Leong",
  url: "https://www.linkedin.com/in/davina-leong-s9115675g/",
  target: "_blank",
}

const gitHub: LinkInterface = {
  label: "GitHub: Davina Leong",
  url: "https://github.com/davinaleong/",
  target: "_blank",
}

const personalInfo: PersonalInfoInterface = {
  name: "Davina Leong",
  address: "West, Singapore",
  email: email,
  socialMedia: [website, linkedIn, gitHub],
}
/// #endregion

/// #region Objective
const objective: String =
  "With 8 years of experience as a skilled full-stack web developer, I am actively seeking a challenging position that can fully leverage my expertise in Laravel, React, and REST API development. My unrelenting passion for learning, coupled with my self-driven attitude, makes me a true asset to any team. I am eager to make a meaningful contribution to a forward-thinking and innovative organization."
/// #endregion

/// #region Skills

/// #endregion

/// #region Resume
const resume: ResumeInterface = {
  personalInfo,
  objective,
}
/// #endregion
