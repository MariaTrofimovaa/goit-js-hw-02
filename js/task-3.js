'use strict'

const findLongestWord = function (string) {
    let stringArr = string.split(' ');                    
    let longestWord = '';   
    
    for (const word of stringArr) {
        if (longestWord.length < word.length) {
            longestWord = word;
        }   
}
    return longestWord;                                        
};

                       // ======================= Альтернативный вариант ======================= //

// const findLongestWord = function (string) {
//     let stringArr = string.split(' ');                         // вводим переменную, которая будет разбивать парамент в массив
//     let longestWord = '';                                      // вводим переменную для самого длинного слова и присваеваем ему значение строки

//     for (let i = 0; i < stringArr.length; i++) {               // создаем цикл, где сравниваем длину каждого элемента массива
//         if (longestWord.length < stringArr[i].length) {        // если длина самого длинного слова меньше длины элемента в массиве
//             longestWord = stringArr[i];                        // то самым длинным словом признаем слово из массива
//         }
//     }
//     return longestWord;                                        // возвращаем самое длинное слово в строке
// };


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
