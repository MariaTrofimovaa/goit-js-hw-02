'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  if (input) {
    if (!isNaN(input)) {
      numbers.push(Number(input));
    } else {
      console.log('Было введено не число, попробуйте еще раз');
    }
  }
} while (input !== null);

if (numbers.length) {
  for (const number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
} else {
  alert('Отмена пользователем');
}
