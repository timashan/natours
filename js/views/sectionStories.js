import View from "./view.js";

class sectionStories extends View {
  _parentElement = document.querySelector(".section-stories");

  constructor() {
    super();
    this._setParentObserver(this._callbackObserver);
  }
}

export default new sectionStories();
