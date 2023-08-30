import "./styles/app.scss"
import { initResume } from "./resume/index.ts"
import { resume } from "./resume/resume.ts"

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <main id="resume" class="wrapper wrapper-centered flow p-v-400">
    <h1>Resume</h1>
  </main>
`

initResume(document.querySelector<HTMLDivElement>("#resume")!, resume)
