'use strict'

// Переменные
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}



let money ,
    income = prompt('Как много вы зарабатываете не считая зарплаты ?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период чере запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?');

    let start = function() {
        do{
            money = prompt('Ваш месячный доход ?');
        }
        while (!isNumber(money)); 
    }

    start();

// Функции

let amount1 = [],
    expenses = [],
    accumulated,
    mission,
    period;

function showTypeOf(data){
    console.log(typeof (data));
}

let expensesMonth = function getExpensesMonth(){
    for (let i = 0; i < 2; i++) {
       expenses[i] = prompt('Введите обязательную статью расходов?');
       do{
        amount1[i] = prompt('Во сколько это обойдется ?');
        amount1[i] = +amount1[i];
        console.log(amount1[i]);
        continue;
        }
        while (!isNumber(amount1[i]));       
    }
    console.log(expenses);
    console.log('Расходы за месяц: ' + (amount1[0]+amount1[1]));
};

let accumulatedMonth = (function getAccumulatedMonth(){
    accumulated = +money + +income - amount1[0] - amount1[1];
    return accumulated;
    
});

function getTargetMonth(){
    mission = prompt('Какую сумму вы хотите накопить ?');
    period =  Math.floor(mission/accumulatedMonth());
    if (period > 0){
        console.log('Цель будет достигнута за ' + period + ' месяца(ов)');
    }else{
        console.log('Цель не будет достигнута');
    }
    
};

//Вызов функций
showTypeOf(money);
showTypeOf(+income);
expensesMonth();
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