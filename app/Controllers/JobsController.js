import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";

function _drawJobs() {
  let template = ""
  ProxyState.jobs.forEach(j => {
    template += j.Template
  })
  document.getElementById("jobs").innerHTML = template
}
export default class JobsController {
  constructor() {
    ProxyState.on("jobs", _drawJobs)
    _drawJobs()
  }

  deleteJob(id) {
    jobsService.deleteJob(id)
  }

  createJob() {
    window.event.preventDefault()
    let form = window.event.target
    let jobForm = {
      bedrooms: form["bedrooms"].value,
      bathrooms: form["bathrooms"].value,
      levels: form["levels"].value,
      imgUrl: form["imgUrl"].value,
      year: form["year"].value,
      price: form["price"].value,
      description: form["description"].value,
    }
    jobsService.createJob(jobForm)
    form.reset()
    $("#new-job-modal").modal('hide')
  }

}