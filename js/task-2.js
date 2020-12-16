'use strict'

const calculateEngravingPrice = function(message, pricePerWord) {      // функция принимает значение гравировки через параметр message и стоимость через pricePerWord
    
    const array = message.split(' ');                                  // создаем переменную array и преобразовываем ее в массив для подсчета кол-ва элементов в массиве
    return array.length * pricePerWord;                                // вычисляем стоимость гравировки. Длина массива, умноженная на стоимость 1 слова
};


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120