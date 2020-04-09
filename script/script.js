'use strict'

// Переменные
// let money ,
// 	itemIncome,
// 	cashIncome,
//     isNumber = function(n){
//     return !isNaN(parseFloat(n)) && isFinite(n);
// }

// let start = function() {
//     do{
//         money = prompt('Ваш месячный доход ?');
//     }
//     while (!isNumber(money)); 
// }

// start();

// let appData = {
//     budget: money,
//     income: {},
//     addIncome: [],
//     expenses: {},
//     addExpenses: [],
//     deposit: false,
//     percentDeposit: 0,
//     moneyDeposit: 0,
//     mission: 0,
//     period: 1,
//     budgetDay: 0,
//     budgetMonth: 0,
//     expensesMonth: [],
//     asking: function getAddExpenses () {
//         let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период чере запятую');
        
//         addExpenses = addExpenses.toLowerCase().split(', ');
// 				for (let i=0; i< addExpenses.length; i++){ 
//                     addExpenses[i] = addExpenses[i].charAt(0).toUpperCase() + addExpenses[i].slice(1);
// 				}
                
//                     appData.addExpenses = addExpenses.join(', ');
//                 if (appData.addExpenses.trim() === '' || isNumber(appData.addExpenses)){
//                    return getAddExpenses();
//                 }          
// 	 },
	 
// 	 incomeFunc: function() {
// 		if (confirm('Есть ли у вас дополнительный источник заработка ?')){
//            itemIncome = prompt('Какой у вас есть допонительный заработок');
//            while(itemIncome.trim() === '' || isNumber(itemIncome)){
//             itemIncome = prompt('Какой у вас есть допонительный заработок');
//            }     
          
// 			do{
// 				cashIncome = prompt('Сколько в месяц вы на этом зарабатываете ?');
// 			} 
// 			while (!isNumber(cashIncome))

// 			return appData.income[itemIncome] = cashIncome;
// 	  }	
//     },
    
//     getExpensesMonth: function (){
//         let expenses = [],
//             amount1 = [];
//         for (let i = 0; i < 2; i++) {
//            do {
//                 expenses[i] = prompt('Введите обязательную статью расходов?');
//            }
//            while(expenses[i].trim() === '' || isNumber(+expenses[i]))
            
//            do{
//                 amount1[i] = prompt('Во сколько это обойдется ?');
//                 continue;
//             }
//             while (!isNumber(amount1[i])); 
//             appData.expenses[expenses[i]] = amount1[i];
//             let sum = 0;
//             for (let key in appData.expenses){ 
//                 sum += +appData.expenses[key];
//                 appData.expensesMonth = sum;
//             }    
//         }
//         console.log('Расходы за месяц: ' + appData.expensesMonth);
//     },
//     getBudget: function (){
//         appData.budgetMonth = +appData.budget - appData.expensesMonth;
//         let budgetDay = Math.ceil(appData.budgetMonth/30);
//         appData.budgetDay = budgetDay;
//         return appData.budgetMonth;        
//     },

//     getTargetMonth: function (){
//         let period = 0;    
//         do {appData.mission = prompt('Какую сумму вы хотите накопить ?')}
//         while(!isNumber(appData.mission))
//         appData.period =  Math.floor(appData.mission/appData.getBudget());
//         period = appData.period;
//         if (period >= 0){
//             console.log('Цель будет достигнута за ' + period + ' месяца(ов)');
//         }else{
//             console.log('Цель не будет достигнута');
//         }
        
//     },
//     getStatusIncome: function (){
//         if (+appData.budgetDay >= 1200){
//                 console.log('У вас высокий уровень дохода');
//             }else if (+appData.budgetDay >= 600 && +appData.budgetDay < 1200){
//                 console.log('У вас средний уровень дохода');
//             }else if(+appData.budgetDay >= 0 && +appData.budgetDay < 600){
//                 console.log('К сожалению, у вас уровень дохода ниже среднего');
//             }else{
//                 console.log('Что-то пошло не так');
//             }
//         },
//         getInfoDeposit: function(){
//             if(confirm('У вас есть депозит?')){
//                 do {
//                     appData.percentDeposit = prompt('Какой годовой процент ?', 10);
//                 }
//                 while(!isNumber(appData.percentDeposit))
//                 do{
//                     appData.moneyDeposit = prompt('Какая сумма заложена ?', 10000);
//                 }
//                 while(!isNumber(appData.moneyDeposit))
//             }
//         },
//         calcSavedMoney: function(){
//             return appData.budgetMonth * appData.period;
            
//         }
// }

// appData.asking();
// appData.getExpensesMonth();
// appData.incomeFunc();
// appData.getBudget();
// appData.getTargetMonth();
// appData.getStatusIncome();
// appData.getInfoDeposit();
// appData.calcSavedMoney();
// console.log('appData.budgetMonth: ', appData.budgetMonth);

// for (let key in appData){
//     console.log('Наша программа включает в себя ' +'Ключ: '+ key +' Значение: ' + appData[key]);
// }

// let button = document.getElementById('start'),
//     incomeAdd = document.getElementsByTagName('button')[0],
//     expensesAdd = document.getElementsByTagName('button')[1],
//     checkBox = document.querySelector('#deposit-check'),
//     incomeItems = document.querySelectorAll('.additional_income-item'),
//     valueBudgetMonth =document.getElementsByClassName('.budget_month-value'),
//     valueBudgetday = document.getElementsByClassName('.budget_day-value'),
//     valueExpensesMonth = document.getElementsByClassName('.expenses_month-value'),
//     valueAdditionalIncome = document.getElementsByClassName('.additional_income-value'),
//     valueAdditionalExpenses = document.getElementsByClassName('.additional_expenses-value'),
//     valueIncomePeriod = document.getElementsByClassName('.income_period-value'),
//     valueTargetMonth = document.getElementsByClassName('.target_month-value'),
//     inpMonthAmount = document.querySelector('.salary-amount'),
//     inpIncomeTitle = document.querySelector('.income-title'),
//     inpIncomeAmount = document.querySelector('.income-amount'),
//     inpAdditionalIncomeTitle = document.querySelector('.additional_income-item'),
//     inpExpensesItem = document.querySelector('.expenses-item'),
//     inpExpensesAmount = document.querySelector('.expenses-amount'),
//     inpAdditionalExpensesItem = document.querySelector('.additional_expenses-item'),
//     inpTargetAmount = document.querySelector('.target-amount'),
//     rangePeriodSelect = document.querySelector('.period-select')
    
//     console.log(incomeItems, valueAdditionalExpenses, valueAdditionalIncome, valueBudgetMonth, valueBudgetday, valueTargetMonth, valueIncomePeriod, valueExpensesMonth, inpAdditionalExpensesItem, inpAdditionalIncomeTitle, inpIncomeAmount, inpIncomeTitle, inpExpensesAmount, inpExpensesItem, inpTargetAmount, inpMonthAmount);

let backgroundImg= document.querySelector('body'),
    adv = document.querySelector('.adv'),
    book = document.querySelectorAll('.book'),
    book2 = book[0].querySelectorAll('li'),
    book5 = book[5].querySelectorAll('li'),
    book6 = book[2].querySelectorAll('li'),
    newChapter = document.createElement('li'),
    newLink = document.createElement('a');

    console.log(book5);
    
//Удалил рекламу    
adv.remove();

//Востановил порядок книг
book[1].after(book[0]);
book[0].after(book[4]);
book[4].after(book[3]);
book[2].before(book[5])
console.log(book);

//Востановил порядок во 2 и 5 книге
book2[3].after(book2[6]);
book2[4].before(book2[8]);
book2[9].after(book2[2]);
book5[1].after(book5[9]);
book5[9].after(book5[3]);
book5[7].after(book5[5]);
book5[4].after(book5[2]);

//Добавил главу в 6 книгу
newChapter.textContent = 'Глава 8: За пределами ES6';
book6[8].after(newChapter);

//Изменил название
let book3 = book[4].querySelector('a');
book3.textContent = 'Книга 3. this и Прототипы Объектов';
book3.insertAdjacentHTML('afterbegin', '<a href = "https://github.com/azat-io/you-dont-know-js-ru/blob/master/scope%20%26%20closures/README.md#%D0%92%D1%8B-%D0%BD%D0%B5-%D0%B7%D0%BD%D0%B0%D0%B5%D1%82%D0%B5-js-%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8-%D0%B8-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F"></a>')

// linkBook.href = 'https://github.com/azat-io/you-dont-know-js-ru/blob/master/scope%20%26%20closures/README.md#%D0%92%D1%8B-%D0%BD%D0%B5-%D0%B7%D0%BD%D0%B0%D0%B5%D1%82%D0%B5-js-%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8-%D0%B8-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F';

//Заменил фон 
backgroundImg.style = 'background-image: url(../image/you-dont-know-js.jpg);';