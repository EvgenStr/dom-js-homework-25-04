'use strict';
/*1.1 Создать кнопку, у которой в атрибуте data-counter записано число.
 При нажатии на кнопку число должно уменьшаться. Когда счетчик доходит до 0,
  обработчик события должен удалиться.
 Значение счетчика должно отображаться в innerText кнопки.*/

const btnCounter = document.querySelector("#btn-counter");
const decrease = ({ target }) => {
  if (target.dataset.counter <= 0) {
    target.removeEventListener("click", decrease);
    return;
  }
  target.style.backgroundColor = getRandomRgbColor();
  target.innerText = --target.dataset.counter;
}
btnCounter.addEventListener("click", decrease);

/*1.2 Написать функцию getRandomColor, которая будет рандомно генерировать
 строку с rgb цветом (Math.Random от 0 до 255 для каждого цвета).
  При каждом нажатии на кнопку цвет фона в ней должен меняться рандомно.*/

function getRandomRgbColor() {
  return `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}