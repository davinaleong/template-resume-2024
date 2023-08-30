/// Components
import dayjs from "dayjs"
import {
  LinkInterface,
  ExperienceInterface,
  SkillInterface,
} from "../interfaces"

const DATE_FORMAT = `MMM YYYY`

export const linkComponent = ({ name, url, target }: LinkInterface): String => {
  return `<a href="${url ? url : "#"}" target="${
    target ? target : "_self"
  }">${name}</a>`
}

export const skillComponent = ({ name, items }: SkillInterface) => {
  return `
  <p>
    <strong>${name}</strong><br>
    ${items.join(`, `)}
  </p>
`
}

export const experienceComponent = ({
  name,
  dates,
  location,
  position,
  items,
}: ExperienceInterface): String => {
  const dayjsDates: Array<String> = []
  dates.forEach((date) => {
    const djDate = dayjs(date)
    if (djDate.isValid()) {
      dayjsDates.push(dayjs(date).format(DATE_FORMAT))
    } else {
      dayjsDates.push(date)
    }
  })

  let itemsHtml = ``
  items.forEach((item) => {
    itemsHtml += `<li>${item}</li>`
  })

  return `
    <div class="m-block-start-v-400" style="--_spacer: var(--v-100);">
      <p class="p-grid"><strong>Name:</strong><span>${name}</span></p>
      <p class="p-grid"><strong>Period:</strong><span>${dayjsDates.join(
        ` &ndash; `
      )}</span></p>
      <p class="p-grid"><strong>Location:</strong><span>${location}</span></p>
      <p class="p-grid"><strong>Position:</strong><span>${position}</span></p>
      <ul class="m-block-start-v-200">${itemsHtml}</ul>
    </div>
  `
}

export const components = {
  linkComponent,
  skillComponent,
  experienceComponent,
}
