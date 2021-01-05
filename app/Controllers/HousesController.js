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
    this.getHouses()
    _drawHouses()
  }

  getHouses() {
    try { houseService.getHouses() }
    catch (error) { console.error(error) }
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

    try { houseService.createHouse(houseForm) }
    catch (error) { console.error(error) }
    form.reset()

    $("#new-house-modal").modal('hide')
  }

  deleteHouse(id) {
    try { houseService.deleteHouse(id) }
    catch (error) { console.error(error) }
  }

  bid(id, price) {
    try { houseService.bid(id, price) }
    catch (error) { console.error(error) }
  }
}