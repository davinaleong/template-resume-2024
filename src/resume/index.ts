import {
  experienceComponent,
  linkComponent,
  skillComponent,
} from "../components"
import {
  ExperienceInterface,
  LinkInterface,
  ResumeInterface,
  SkillInterface,
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

  element.innerHTML = html
}
