import { AmazingCard } from "./AmazingCard.js";

const menu = document.querySelector(".menu");
const startGameBtn = document.querySelector(".btn-start");
const table = document.querySelector(".row");
const stopGameContainer = document.querySelector(".stop-btn-container");
const stopGameBtn = document.querySelector(".btn-stop");

const inputHorizontal = document.querySelector(".input-horizontal");
const inputVertical = document.querySelector(".input-vertical");

const restartBtn = document.createElement("button");

const timer = document.createElement("button");
let oneMinute = 60;
let clear;

const timerBtn = document.querySelector(".timer");
// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

function createNumbersArray(count) {
  let array = [];
  for (let i = 0; i < count; i++) {
    array.push(i + 1, i + 1);
  }
  return array;
}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
  let currentIndex = arr.length;
  let randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
}

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.
let timerOn = false;
let rightCard = [];
let doneCard = [];

timerBtn.addEventListener("click", () => {
  timerOn = !timerOn;
});

function createDesk(array) {
  const allCards = [];
  array.forEach((el) => {
    const oneCard = new AmazingCard({
      container: table,
      cardNumber: el,
      flip: function (card) {
        if (!card.open && !rightCard.length) {
          card.open = true;
          rightCard.push(el);
          return;
        }
        if (card.open && rightCard.length === 1 && rightCard[0] === el) {
          card.open = false;
          rightCard = [];
          return;
        }
        if (!card.open && rightCard.length === 1 && rightCard[0] !== el) {
          card.open = true;
          setTimeout(() => {
            allCards.forEach((oneCard) => {
              oneCard.open = false;
            });
          }, 700);
          rightCard = [];
          return;
        }
        if (!card.open && rightCard.length === 1 && rightCard[0] === el) {
          card.open = true;
          console.log(oneCard.cardNumber);
          setTimeout(() => {
            allCards.forEach((oneCard) => {
              if (
                oneCard.open &&
                !oneCard.success &&
                oneCard.cardNumber === rightCard[0]
              ) {
                oneCard.success = true;
                doneCard.push(oneCard);
              }
            });
            if (doneCard.length === array.length) {
              cleanDesk();
            }
            rightCard = [];
          }, 1000);
        }
      },
    });
    allCards.push(oneCard);
  });
  setCardSize(array);
}

function cleanDesk() {
  let cards = document.querySelectorAll(".hide-card");

  cards.forEach((card) => {
    card.remove();
  });
  setTimeout(() => {
    restartBtn.classList.add("btn", "btn-dark", "btn-restart", "btn-lg");
    restartBtn.textContent = "Заново";

    table.append(restartBtn);

    clearInterval(clear);
    oneMinute = 60;
    timer.innerHTML = oneMinute;

    timer.classList.add("btn-hide");

    restartBtn.addEventListener("click", restartEvent, { once: true });
  }, 300);
}

function restartEvent() {
  if (timerOn) {
    timer.classList.remove("btn-hide");
    startTimer();
  }
  restartBtn.remove();
  let shuffledArray = shuffle(createNumbersArray(doneCard.length / 2));
  createDesk(shuffledArray);
  doneCard.length = [];
}

function setCardSize(array) {
  let cardSize = document.querySelectorAll(".flip-card");
  cardSize.forEach((cardSize) => {
    if (!inputHorizontal.value && !inputVertical.value) {
      cardSize.style.width = "calc(90% / 4)";
      cardSize.style.height = "calc(80% / 4)";
    }
    if (
      inputHorizontal.value &&
      inputVertical.value &&
      array.length % 2 === 0 &&
      array.length > 2
    ) {
      cardSize.style.width = `calc(80% / ${Math.floor(inputHorizontal.value)})`;
      cardSize.style.height = `calc(75% / ${Math.floor(inputVertical.value)})`;
    }
    if (array.length % 2 !== 0) {
      return;
    }
  });
}

function startGame() {
  startGameBtn.addEventListener(
    "click",
    function () {
      if (!inputHorizontal.value || !inputVertical.value) {
        menu.classList.add("btn-hide");
        table.classList.remove("btn-hide");
        stopGameBtn.classList.remove("btn-hide");

        if (timerOn) {
          startTimer();
        }

        let standartArr = createNumbersArray(8);
        createDesk(shuffle(standartArr));
        return;
      }
      if (
        inputHorizontal.value % 2 === 0 &&
        inputVertical.value % 2 === 0 &&
        inputHorizontal.value < 11 &&
        inputVertical.value < 11
      ) {
        menu.classList.add("btn-hide");
        table.classList.remove("btn-hide");
        stopGameBtn.classList.remove("btn-hide");

        if (timerOn) {
          startTimer();
        }

        const setCardsNumber = createNumbersArray(
          (inputHorizontal.value * inputVertical.value) / 2
        );
        createDesk(shuffle(setCardsNumber));
        return;
      }
      if (
        inputHorizontal.value % 2 !== 0 ||
        inputVertical.value % 2 !== 0 ||
        inputHorizontal.value <= 1 ||
        inputVertical.value <= 1 ||
        inputHorizontal.value >= 11 ||
        inputVertical.value >= 11
      ) {
        startGame();
        alert(
          "Необходимо четное число в диапазоне от 2 до 10. Если хотите сыграть в стандартный режим оставьте поля пустыми!"
        );
        debugger;
      }
    },
    { once: true }
  );
}

function stopGame() {
  stopGameBtn.addEventListener("click", () => {
    let cards = document.querySelectorAll(".flip-card");
    cards.forEach((card) => {
      card.remove();
    });

    clearInterval(clear);
    rightCard = [];
    stopGameBtn.classList.add("btn-hide");
    table.classList.add("btn-hide");

    timer.classList.add("btn-hide");
    menu.classList.remove("btn-hide");
    restartBtn.remove();

    restartBtn.removeEventListener("click", restartEvent);

    oneMinute = 60;
    timer.innerHTML = oneMinute;

    startGame();
  });
}

function startTimer() {
  clearInterval(clear);

  timer.classList.add("btn", "btn-dark", "timer-btn", "btn-lg");
  timer.classList.remove("btn-hide");

  stopGameContainer.append(timer);

  clear = setInterval(timerCount, 1000);
}

function timerCount() {
  if (oneMinute <= 0) {
    clearInterval(clear);

    let cards = document.querySelectorAll(".flip-card");

    timer.classList.add("btn-hide");

    cards.forEach((card) => {
      card.remove();
    });

    restartBtn.classList.add("btn", "btn-dark", "btn-restart", "btn-lg");
    restartBtn.textContent = "Заново";

    table.append(restartBtn);

    restartBtn.addEventListener(
      "click",
      function () {
        clearInterval(clear);
        restartBtn.remove();
        let shuffledArray = shuffle(createNumbersArray(array.length / 2));
        createDesk(shuffledArray);
        rightCard = [];
        if (timerOn) {
          startTimer();
        }
      },
      { once: true }
    );
    oneMinute = 60;
    timer.innerHTML = oneMinute;
    return;
  }

  oneMinute--;
  timer.innerHTML = oneMinute;
}

startGame();
stopGame();
