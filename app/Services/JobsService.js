import { ProxyState } from "../AppState.js"
import Job from "../Models/Job.js"
import { api } from "./AxiosService.js"


class JobsService {
  async getJobs() {
    let res = await api.get("houses")
    ProxyState.jobs = res.data.map(j => new Job(j))

  }
  async createJob(jobForm) {
    await api.post("houses", jobForm)
    this.getJobs()
  }

  async deleteJob(id) {
    await api.delete("houses/" + id)
    ProxyState.jobs = ProxyState.jobs.filter(j => j.id != id)
    this.getJobs()
  }

  async bid(id, newPrice) {
    let jobData = { price: newPrice }
    await api.put("houses/" + id, jobData)
    this.getJobs()
  }

}

export const jobsService = new JobsService()