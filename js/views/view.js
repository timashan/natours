export default class View {
  _setParentObserver(callback) {
    this._observer = new IntersectionObserver(callback.bind(this), {
      root: null,
      threshold: 0.5,
    });
    this._observer.observe(this._parentElement);
  }

  _callbackObserver(entries) {
    const heading2 = this._parentElement.querySelector(".heading-secondary");
    const card = this._parentElement.querySelector(".card");

    if (!entries[0].isIntersecting) {
      heading2.classList.remove("u-letter-spacing-small");
      return;
    }
    heading2.classList.add("u-letter-spacing-small");

    if (card) {
      card.classList.add("card-hover");
      setTimeout(() => card.classList.remove("card-hover"), 2000);
    }
  }
}
