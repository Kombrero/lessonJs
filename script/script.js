'use strict'

// Переменные
let money ,
	itemIncome,
	cashIncome;
const isNumber = (n)=>{
    return !isNaN(parseFloat(n)) && isFinite(n);
}
const expensesItems = document.querySelectorAll('.expenses-items');

const button1 = document.getElementById('start'),
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
    allInput = document.querySelectorAll('input[type=text]'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent');

    class AppData {
        constructor() {
            this.budget = 0,
            this.income = {},
            this.addIncome = [],
            this.expenses = {},
            this.incomeMonth = 0,
            this.addExpenses = [],
            this.deposit = false,
            this.percentDeposit = 0,
            this.moneyDeposit = 0,
            this.mission = 0,
            this.budgetDay = 0,
            this.budgetMonth = 0,
            this.expensesMonth = [],
            this.expenseMoth = 0
        }
    };

    AppData.prototype.start = function() {
        
        this.budget = +inpMonthAmount.value;
        
        this.getExpenses();
        this.getIncome();
        this.getExpensesMonth();
        this.getAddExpenses();
        this.getAddIncome();
        this.getPeriodAmount();
        this.getInfoDeposit();
        this.getBudget();

        this.showResult(); 
    };

    AppData.prototype.showResult = function() {// выдает данные на страницу
        valueBudgetMonth.value = this.budgetMonth;
        valueBudgetday.value = this.budgetDay;
        valueExpensesMonth.value = +this.expensesMonth;
        valueAdditionalExpenses.value = this.addExpenses.join(', ');
        valueAdditionalIncome.value = this.addIncome.join(', ');
        valueTargetMonth.value = Math.ceil(this.getTargetMonth());
        valueIncomePeriod.value = this.calcSavedMoney();
        rangePeriodSelect.addEventListener("change", this.getChangeCalc());
    };
    
    AppData.prototype.addExpensesBlock = function(){
       
        const cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
        expensesItems = document.querySelectorAll('.expenses-items');
    
        if(expensesItems.length === 3){
            expensesAdd.style.display = 'none';
        }
    };

    AppData.prototype.addIncomeBlock = function(){
       
        const cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
        incomeItems = document.querySelectorAll('.income-items');
        console.log(incomeItems[1].querySelectorAll('input[type=text]'));
        
        if(incomeItems.length === 3){
            incomeAdd.style.display = 'none';
        }
    };

    AppData.prototype.getExpenses = function(){
        const _this = this;
        expensesItems.forEach( (item) => {
            const itemExpenses = item.querySelector('.expenses-title').value;
            const cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== ''){
                _this.expenses[itemExpenses] += +cashExpenses;
                _this.expenseMoth += +cashExpenses;
                return _this.expenseMonth;

            }   
        })
    };
    AppData.prototype.getIncome = function(){
        const _this = this;
        incomeItems.forEach( (item) => {
            const itemIncome = item.querySelector('.income-title').value;
            const cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== ''){
                _this.income[itemIncome] = cashIncome;
                _this.incomeMonth += +_this.income[itemIncome];
                return _this.incomeMonth;
            }   
        })
    };

    AppData.prototype.getAddExpenses = function () {
        const _this = this;
        const addExpenses = inpAdditionalExpensesItem.value.split(', ');
        console.log(addExpenses);
        addExpenses.forEach((item)=>{
            item = item.trim();
            if(item !== ''){
                _this.addExpenses.push(item);
            }
        })
    };

    AppData.prototype.getPeriodAmount = () => {
        periodAmount.textContent = rangePeriodSelect.value;
        console.log(periodAmount.textContent);
        return periodAmount.textContent;
    };

    AppData.prototype.getAddIncome = function () {
        const _this = this;
        inpAdditionalIncomeItem.forEach((item)=>{
          const itemValue = item.value.trim();
          if (itemValue !== ''){
            _this.addIncome.push(itemValue);
          }  
        })
    };
    AppData.prototype.asking = function  () {
        // let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период чере запятую');
        
        addExpenses = addExpenses.toLowerCase().split(', ');
				for (let i=0; i< addExpenses.length; i++){ 
                    addExpenses[i] = addExpenses[i].charAt(0).toUpperCase() + addExpenses[i].slice(1);
				}
                
                    this.addExpenses = addExpenses.join(', ');
                if (this.addExpenses.trim() === '' || !isNumber(this.addExpenses)){
                   return getAddExpenses();
                }          
	 };
    
    AppData.prototype.getExpensesMonth = function (){
            this.expensesMonth += +this.expenseMoth;
            console.log(this.expensesMonth);      
    };

    AppData.prototype.getBudget = function (){
        const moneyDeposit = this.moneyDeposit * (this.percentDeposit / 100);
        this.budgetMonth = +this.budget + this.incomeMonth - this.expensesMonth + moneyDeposit;
        const budgetDay = Math.ceil(this.budgetMonth/30);
        this.budgetDay = budgetDay;
        console.log(this.budgetMonth);
        return this.budgetMonth;        
    };

    AppData.prototype.getTargetMonth = function (){
        return inpTargetAmount.value/this.budgetMonth;     
    };
    
    AppData.prototype.calcSavedMoney = function(){
        const saved = this.budgetMonth * rangePeriodSelect.value;
        console.log(saved);
        return saved;
        
        
    };


    AppData.prototype.getVerfication = function(){
        
        if (inpMonthAmount.value.trim() === '' || !isNumber(+inpMonthAmount.value)){
            return;   
        }else{
           this.start();
            allInput.forEach((elem) => {
                elem.setAttribute('disabled' , 'true'); 
            })
            incomeItems.forEach((e)=>{
               const el = e.children;
                el[0].setAttribute('disabled' , 'true');
                el[1].setAttribute('disabled' , 'true');
                console.log(el);
            })
            expensesItems.forEach((e)=>{
                const el = e.children;
                 el[0].setAttribute('disabled' , 'true');
                 el[1].setAttribute('disabled' , 'true');
             })
            rangePeriodSelect.setAttribute('disabled' , 'true');
            button1.style.display = 'none';
            button2.style.display = 'block';  
        } 
        
       };

       AppData.prototype.getR = function(){
        if(incomeItems.length === 2){
               console.log(incomeItems.length);
            incomeItems[1].remove(); 
           }
           else if(incomeItems.length === 3){
            incomeItems[1].remove();
            incomeItems[2].remove(); 
           };
           if(expensesItems.length === 2){
            expensesItems[1].remove(); 
           }
           else if(expensesItems.length === 3){
            expensesItems[1].remove();
            expensesItems[2].remove(); 
           }
       };
    
    AppData.prototype.getReset = function(){
        allInput.forEach((item)=>{
           const clear = item.value = '';
            item = item.removeAttribute('disabled');
            item += clear; 
        })
        rangePeriodSelect.removeAttribute('disabled');
        button1.style.display = 'block';
        button2.style.display = 'none'; 
        return this.budget = 0,
        this.income = {},
        this.addIncome = [],
        this.expenses = {},
        this.incomeMonth = 0,
        this.addExpenses = [],
        this.mission = 0,
        this.budgetDay = 0,
        this.expensesMonth = [], 
        this.budgetMonth = 0,
        appData.getR(),
        checkBox.checked = false,
        depositBank.style.display = 'none',
        depositAmount.style.display = 'none',
        expensesAdd.style.display = 'block',
        incomeAdd.style.display = '';

    };

    AppData.prototype.getChangeCalc = function(){
        valueIncomePeriod.value = this.calcSavedMoney();
    };

    AppData.prototype.eventListener = function(){
        return start.addEventListener('click', this.getVerfication.bind(this)),
        
        rangePeriodSelect.addEventListener("change", this.getPeriodAmount),


        expensesAdd.addEventListener('click', this.addExpensesBlock),
        incomeAdd.addEventListener('click', this.addIncomeBlock),
        
        button2.addEventListener('click', this.getReset),
        
        checkBox.addEventListener('change', this.depositHandler.bind(this)),
        depositPercent.addEventListener('change',  function () {
            if (!isNumber(depositPercent.value) || depositPercent.value < 0 || depositPercent.value > 100  ) {
                alert ('Введите корректное число');
                depositPercent.value = '';
         }
        });

    };

    AppData.prototype.getInfoDeposit = function(){
        if (this.deposit) {
            this.percentDeposit = depositPercent.value;
            this.moneyDeposit = depositAmount.value;
        }
    };

    AppData.prototype.changePercent = function() {
        const valueSelect = this.value;
        if (valueSelect === 'other'){
            depositPercent.style.display = 'inline-block';
            depositPercent.value = '';
            depositPercent.value = depositPercent.value;
            console.log(depositPercent.value);
        }else{
            depositPercent.style.display = 'none';
            depositPercent.value = valueSelect;
        }
    };
    console.log(depositPercent.value);

    AppData.prototype.depositHandler = function() {
        if(checkBox.checked) {
            depositBank.style.display = 'inline-block';
            depositAmount.style.display = 'inline-block';
            this.deposit = true;
            depositBank.addEventListener('change', this.changePercent);
        }else{
            depositBank.style.display = 'none';
            depositAmount.style.display = 'none';
            depositBank.value ='';
            depositAmount.value ='';
            this.deposit = false;
            depositBank.removeEventListener('change', this.changePercent);
        }
    };

    

    const appData = new AppData();

    console.log(appData);

   appData.eventListener();


