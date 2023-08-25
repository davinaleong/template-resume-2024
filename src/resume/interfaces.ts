export interface IResume {
  personalInfo: IPersonalInfo
  objective: String
  skills: Array<ISkill>
  experience: Array<IExperience>
  education: Array<IEducation>
  certificates: Array<ICertificate>
  others?: Array<IOther>
  hobbies?: Array<String>
}

export interface IPersonalInfo {
  name: String
  address: String
  email: ILink
  socialMedia: Array<ILink>
}

export interface ILink {
  label: String
  url: String
  target?: String
}

export interface ISkill {
  name: String
  items: Array<String>
}

export interface IExperience {
  name: String
  dates: Array<String>
  location: String
  position: String
  items: Array<String>
}

export interface IEducation {
  name: String
  dates: Array<String>
  location: String
}

export interface ICertificate {
  name: String
  dates: Array<String>
  location: String
}

export interface IOther {
  name: String
  dates: Array<String>
  location: String
}
