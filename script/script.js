'use strict'

// Переменные
let money = prompt('Ваш месячный доход ?'),
income = prompt('Как много вы зарабатываете не считая зарплаты ?'),
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период чере запятую'),
deposit = prompt('Есть и у вас депозит в банке?'),
expenses1 = prompt('Введите обязательную статью расходов?'),
expenses2 = prompt('Введите обязательную статью расходов?'),
amount1 = prompt('Во сколько это обойдется ?'),
amount2 = prompt('Во сколько это обойдется ?'),
budgetMonth = +money + +income - amount1 ,
mission = prompt('Какую сумму вы хотите накопить ?'),
period = Math.floor (mission/budgetMonth),
budgetDay = Math.ceil(budgetMonth/30);

//alert ('Не знаю что написать!');

//if else

if (deposit == 'Да' || deposit == 'Есть'){
    console.log(true);
}else{
    console.log(false);
}

if (+budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
}else if (+budgetDay >= 600 && +budgetDay < 1200){
    console.log('У вас средний уровень дохода');
}else if(+budgetDay >= 0 && +budgetDay < 600){
    console.log('К сожалению, у вас уровень дохода ниже среднего');
}else{
    console.log('Что-то пошло не так');
}

// Выводы в консоль
console.log(typeof +money);
console.log(typeof +income);
console.log(addExpenses);
console.log(expenses1);
console.log(amount1);
console.log(budgetMonth);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей' );
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);