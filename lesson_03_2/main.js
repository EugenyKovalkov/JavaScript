'use strict'
// Переменная lang может принимать 2 значения: 'ru' 'en'.

// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке.Решите задачу

// 1.через if,
let lang = prompt('Выберите язык и введите ru или en для продолжения');
let arr1 = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let arr2 = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
if (lang == 'ru') {
  console.log(arr1);
} else if (lang == 'en') {
  console.log(arr2);
}

// 2.через switch-case
let arr1 = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let arr2 = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
let lang = prompt('Выберите язык и введите ru или en для продолжения');
 switch (lang) {
  case 'ru':
    console.log(arr1);
    break;
  case 'en':
     console.log(arr2);
     break;
 }

// 3.через многомерный массив без ифов и switch.
let lang = prompt('Выберите язык и введите ru или en для продолжения');
let arr = {
  'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
  'en': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
};
console.log(arr[lang]);










