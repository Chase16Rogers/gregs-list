import { pagesService } from "../Services/PagesService.js";


export default class PagesController {

  toggleDisplay(page) {
    pagesService.toggleDisplay(page)
  }
}