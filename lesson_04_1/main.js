// Весь функционал что был ранее оставляем, если что то необходимо удалить, об этом будет написано в задании
let mission = 10000;
let period = 12;
// Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
let money = +prompt('Ваш месячный доход?', '1000000');

// Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let arr = addExpenses.split(' ', 3);

// Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)
let deposit = confirm('Есть ли у вас депозит в банке?');

// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные
// “Введите обязательную статью расходов?” (например expenses1, expenses2)
// “Во сколько это обойдется ?” (например amount1, amount2) 
// в итоге 4 вопроса и 4 разные переменных
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');

let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');

// Вычислить бюджет на месяц, учитывая обязательные расходы, сохранить в новую переменную budgetMonth и вывести результат в консоль
let budgetMonth = +(money - (amount1 + amount2));



// Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону
let budgetDay = budgetMonth / 30;
let periodMission = Math.ceil(mission / budgetMonth);


// Вывод данных
console.log(money);
console.log(arr);
console.log(deposit);
console.log(expenses1, amount1);
console.log(expenses2, amount2);
console.log('Бюджет на месяц: ' + budgetMonth);
console.log('Бюджет на день: ' + Math.floor(budgetDay));
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
console.log('Цель будет достигнута за: ' + Math.ceil(periodMission) + ' месяца');

// Написать конструкцию условий(расчеты приведены в рублях)
// Если budgetDay больше 1200, то “У вас высокий уровень дохода”
// Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
// Если budgetDay меньше 600 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
// Если отрицательное значение то вывести “Что то пошло не так”
// Учесть варианты 0, 600 и 1200
if (budgetDay > 1200) {
  console.log('У вас высокий уровень дохода!');
}
else if (budgetDay > 600 && budgetDay < 1200) {
  console.log('У вас средний уровень дохода!');
}
else if (budgetDay < 600) {
  console.log('К сожалению у вас уровень дохода ниже среднего!');
}
else if (budgetDay <= 0) {
  console.log('Что-то пошло не так...');
}










// Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
function getExpensesMonth() {
  console.log('Cумма всех обязательных расходов за месяц составляет: ' + Number(amount1 + amount2));
} 
getExpensesMonth();
// Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth() {
  console.log('Накопления за месяц составляют: ' + (money - Number(amount1 + amount2)));
}
getAccumulatedMonth();

// Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
let accumulatedMonth = getAccumulatedMonth();











