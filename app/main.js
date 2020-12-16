import CarsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HousesController.js";
import JobsController from "./Controllers/JobsController.js";
import PagesController from "./Controllers/PagesController.js";

class App {
  //valuesController = new ValuesController();
  carsController = new CarsController()
  housesController = new HousesController()
  jobsController = new JobsController()
  pagesController = new PagesController()
}

window["app"] = new App();
