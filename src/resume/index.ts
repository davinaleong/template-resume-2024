import { config } from "../config"
import {
  certificateComponent,
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
  let html = ``

  /// #region Personal Info
  if (config.showPersonalInfo) {
    html += `<h1 class="fz-900">${personalInfo.name}</h1>`
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
    `
  }
  /// #endregion

  /// #region Objective
  if (config.showObjective) {
    html += `<p>${objective}</p>`
  }
  /// #region

  /// #region Skills
  if (config.showSkills) {
    html += `
    <hr>

    <h2 class="fz-700">Skills</h2>
    `

    skills.forEach((skill: SkillInterface) => (html += skillComponent(skill)))
  }
  /// #endregion

  /// #region Experience
  if (config.showExperience) {
    html += `
      <hr>

      <h2 class="fz-700">Experience</h2>
    `

    experiences.forEach(
      (experience: ExperienceInterface) =>
        (html += experienceComponent(experience))
    )
  }
  /// #endregion

  /// #region Education
  if (config.showEducation) {
    html += `
      <hr>

      <h2 class="fz-700">Education</h2>
    `

    education.forEach(
      (educationItem: EducationInterface) =>
        (html += educationComponent(educationItem))
    )
  }
  /// #endregion

  /// #region Certificates
  if (config.showCertificates) {
    html += `
      <hr>

      <h2 class="fz-700">Certificates</h2>
    `

    certificates.forEach(
      (certificate: CertificateInterface) =>
        (html += certificateComponent(certificate))
    )
  }
  /// #endregion

  /// #region Others
  if (config.showOthers) {
    others.forEach((other: OtherInterface) => (html += otherComponent(other)))
  }
  /// #endregion

  /// #region Hobbies
  if (config.showHobbies) {
    html += `
      <hr>

      <h2 class="fz-700">Hobbies</h2>
    `

    let hobbiesHtml = ``
    hobbies.forEach((item: string) => (hobbiesHtml += `<li>${item}</li>`))

    html += `<ul>${hobbiesHtml}</ul>`
  }
  /// #endregion

  element.innerHTML = html
}
