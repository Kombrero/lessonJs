'use strict'

// Переменные
let money = prompt('Ваш месячный доход ?'),
    income = prompt('Как много вы зарабатываете не считая зарплаты ?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период чере запятую'),
    deposit = confirm('Есть и у вас депозит в банке?');

// Функции

let amount1,
    accumulated,
    mission,
    period;

function showTypeOf(data){
    console.log(typeof (data));
}

function getExpensesMonth(){
    amount1 = prompt('Во сколько это обойдется ?')
    console.log(amount1);
    return amount1;
};

let accumulatedMonth = (function getAccumulatedMonth(){
    accumulated = +money + +income - amount1;
    return accumulated;
    
});

function getTargetMonth(){
    mission = prompt('Какую сумму вы хотите накопить ?');
    period =  Math.floor(mission/accumulatedMonth());
    console.log('Цель будет достигнута за ' + period + ' месяца(ов)');
};

//Вызов функций
showTypeOf(+money);
showTypeOf(+income);
getExpensesMonth();
accumulatedMonth();
getTargetMonth();

let budgetDay = Math.ceil(accumulatedMonth()/30);

function getStatusIncome(){
    if (+budgetDay >= 1200){
            console.log('У вас высокий уровень дохода');
        }else if (+budgetDay >= 600 && +budgetDay < 1200){
            console.log('У вас средний уровень дохода');
        }else if(+budgetDay >= 0 && +budgetDay < 600){
            console.log('К сожалению, у вас уровень дохода ниже среднего');
        }else{
            console.log('Что-то пошло не так');
        }
};

getStatusIncome();

console.log(budgetDay);
console.log(deposit);
console.log(addExpenses.toLowerCase().split(', '));






// А вдруг пригодится =D
// expenses1 = prompt('Введите обязательную статью расходов?'),
    // expenses2 = prompt('Введите обязательную статью расходов?'),
    // amount2 = prompt('Во сколько это обойдется ?');


//alert ('Не знаю что написать!');

// Выводы в консоль
// console.log(typeof +money);
// console.log(typeof +income);
// console.log(addExpenses);
// console.log(expenses1);
// console.log(amount1);
// console.log('Бюджет на месяц ' + budgetMonth);
// console.log('Период равен ' + period + ' месяцев');
// console.log('Цель заработать ' + mission + ' рублей' );
// console.log(addExpenses.toLowerCase().split(', '));
// console.log(expenses1.toLowerCase().split(', '));
// console.log(expenses2.toLowerCase().split(', '));

//if else
// if (+budgetDay >= 1200){
//     console.log('У вас высокий уровень дохода');
// }else if (+budgetDay >= 600 && +budgetDay < 1200){
//     console.log('У вас средний уровень дохода');
// }else if(+budgetDay >= 0 && +budgetDay < 600){
//     console.log('К сожалению, у вас уровень дохода ниже среднего');
// }else{
//     console.log('Что-то пошло не так');
// }