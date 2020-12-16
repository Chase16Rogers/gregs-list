import { generateId } from "../Utils/GenerateId.js"

export default class House {

  constructor({ company, jobTitle, hours, rate, description }) {
    this.id = generateId()
    this.company = company
    this.jobTitle = jobTitle
    this.hours = hours
    this.rate = rate
    this.description = description
  }


  get Template() {
    return `
<div class="col-md-4 col-6 mt-3">
<div class="card">
    <div class="card-body">
    <h4> ${this.company} is hiring!</h4>
    <h5>${this.jobTitle}</h5>
    <p>${this.hours} hours a week.</p>
    <p>$${this.rate} an hour.</p>
    <p>${this.description}</p>
        <div class="text-right">
            <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
        </div>
    </div>
</div>
</div>
    `
  }
}