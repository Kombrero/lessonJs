'use strict'

// Переменные
let money ,
    isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let start = function() {
    do{
        money = prompt('Ваш месячный доход ?');
    }
    while (!isNumber(money)); 
}

start();

let appData = {
    budget: money,
    income: {},
    addIncome: {},
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: prompt('Какую сумму вы хотите накопить ?'),
    period: 1,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: [], //необязательные расходы за месяц
    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период чере запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(',')
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

    },
    getExpensesMonth: function (){// переписать, что бы считал сумму всех расходов через цикл for In
        let expenses = [],
            amount1 = [];
        for (let i = 0; i < 2; i++) {
            expenses[i] = prompt('Введите обязательную статью расходов?');
           do{
                amount1[i] = prompt('Во сколько это обойдется ?');
                amount1[i] = Number(amount1[i]);
                continue;
            }
            while (!isNumber(amount1[i])); 
            appData.expenses[expenses[i]] = amount1[i];
            let sum = 0;
            for (let key in appData.expenses){ 
                sum += appData.expenses[key];
                appData.expensesMonth = sum;
            }    
        }
        console.log('Расходы за месяц: ' + appData.expensesMonth);
    },
    getBudget: function (){
        appData.budgetMonth = +appData.budget - appData.expensesMonth;
        let budgetDay = Math.ceil(appData.budgetMonth/30);
        appData.budgetDay = budgetDay;
        return appData.budgetMonth;
        
    },
    
    getTargetMonth: function (){
        let period = 0;
        appData.period =  Math.floor(appData.mission/appData.getBudget());
        period = appData.period;
        if (period >= 0){
            console.log('Цель будет достигнута за ' + period + ' месяца(ов)');
        }else{
            console.log('Цель не будет достигнута');
        }
        
    },
    getStatusIncome: function (){
        if (+appData.budgetDay >= 1200){
                console.log('У вас высокий уровень дохода');
            }else if (+appData.budgetDay >= 600 && +appData.budgetDay < 1200){
                console.log('У вас средний уровень дохода');
            }else if(+appData.budgetDay >= 0 && +appData.budgetDay < 600){
                console.log('К сожалению, у вас уровень дохода ниже среднего');
            }else{
                console.log('Что-то пошло не так');
            }
        }
}
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

for (let key in appData){
    console.log('Наша программа включает в себя ' +'Ключ: '+ key +' Значение: ' + appData[key]);
}



//console.log(appData);
    
// Функции
// let expensesMonths = appData.getExpensesMonth();
// let accumulatedMonth = appData.getAccumulatedMonth();
// let targetMonth = appData.getTargetMonth();

//Вызов функций

 
// let budgetDay = Math.ceil(appData.getAccumulatedMonth()/30);
// appData.budgetDay = budgetDay;
// console.log(appData.budgetDay);

//let statusIncome = appData.getStatusIncome();




//console.log(appData.deposit);
