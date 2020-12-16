import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"


class HouseService {

  deleteHouse(id) {
    ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
  }
  createHouse(houseForm) {
    let newHouse = new House(houseForm)
    ProxyState.houses = [...ProxyState.houses, newHouse]
  }
}

export const houseService = new HouseService()