/// Components
import { LinkInterface } from "../interfaces"

export const link = ({ name, url, target }: LinkInterface): String => {
  return `<a href="${url ? url : "#"}" target="${
    target ? target : "_self"
  }">${name}</a>`
}

export const components = {
  link,
}
