import View from "./view.js";

class sectionAbout extends View {
  _parentElement = document.querySelector(".section-about");

  constructor() {
    super();
    this._setParentObserver(this._callbackObserver);
  }
}

export default new sectionAbout();
