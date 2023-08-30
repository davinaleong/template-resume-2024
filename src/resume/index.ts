import {
  certificateComponent,
  certificationComponent,
  educationComponent,
  experienceComponent,
  linkComponent,
  otherComponent,
  skillComponent,
} from "../components"
import {
  LinkInterface,
  SkillInterface,
  ExperienceInterface,
  EducationInterface,
  CertificateInterface,
  OtherInterface,
} from "../interfaces"

export function initResume(
  element: HTMLDivElement,
  {
    personalInfo,
    objective,
    skills,
    experiences,
    education,
    certificates,
    hobbies,
    others,
  }: ResumeInterface
) {
  let html = `
    <h1 class="fz-900">${personalInfo.name}</h1>
  `

  let socialMediaHtml = ``

  personalInfo.socialMedia.forEach((smLink: LinkInterface, index: number) => {
    socialMediaHtml += `${linkComponent(smLink)}`

    if (index < personalInfo.socialMedia.length - 1) {
      socialMediaHtml += `, `
    }
  })

  html += `
  <div style="--_spacer: var(--v-100);">
    <p class="p-grid"><strong>Address:</strong><span>${
      personalInfo.address
    }</span></p>
    <p class="p-grid"><strong>Email:</strong><span>${linkComponent(
      personalInfo.email
    )}</p>
    <p class="p-grid"><strong>Links:</strong><span>${socialMediaHtml}</span></p>
  </div>

  <p>${objective}</p>
  <hr>

  <h2 class="fz-700">Skills</h2>
  `

  skills.forEach((skill: SkillInterface) => (html += skillComponent(skill)))

  html += `
    <hr>

    <h2 class="fz-700">Experience</h2>
  `

  experiences.forEach(
    (experience: ExperienceInterface) =>
      (html += experienceComponent(experience))
  )

  html += `
    <hr>

    <h2 class="fz-700">Education</h2>
  `

  education.forEach(
    (educationItem: EducationInterface) =>
      (html += educationComponent(educationItem))
  )

  html += `
    <hr>

    <h2 class="fz-700">Certificates</h2>
  `

  certificates.forEach(
    (certificate: CertificateInterface) =>
      (html += certificateComponent(certificate))
  )

  others.forEach((other: OtherInterface) => (html += otherComponent(other)))

  html += `
    <hr>

    <h2 class="fz-700">Hobbies</h2>
  `

  let hobbiesHtml = ``
  hobbies.forEach((item: string) => (hobbiesHtml += `<li>${item}</li>`))

  html += `<ul>${hobbiesHtml}</ul>`

  element.innerHTML = html
}
