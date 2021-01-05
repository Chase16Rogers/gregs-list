import { ProxyState } from "../AppState.js"
import House from "../Models/House.js"
import { api } from "./AxiosService.js"


class HouseService {
  async getHouses() {
    let res = await api.get("jobs")
    console.log("jobs")
    console.log(res)
    ProxyState.houses = res.data.map(h => new House(h))
  }

  async createHouse(houseForm) {
    await api.post("jobs", houseForm)
    this.getHouses()
  }

  async deleteHouse(id) {
    await api.delete("jobs/" + id)
    ProxyState.houses = ProxyState.houses.filter(h => h.id != id)
  }

  async bid(id, newPrice) {
    let houseData = { rate: newPrice }
    let res = await api.put("jobs/" + id, houseData)
    this.getHouses()
    // let houseIndex = ProxyState.houses.findIndex(h => h.id == id)
    // let temp = ProxyState.houses
    // temp.splice(houseIndex, 1, new House(res.data))
    // ProxyState.houses = temp
  }



}

export const houseService = new HouseService()