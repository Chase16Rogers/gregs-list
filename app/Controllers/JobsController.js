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
    this.getJob()
    _drawJobs()
  }

  getJob() {
    try { jobsService.getJobs() }
    catch (error) { console.error(error) }
  }

  deleteJob(id) {
    try { jobsService.deleteJob(id) }
    catch (error) { console.error(error) }

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
    try { jobsService.createJob(jobForm) }
    catch (error) { console.error(error) }

    form.reset()
    $("#new-job-modal").modal('hide')
  }

  bid(id, newPrice) {
    try { jobsService.bid(id, newPrice) }
    catch (error) { console.error(error) }
  }

}