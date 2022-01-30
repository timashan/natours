import View from "./view.js";

class sectionFeatures extends View {
  _parentElement = document.querySelector(".section-features");

  constructor() {
    super();
    this._setParentObserver(this._callbackObserver);
  }
}

export default new sectionFeatures();
