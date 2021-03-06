'use strict';
/*1.1 Создать кнопку, у которой в атрибуте data-counter записано число.
 При нажатии на кнопку число должно уменьшаться. Когда счетчик доходит до 0,
  обработчик события должен удалиться.
 Значение счетчика должно отображаться в innerText кнопки.*/

const btnCounter = document.querySelector("#btn-counter");
btnCounter.style.backgroundColor = getRandomRgbColor();
const decrementCounter = ({ target }) => {
  if (target.dataset.counter <= 0) {
    target.removeEventListener("click", decrementCounter);
    return;
  }
  target.style.backgroundColor = getRandomRgbColor();
  target.innerText = --target.dataset.counter;
}
btnCounter.addEventListener("click", decrementCounter);

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

/*2. Создайте кнопку, которая при нажатии будет отображать в теге img рандомную картинку.
Получайте рандомную картинку с помощью Lorem Picsum (ссылку прикрепил). 
Обратите внимание на раздел Advanced Usage на сайте. 
(Там показано, как можно получить несколько различных изображений по одной ссылке)*/

const IMGS_STORAGE_LINK = 'https://picsum.photos/200/300?random=';
const btnImg = document.querySelector("#btn-img");
const img = document.querySelector(".img");
btnImg.addEventListener("click", getImageLink(img));

function getImageLink(elem, https) {
  let count = 1;
  let link = https ? https : IMGS_STORAGE_LINK;
  return () => elem.src = link + ++count;
}
