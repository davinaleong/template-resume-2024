import "./styles/app.scss"
import { initResume } from "./resume/index.ts"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main id="resume" class="wrapper wrapper-centered flow">
    <h1>Resume</h1>
  </main>
`

initResume(document.querySelector<HTMLDivElement>("#resume")!)
