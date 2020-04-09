'use strict'

// Переменные
let money ,
	itemIncome,
	cashIncome,
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
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: prompt('Какую сумму вы хотите накопить ?'),
    period: 1,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: [],
    asking: function () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период чере запятую');
				addExpenses = addExpenses.toLowerCase().split(', ')
				for (let i=0; i< addExpenses.length; i++){ 
                    addExpenses[i] = addExpenses[i].charAt(0).toUpperCase() + addExpenses[i].slice(1);
				}
                appData.addExpenses = addExpenses.join(', ');
                console.log(appData.addExpenses);
	 },
	 
	 incomeFunc: function() {
		if (confirm('Есть ли у вас дополнительный источник заработка ?')){
           itemIncome = prompt('Какой у вас есть допонительный заработок');
           while(itemIncome.trim() === ''){
            itemIncome = prompt('Какой у вас есть допонительный заработок');
           }     
          
			do{
				cashIncome = prompt('Сколько в месяц вы на этом зарабатываете ?');
			} 
			while (!isNumber(cashIncome))
			
			return appData.income[itemIncome] = cashIncome;
	  }	
    },
    
    getExpensesMonth: function (){
        let expenses = [],
            amount1 = [];
        for (let i = 0; i < 2; i++) {
            expenses[i] = prompt('Введите обязательную статью расходов?');
           while(expenses[i].trim() === ''){
                expenses[i] = prompt('Введите обязательную статью расходов?');
           }
            do{
                amount1[i] = prompt('Во сколько это обойдется ?');
                continue;
            }
            while (!isNumber(amount1[i])); 
            appData.expenses[expenses[i]] = amount1[i];
            let sum = 0;
            for (let key in appData.expenses){ 
                sum += +appData.expenses[key];
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
        },
        getInfoDeposit: function(){
            if(confirm('У вас есть депозит?')){
                do {
                    appData.percentDeposit = prompt('Какой годовой процент ?', 10);
                    appData.moneyDeposit = prompt('Какая сумма заложена ?', 10000);
                }
                while(!isNumber(appData.percentDeposit) && !isNumber(appData.moneyDeposit))
            } 
        },
        calcSavedMoney: function(){
            return appData.budgetMonth * appData.period;
            
        }
}

appData.asking();
appData.getExpensesMonth();
appData.incomeFunc();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();
console.log('appData.budgetMonth: ', appData.budgetMonth);

for (let key in appData){
    console.log('Наша программа включает в себя ' +'Ключ: '+ key +' Значение: ' + appData[key]);
}