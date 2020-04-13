'use strict'

// Переменные
let money ,
	itemIncome,
	cashIncome,
    isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
let expensesItems = document.querySelectorAll('.expenses-items');

let button = document.getElementById('start'),
    incomeAdd = document.getElementsByTagName('button')[0],
    expensesAdd = document.getElementsByTagName('button')[1],
    checkBox = document.querySelector('#deposit-check'),
    incomeItem = document.querySelectorAll('.additional_income-item'),
    valueBudgetMonth = document.querySelector('.budget_month-value'),
    valueBudgetday = document.querySelector('.budget_day-value'),
    valueExpensesMonth = document.querySelector('.expenses_month-value'),
    valueAdditionalIncome = document.querySelector('.additional_income-value'),
    valueAdditionalExpenses = document.querySelector('.additional_expenses-value'),
    valueIncomePeriod = document.querySelector('.income_period-value'),
    valueTargetMonth = document.querySelector('.target_month-value'),
    inpMonthAmount = document.querySelector('.salary-amount'),
    inpIncomeTitle = document.querySelector('.income-title'),
    inpIncomeAmount = document.querySelector('.income-amount'),
    inpAdditionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    inpExpensesItem = document.querySelector('.expenses-item'),
    inpExpensesAmount = document.querySelector('.expenses-amount'),
    inpAdditionalExpensesItem = document.querySelector('.additional_expenses-item'),
    inpTargetAmount = document.querySelector('.target-amount'),
    rangePeriodSelect = document.querySelector('.period-select'),
    incomeItems = document.querySelectorAll('.income-items'),
    periodAmount = document.querySelector('.period-amount');

let appData = {
    budget:0,
    income: {},
    addIncome: [],
    expenses: {},
    incomeMonth: 0,
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 0,
    budgetDay: 0,
    budgetMonth: 0,
    
    start : function() {
        
        appData.budget = +inpMonthAmount.value;

        
        
        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getPeriodAmount();
        appData.getBudget(); 

        appData.showResult(); 
    },
    
    showResult: function() {// Не выдает данные на страницу
        valueBudgetMonth.value = appData.budgetMonth;
        valueBudgetday.value = appData.budgetDay;
        valueExpensesMonth.value = appData.expensesMonth;
        valueAdditionalExpenses.value = appData.addExpenses.join(', ');
        valueAdditionalIncome.value = appData.addIncome.join(', ');
        valueTargetMonth.value = Math.ceil(appData.getTargetMonth());
        valueIncomePeriod.value = appData.calcSavedMoney();
    },
    expensesMonth: [],
    addExpensesBlock: function(){
       
        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
        console.log(expensesItems.length);
        if(expensesItems.length === 3){
            expensesAdd.style.display = 'none';
        }
    },

    addIncomeBlock: function(){
       
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        console.log(incomeItems.length);
        if(incomeItems.length === 3){
            incomeAdd.style.display = 'none';
        }
    },

    getExpenses: function(){
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = +cashExpenses;
                appData.expenses[itemExpenses] += appData.expenses[itemExpenses];
                return appData.expenses[itemExpenses];

            }   
        })
    },
    getIncome: function(){
        incomeItems.forEach(function (item) {
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = cashIncome;
                appData.incomeMonth += +appData.income[itemIncome];
                return appData.incomeMonth;
            }   
        })
    },

    getAddExpenses: function () {
        let addExpenses = inpAdditionalExpensesItem.value.split(', ');console.log(addExpenses);
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        })
    },

    getPeriodAmount: function(){
        periodAmount.textContent = rangePeriodSelect.value;
        console.log(rangePeriodSelect.value);
    },

    getAddIncome: function () {
        inpAdditionalIncomeItem.forEach(function(item){
          let itemValue = item.value.trim();
          if (itemValue !== ''){
              appData.addIncome.push(itemValue);
          }  
        })
    },
    asking: function  () {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период чере запятую');
        
        addExpenses = addExpenses.toLowerCase().split(', ');
				for (let i=0; i< addExpenses.length; i++){ 
                    addExpenses[i] = addExpenses[i].charAt(0).toUpperCase() + addExpenses[i].slice(1);
				}
                
                    appData.addExpenses = addExpenses.join(', ');
                if (appData.addExpenses.trim() === '' || !isNumber(appData.addExpenses)){
                   return getAddExpenses();
                }          
	 },
    
    getExpensesMonth: function (){
            for (let key in appData.expenses){ 
                appData.expensesMonth = +appData.expenses[key];
                
            }    
            console.log('Расходы за месяц: ' + appData.expensesMonth);
       
    },
    getBudget: function (){
        appData.budgetMonth = +appData.budget + appData.incomeMonth - appData.expensesMonth;
        let budgetDay = Math.ceil(appData.budgetMonth/30);
        appData.budgetDay = budgetDay;
        return appData.budgetMonth;        
    },

    getTargetMonth: function (){
        return inpTargetAmount.value/appData.budgetMonth;     
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
                }
                while(!isNumber(appData.percentDeposit))
                do{
                    appData.moneyDeposit = prompt('Какая сумма заложена ?', 10000);
                }
                while(!isNumber(appData.moneyDeposit))
            }
        },
        calcSavedMoney: function(){
            return appData.budgetMonth * rangePeriodSelect.value;
            
        },

      getVerfication: function(){
        if (inpMonthAmount.value.trim() === '' || !isNumber(+inpMonthAmount.value)){
            return;
            
        }else{
            appData.start();
        } 
       }
        
}
appData.getVerfication();


// Обработчик событий 
start.addEventListener('click', appData.getVerfication);
rangePeriodSelect.addEventListener("change", appData.getPeriodAmount );

expensesAdd.addEventListener('click', appData.addExpensesBlock);
incomeAdd.addEventListener('click', appData.addIncomeBlock);