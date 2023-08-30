import {
  ResumeInterface,
  PersonalInfoInterface,
  LinkInterface,
  SkillInterface,
  ExperienceInterface,
  EducationInterface,
  CertificateInterface,
  OtherInterface,
} from "../interfaces"

/// #region Personal Info
const email: LinkInterface = {
  name: "leong.shi.yun@gmail.com",
  url: "mailto:leong.shi.yun@gmail.com",
}

const website: LinkInterface = {
  name: "Portfolio",
  url: "https://www.davina-devs.com/",
  target: "_blank",
}

const linkedIn: LinkInterface = {
  name: "LinkedIn",
  url: "https://www.linkedin.com/in/davina-leong-s9115675g/",
  target: "_blank",
}

const gitHub: LinkInterface = {
  name: "GitHub",
  url: "https://github.com/davinaleong/",
  target: "_blank",
}

export const personalInfo: PersonalInfoInterface = {
  name: "Davina Leong",
  address: "West, Singapore",
  email: email,
  socialMedia: [website, linkedIn, gitHub],
}
/// #endregion

/// #region Objective
export const objective: String =
  "With 8 years of experience as a skilled full-stack web developer, I am actively seeking a challenging position that can fully leverage my expertise in Laravel, React, and REST API development. My unrelenting passion for learning, coupled with my self-driven attitude, makes me a true asset to any team. I am eager to make a meaningful contribution to a forward-thinking and innovative organization."
/// #endregion

/// #region Skills
const develop: SkillInterface = {
  name: "Develop",
  items: [
    "HTML5",
    "CSS3",
    "Responsive web design",
    "JavaScript ES6",
    "PHP",
    "Laravel",
    "SQL",
    "React",
    "Typescript",
    "REST API",
    "GraphQL",
  ],
}

const design: SkillInterface = {
  name: "Design",
  items: ["XD", "Photoshop", "Illustrator"],
}

const devOps: SkillInterface = {
  name: "DevOps",
  items: ["AWS", "Heroku", "Netlify"],
}

const languages: SkillInterface = {
  name: "Languages",
  items: ["English", "Chinese (Mandarin)"],
}

export const skills: Array<SkillInterface> = [
  design,
  develop,
  devOps,
  languages,
]
/// #endregion

/// #region Experience
const gic: ExperienceInterface = {
  name: "Government Investment Company",
  dates: ["2023-05-01", "Present"],
  location: "Tanjong Pagar, Singapore",
  position: "Associate Systems Engineer",
  items: [
    "Planned and made over <strong>10</strong> successful production deployments, including PHP and WordPress updates.",
    "Received <strong>commendations</strong> from stakeholders and vendors.",
    "Implemented UAT SOP.",
  ],
}

const epos: ExperienceInterface = {
  name: "EPOS POS System Singapore",
  dates: ["2022-06-01", "2023-01-01"],
  location: "RedHill, Singapore",
  position: "Web Developer",
  items: [
    "Developed the <strong>company’s SOP</strong> for building websites.",
    "Constructed <strong>15 websites</strong> in WordPress using PHP, Elementor, MetForm and Contact 7.",
    "Built custom features like <strong>tabbed content and carousels</strong> in HTML5, CSS3 and JavaScript ES6.",
  ],
}

const firstCom: ExperienceInterface = {
  name: "FirstCom Solutions",
  dates: ["2021-06-01", "2022-06-01"],
  location: "Kallang, Singapore",
  position: "Web Developer",
  items: [
    "Developed <strong>over 20 websites</strong> using PHP, OpenCart, WordPress, WooCommerce, responsive web design, Bootstrap, HTML5, CSS3 and JavaScript ES6.",
    "Deployed <strong>over 30 websites to production</strong>, including setting up cron jobs, and database management.",
    "<strong>Integrated manual and PayPal payments</strong> with a custom Wix checkout page using PHP, Laravel, SQL and REST API.",
  ],
}

const liv3ly: ExperienceInterface = {
  name: "Liv3ly Pte Ltd",
  dates: ["2020-06-01", "2021-05-01"],
  location: "Ubi, Singapore",
  position: "Web Developer",
  items: [
    "Developed an API for a social platform in PHP, Laravel, SQL and REST API which <strong>allows users to clock steps and sign up for sports events</strong>.",
    "Created an nternal system in PHP, Laravel, Bootstrap, HTML5, CSS3 and JavaScript ES6 for <strong>admin to manage and process API data</strong>.",
    "Built a dashboard in PHP, Laravel, SQL, Elasticsearch, HTML5, CSS3 and JavaScript ES6 for <strong>customers to view statistics</strong> like event revenue.",
  ],
}

const pixel: ExperienceInterface = {
  name: "The Pixel Age",
  dates: ["2018-05-01", "2019-08-01"],
  location: "Paya Lebar, Singapore",
  position: "Web Developer",
  items: [
    "Developed a <strong>social media API</strong> in NodeJS, JavaScript ES6, Sequelize, GraphQL and AppSync.",
    "Developed <strong>5 sites</strong> in CraftCMS.",
    "Developer a <strong>dashboard</strong> in PHP, Laravel, Bootstrap, HTML5, CSS3 and JavaScript ES6.",
  ],
}

const shipyard: ExperienceInterface = {
  name: "The Shipyard Private Limited",
  dates: ["2015-11-01", "2018-05-01"],
  location: "Changi Business Park, Singapore",
  position: "Web Developer",
  items: [
    "Developed <strong>many projects</strong> in PHP, CodeIgniter, Bootstrap, HTML5, CSS3, and JavaScript ES6.",
    "Created and <strong>integrated a real-time UI</strong> in React and JSX for CodeIgniter applications.",
    "Built a <strong>ride-hailing app</strong> in Angular 2 using the Ionic Framework.",
  ],
}

export const experiences: Array<ExperienceInterface> = [
  gic,
  epos,
  firstCom,
  liv3ly,
  pixel,
  shipyard,
]
/// #endregion

/// #region Education
const polytechnic: EducationInterface = {
  name: "Diploma in Information Technology",
  dates: ["2008-01-01", "2011-04-01"],
  location: "Singapore Polyechnic, Singapore",
}

const secondary: EducationInterface = {
  name: "'O' Levels",
  dates: ["2004-01-01", "2007-01-01"],
  location: "West Spring Secondary School, Singapore",
}

const primary: EducationInterface = {
  name: "PSLE",
  dates: ["1998-01-01", "2003-01-01"],
  location: "St. Anthony's Primary School, Singapore",
}

export const education: Array<EducationInterface> = [polytechnic]
/// #endregion

/// #region Certificates
const cybersecurity: CertificateInterface = {
  name: "Cybersecurity Awareness Programme",
  dates: ["2023-02-01"],
  location: "NTUC Learning Hub, Singapore",
}

const scrum: CertificateInterface = {
  name: "Certified Scrum Master",
  dates: ["2021-05-01"],
  location: "Scrum Alliance",
}

const spinnovex: CertificateInterface = {
  name: "Outstanding Project Gold Award (SPINNOVEX 2011)",
  dates: ["2011-01-01"],
  location: "Singapore Polytechnic, Singapore",
}

export const certificates: Array<CertificateInterface> = [
  cybersecurity,
  scrum,
  spinnovex,
]
/// #endregion

/// #region Others
const lifestyle: LinkInterface = {
  name: "A Healthy Lifestyle for Programmers",
  url: "https://engineers.sg/v/3146/",
  target: "_blank",
}

const craftCms: LinkInterface = {
  name: "CraftCMS",
  url: "https://engineers.sg/v/3235/",
  target: "_blank",
}

const talks: OtherInterface = {
  name: "Talks",
  items: [craftCms, lifestyle],
}

export const others: Array<OtherInterface> = [talks]
/// #endregion

/// #region Hobbies
export const hobbies: Array<String> = [
  "Hanging out with Jesus",
  "Food",
  "Programming",
  "Board and video games",
  "Gym",
]
/// #endregion

/// #region Resume
export const resume: ResumeInterface = {
  personalInfo,
  objective,
  skills,
  experiences,
  education,
  certificates,
  others,
  hobbies,
}
/// #endregion
