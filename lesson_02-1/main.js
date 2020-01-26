let money = 600;
let income = 200;
let addExpenses = 'Internet, taxi, communal services';
let deposit = true;
let mission = 50000;
let period = 11;
alert('Вывести на экран в модальном окне(alert) сообщение с любым текстом');
console.log(1,2,3);

// Вывести в консоль тип данных значений переменных money, income, deposit;
console.log(money, income, deposit);

// Вывести в консоль длину строки addExpenses
console.log(addExpenses.length); //длинна строки равна (33) символа

// Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log('Период равен ' + period + ' месяцев' + ' и ' + 'Цель заработать ' + mission + ' рублей');



// Привести строку addExpenses к нижнему регистру и...
let str = addExpenses.toLowerCase();
// Проверка на нижний регистр
document.write(str); 
//...разбить строку на массив, вывести массив в консоль
let arr = addExpenses.split(' ', 3);
console.log(arr);




// Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
let budgetDay = money / 30;

// Вывести в консоль budgetDay
console.log(budgetDay);

