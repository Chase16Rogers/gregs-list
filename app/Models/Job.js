import { generateId } from "../Utils/GenerateId.js"


export default class Job {
  constructor({ bedrooms, bathrooms, levels, imgUrl, year, price, description }) {
    this.id = generateId()
    this.bedrooms = bedrooms
    this.levels = levels
    this.bathrooms = bathrooms
    this.imgUrl = imgUrl
    this.year = year
    this.price = price
    this.description = description
  }

  get Template() {
    return /*html */`
    <div class="col-md-4 col-6 mt-3">
    <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
        <span>
        <h3> $${this.price}</h3>
        <h3>${this.bedrooms} bed</h3>
        <h3>${this.bathrooms} bath</h3>
        </span>
        <h4>Built in ${this.year}</h4>
        <h4>${this.levels} story</h4>
        <p>${this.description}</p>
            <div class="text-right">
                <button type="button" class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
            </div>
        </div>
    </div>
    </div>
        `
  }
}