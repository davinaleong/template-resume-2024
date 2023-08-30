import { link } from "../components"
import { LinkInterface, ResumeInterface } from "../interfaces"
import { personalInfo } from "./resume"

export function initResume(element: HTMLDivElement, resume: ResumeInterface) {
  let html = `
    <h1 class="fz-900">${personalInfo.name}</h1>
  `

  let socialMediaHtml = ``

  personalInfo.socialMedia.forEach((smLink: LinkInterface, index: number) => {
    socialMediaHtml += `${link(smLink)}`

    if (index < personalInfo.socialMedia.length - 1) {
      socialMediaHtml += `, `
    }
  })

  html += `
  <p class="personal-info">
    <strong>Address:</strong><span>${personalInfo.address}</span>
    <strong>Email:</strong><span>${link(personalInfo.email)}</span>
    <strong>Links:</strong><span>${socialMediaHtml}</span>
  </p>`

  element.innerHTML = html
}
