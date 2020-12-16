import Car from "./Models/Car.js"
import House from "./Models/House.js"
import Job from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [new Car({ make: "Benz", model: "1", year: 1985, price: 10000000, description: "Its old", imgUrl: "https://d1vl6ykwv1m2rb.cloudfront.net/blog/wp-content/uploads/2018/03/20142414/auto-11.jpg" })]

  /** @type {House[]} */
  houses = [new House({ company: "WalMart", jobTitle: "Cahier", hours: 20, rate: 7.25, description: "This job entails scanning items and not being too unpleasant." })]

  /**@type {Job[]} */
  jobs = [new Job({ bedrooms: 3, bathrooms: 9, levels: 2, imgUrl: "https://cdn.aarp.net/content/dam/aarp/home-and-family/your-home/2018/06/1140-house-inheriting.imgcache.rev.web.700.403.jpg", year: 1914, price: 30000, description: "Is a very nice house, you will like it a lot" })]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
