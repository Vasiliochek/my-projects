import { Card } from "./card.js";

export class AmazingCard extends Card {
  set cardNumber(value) {
    const cardsImgArray = [
      'url("./img/cards-faces/1.png")',
      'url("./img/cards-faces/2.png")',
      'url("./img/cards-faces/4.png")',
      'url("./img/cards-faces/3.png")',
      'url("./img/cards-faces/5.png")',
      'url("./img/cards-faces/6.png")',
      'url("./img/cards-faces/7.png")',
      'url("./img/cards-faces/8.png")',
      'url("./img/cards-faces/9.png")',
      'url("./img/cards-faces/10.png")',
      'url("./img/cards-faces/11.png")',
      'url("./img/cards-faces/12.png")',
      'url("./img/cards-faces/13.png")',
      'url("./img/cards-faces/14.png")',
      'url("./img/cards-faces/15.png")',
      'url("./img/cards-faces/16.png")',
      'url("./img/cards-faces/17.png")',
      'url("./img/cards-faces/18.png")',
      'url("./img/cards-faces/19.png")',
      'url("./img/cards-faces/20.png")',
      'url("./img/cards-faces/21.png")',
      'url("./img/cards-faces/22.png")',
      'url("./img/cards-faces/23.png")',
      'url("./img/cards-faces/24.png")',
      'url("./img/cards-faces/25.png")',
      'url("./img/cards-faces/26.png")',
      'url("./img/cards-faces/27.png")',
      'url("./img/cards-faces/28.png")',
      'url("./img/cards-faces/29.png")',
      'url("./img/cards-faces/30.png")',
      'url("./img/cards-faces/31.png")',
      'url("./img/cards-faces/32.png")',
      'url("./img/cards-faces/33.png")',
      'url("./img/cards-faces/34.png")',
      'url("./img/cards-faces/35.png")',
      'url("./img/cards-faces/36.png")',
      'url("./img/cards-faces/37.png")',
      'url("./img/cards-faces/38.png")',
      'url("./img/cards-faces/39.png")',
      'url("./img/cards-faces/40.png")',
      'url("./img/cards-faces/41.png")',
      'url("./img/cards-faces/42.png")',
      'url("./img/cards-faces/43.png")',
      'url("./img/cards-faces/44.png")',
      'url("./img/cards-faces/45.png")',
      'url("./img/cards-faces/46.png")',
      'url("./img/cards-faces/47.png")',
      'url("./img/cards-faces/48.png")',
      'url("./img/cards-faces/49.png")',
      'url("./img/cards-faces/50.png")',
    ];

    this.domElNumber.classList.add(value);
    this.domElNumber.style.backgroundImage = cardsImgArray[value - 1];
  }

  get cardNumber() {
    const number = this.domElNumber.className.split(" ");
    const num = Number(number[1]);
    return num;
  }
}
