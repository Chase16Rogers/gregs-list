import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"
import { api } from "./AxiosService.js"


class HouseService {
  async getHouses() {
    let res = await api.get("houses")
    ProxyState.houses = res.data.map(h => new House(h))
  }

  async createHouse(houseForm) {
    await api.post("houses", houseForm)
    this.getHouses()
  }

  async deleteHouse(id) {
    await api.delete("houses/" + id)
    ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
  }





}

export const houseService = new HouseService()