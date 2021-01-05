import { ProxyState } from "../AppState.js"
import { houseService } from "../Services/HouseService.js"

function _drawHouses() {
  let template = ""
  ProxyState.houses.forEach(h => {
    template += h.Template
  })
  document.getElementById("houses").innerHTML = template
}

export default class HousesController {
  constructor() {
    ProxyState.on("houses", _drawHouses)

    _drawHouses()
  }

  createHouse() {
    window.event.preventDefault()
    let form = window.event.target
    let houseForm = {
      company: form['company'].value,
      jobTitle: form['jobTitle'].value,
      hours: form['hours'].value,
      rate: form['rate'].value,
      description: form['description'].value,
    }
    houseService.createHouse(houseForm)
    form.reset()

    $("#new-house-modal").modal('hide')
  }

  deleteHouse(id) {
    houseService.deleteHouse(id)
  }
}