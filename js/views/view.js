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
    const featureBoxes = this._parentElement.querySelectorAll(".feature-box");
    const photo = this._parentElement.querySelector(".composition__photo-3");

    if (!entries[0].isIntersecting) {
      if (heading2) heading2.classList.remove("u-letter-spacing-small");
      return;
    }

    if (heading2) {
      heading2.classList.add("u-letter-spacing-small");
    }

    if (photo) {
      photo.animate(
        [
          {
            transform: "scale(1.1)",
            outline: "1rem solid #55c57a",
            outlineOffset: "2rem",
            offset: "0.3",
          },

          {
            transform: "scale(1.1)",
            outline: "1rem solid #55c57a",
            outlineOffset: "2rem",
            offset: "0.8",
          },
        ],
        { duration: 1000 }
      );
    }

    if (featureBoxes) {
      featureBoxes.forEach((fb, i) =>
        fb.animate(
          [
            {
              transform: "translateY(-3rem)",
              backgroundColor: "white",
              offset: 0.5,
            },
            { transform: "translateY(0)" },
          ],
          {
            duration: 300 * (i + 1),
          }
        )
      );
    }

    if (card) {
      const front = card.querySelector(".card__side--front");
      const back = card.querySelector(".card__side--back");

      front.animate(
        [
          { transform: "rotateY(-160deg)", offset: "0.2" },
          { transform: "rotateY(-160deg)", offset: "0.8" },
        ],
        {
          duration: 2000,
        }
      );
      back.animate(
        [
          { transform: "rotateY(20deg)", offset: "0.2" },
          { transform: "rotateY(20deg)", offset: "0.8" },
        ],
        {
          duration: 2000,
        }
      );
    }

    // if (card) {
    //   card.classList.add("card-hover");
    //   setTimeout(() => card.classList.remove("card-hover"), 2000);
    // }
  }
}
