'use strict'

// Переменные
let money ,
	itemIncome,
	cashIncome,
    isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
let expensesItems = document.querySelectorAll('.expenses-items');

let button1 = document.getElementById('start'),
    button2 = document.getElementById('cancel'),
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
    inpIncomeTitle = document.querySelectorAll('.income-title'),
    inpIncomeAmount = document.querySelectorAll('.income-amount'),
    inpAdditionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    inpExpensesItem = document.querySelector('.expenses-item'),
    inpExpensesAmount = document.querySelector('.expenses-amount'),
    inpAdditionalExpensesItem = document.querySelector('.additional_expenses-item'),
    inpTargetAmount = document.querySelector('.target-amount'),
    rangePeriodSelect = document.querySelector('.period-select'),
    incomeItems = document.querySelectorAll('.income-items'),
    periodAmount = document.querySelector('.period-amount'),
    allInput = document.querySelectorAll('input[type=text]');

    //button.setAttribute('disabled', '') добавление атрибута

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
        
        this.budget = +inpMonthAmount.value;
        
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getPeriodAmount();
        this.getBudget();

        this.showResult(); 
    },
    
    showResult: function() {// выдает данные на страницу
        valueBudgetMonth.value = this.budgetMonth;
        valueBudgetday.value = this.budgetDay;
        valueExpensesMonth.value = this.expensesMonth;
        valueAdditionalExpenses.value = this.addExpenses.join(', ');
        valueAdditionalIncome.value = this.addIncome.join(', ');
        valueTargetMonth.value = Math.ceil(this.getTargetMonth());
        valueIncomePeriod.value = appData.calcSavedMoney();
        rangePeriodSelect.addEventListener("change", appData.getChangeCalc);
    },
    
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
        console.log(incomeItems[1].querySelectorAll('input[type=text]'));
        
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
                console.log(appData.expenses[itemExpenses]);
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
        console.log(periodAmount.textContent);
        return periodAmount.textContent;
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
                
                    this.addExpenses = addExpenses.join(', ');
                if (this.addExpenses.trim() === '' || !isNumber(this.addExpenses)){
                   return getAddExpenses();
                }          
	 },
    
    getExpensesMonth: function (){
        for (let key in appData.expenses){ 
            this.expensesMonth = +this.expenses[key];
            console.log(this.expensesMonth); 
        }      
    },
    getBudget: function (){
        this.budgetMonth = +this.budget + this.incomeMonth - this.expensesMonth;
        let budgetDay = Math.ceil(this.budgetMonth/30);
        this.budgetDay = budgetDay;
        console.log(this.budgetMonth);
        return this.budgetMonth;        
    },

    getTargetMonth: function (){
        return inpTargetAmount.value/this.budgetMonth;     
    },
    
        calcSavedMoney: function(){
            let saved = appData.budgetMonth * periodAmount.textContent;
            console.log(saved);
            return saved;
            
            
        }, 


    getVerfication: function(){
        if (inpMonthAmount.value.trim() === '' || !isNumber(+inpMonthAmount.value)){
            return;   
        }else{
            this.start();
            allInput.forEach(function(elem){
                elem.setAttribute('disabled' , 'true'); 
            })
            incomeItems.forEach(function(e){
               let el = e.children;
                el[0].setAttribute('disabled' , 'true');
                el[1].setAttribute('disabled' , 'true');
            })
            expensesItems.forEach(function(e){
                let el = e.children;
                 el[0].setAttribute('disabled' , 'true');
                 el[1].setAttribute('disabled' , 'true');
             })
            rangePeriodSelect.setAttribute('disabled' , 'true');
            button1.style.display = 'none';
            button2.style.display = 'block';  
        } 
       },
    
    getReset: function(){
        allInput.forEach(function(item){
           let clear = item.value = '';
            item = item.removeAttribute('disabled');
            item += clear; 
        })
        rangePeriodSelect.removeAttribute('disabled');
        button1.style.display = 'block';
        button2.style.display = 'none'; 
        return appData.budget = 0,
        appData.income = {},
        appData.addIncome = [],
        appData.expenses = {},
        appData.incomeMonth = 0,
        appData.addExpenses = [],
        appData.mission = 0,
        appData.budgetDay = 0,
        appData.expensesMonth = [], 
        appData.budgetMonth = 0,
        incomeItems[1].remove(),
        incomeItems[2].remove() ,
        expensesItems[1].remove(),
        expensesItems[2].remove(),
        expensesAdd.style.display = 'block',
        incomeAdd.style.display = '';

        // expensesAdd.removeEventListener('click', appData.addExpensesBlock),
        // incomeAdd.removeEventListener('click', appData.addIncomeBlock);
    },
    getChangeCalc: function(){
        valueIncomePeriod.value = appData.calcSavedMoney();
    }
             
}
console.log(appData.getAddExpenses());
// Обработчик событий 
start.addEventListener('click', appData.getVerfication.bind(appData));
rangePeriodSelect.addEventListener("change", appData.getPeriodAmount);


expensesAdd.addEventListener('click', appData.addExpensesBlock);
incomeAdd.addEventListener('click', appData.addIncomeBlock);
// Сброс вводимых данных
button2.addEventListener('click', appData.getReset);