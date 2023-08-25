export interface ResumeInterface {
  personalInfo: PersonalInfoInterface
  objective: String
  skills: Array<SkillInterface>
  experiences: Array<ExperienceInterface>
  education: Array<EducationInterface>
  certificates: Array<CertificateInterface>
  others?: Array<OtherInterface>
  hobbies?: Array<String>
}

export interface PersonalInfoInterface {
  name: String
  address: String
  email: LinkInterface
  socialMedia: Array<LinkInterface>
}

export interface LinkInterface {
  name: String
  url: String
  target?: String
}

export interface SkillInterface {
  name: String
  items: Array<String>
}

export interface ExperienceInterface {
  name: String
  dates: Array<String>
  location: String
  position: String
  items: Array<String>
}

export interface EducationInterface {
  name: String
  dates: Array<String>
  location: String
}

export interface CertificateInterface {
  name: String
  dates: Array<String>
  location: String
}

export interface OtherInterface {
  name: String
  items: Array<LinkInterface>
}
