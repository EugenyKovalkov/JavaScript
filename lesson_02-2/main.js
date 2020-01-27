// Создать переменную num со значением 266219 (тип данных число)
 let num = 266219;
 console.log(typeof num);

// Вывести в консоль произведение (умножение) цифр этого числа
// Например: число 123, при помощи javaScript получить каждое цифру(1, 2, 3) и перемножить их.
// Правильно использовать цикл или методы перебора.
function getSumNumber(num) {
  let sum = 0, tmp;
  while (num) {
    tmp = num % 10;
    num = (num - tmp) / 10;
    sum += tmp;
  }
  return sum;
}
console.log(getSumNumber(266219)); // получим сумму равную 26

// Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
let sumStep = 26 ** 3;
console.log(sumStep);

// Вывести на экран первые 2 цифры полученного числа
sumStep = String(sumStep);
console.log(sumStep.substr(0, 2));