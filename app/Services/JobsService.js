import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"


class JobsService {
  deleteJob(id) {
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id != id)
  }
  createJob(jobForm) {
    let newJob = new Job(jobForm)
    ProxyState.jobs = [...ProxyState.jobs, newJob]
  }



}

export const jobsService = new JobsService()