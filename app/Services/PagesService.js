

class PagesService {

  toggleDisplay(page) {
    let carRow = document.getElementById("cars")
    let jobRow = document.getElementById("houses")
    let houseRow = document.getElementById("jobs")
    let addCar = document.getElementById("addCars")
    let addJob = document.getElementById("addHouses")
    let addHouse = document.getElementById("addJobs")

    switch (page) {
      case "cars":
        carRow.classList.remove("d-none")
        jobRow.classList.add("d-none")
        houseRow.classList.add("d-none")
        addCar.classList.remove("d-none")
        addJob.classList.add("d-none")
        addHouse.classList.add("d-none")
        break;
      case "houses":
        carRow.classList.add("d-none")
        jobRow.classList.add("d-none")
        houseRow.classList.remove("d-none")
        addCar.classList.add("d-none")
        addJob.classList.add("d-none")
        addHouse.classList.remove("d-none")
        break;
      case "jobs":
        carRow.classList.add("d-none")
        jobRow.classList.remove("d-none")
        houseRow.classList.add("d-none")
        addCar.classList.add("d-none")
        addJob.classList.remove("d-none")
        addHouse.classList.add("d-none")
        break;
    }
    document.getElementById("welcome").classList.add("d-none")
  }

}

export const pagesService = new PagesService()