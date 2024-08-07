export class Card {
  constructor(values) {
    this.container = values.container;

    this.flip = values.flip;

    this.createElement();

    this.cardNumber = values.cardNumber;
  }

  createElement() {
    const card = document.createElement("div");
    const cardContent = document.createElement("div");
    const cardFront = document.createElement("div");
    const cardBack = document.createElement("div");

    card.classList.add("flip-card", "flex");
    cardContent.classList.add("flip-card-inner");
    cardFront.classList.add("flip-card-front");
    cardBack.classList.add("flip-card-back");

    this.container.append(card);
    card.append(cardContent);
    cardContent.append(cardFront, cardBack);

    this.domElNumber = cardBack;
    this.cardDiv = card;

    card.addEventListener("click", () => {
      this.flip(this);
    });
  }

  set cardNumber(value) {
    this.domElNumber.textContent = value;
    this.domElNumber.classList.add(`card${this.domElNumber.textContent}`);
  }
  get cardNumber() {
    return this.domElNumber.innerText;
  }

  set open(value) {
    if (value) {
      this.cardDiv.classList.add("flip-card-rotate");
    } else {
      this.cardDiv.classList.remove("flip-card-rotate");
    }
  }
  get open() {
    return this.cardDiv.className.includes("flip-card-rotate");
  }

  set success(value) {
    this.cardDiv.classList.add("hide-card");
  }
  get success() {
    return this.cardDiv.className.includes("hide-card");
  }
}
