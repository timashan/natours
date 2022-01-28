import View from "./view.js";

class sectionTours extends View {
  _parentElement = document.querySelector(".section-tours");

  constructor() {
    super();
    this._setParentObserver(this._callbackObserver);
  }
}

export default new sectionTours();
