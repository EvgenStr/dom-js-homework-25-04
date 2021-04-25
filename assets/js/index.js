'use strict';
/*1.1 Создать кнопку, у которой в атрибуте data-counter записано число.
 При нажатии на кнопку число должно уменьшаться. Когда счетчик доходит до 0,
  обработчик события должен удалиться.
 Значение счетчика должно отображаться в innerText кнопки.*/

const btnCounter = document.querySelector("#btn-counter");

const decrease = ({ target }) => {
  target.innerText = --target.dataset.counter;
}