let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true,
    chooseExpenses: function() {
        for(let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
               b = prompt("Во сколько обойдется?", '');
       
           if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
               } else {
               i = i -1;
                       }
           }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function()   {
           if(appData.moneyPerDay < 100) {
           level = "Минимльный уровень достатка";
           } else if (appData.moneyPerDay > 100 && IncomePerDay <2000) {
              level = "Средний уровень достатка";
           } else if (appData.moneyPerDay > 2000) {
               level = "Высокий уровень достатка";
           } else {
               level = "Произошла ошибка";}               
    }, 
    checkSavings: function()  {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент");
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
chooseOptExpenses: function()  {  
    for (let i = 1; i < 4; i++){
         let opt = prompt("Статья необязательных расходов?", "");
         if ((typeof(opt))=== 'string' && (typeof(opt)) != null (typeof(opt)) != '') {
           appData.optionalExpenses[i] = opt;   
         }
         else i = i -1;
          
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        let income1 = items.split(', ');
        income1.push(prompt('Может что-то еще?'));
        income1.sort();

        for(i = 1; i < income1.length; i++) {
            appData.income[i+1] = income1[i];
        }

        appData.income.forEach(function(item, i, income) {
            alert(income);
        }); 
    }
};    


for(let prop in appData) {
 console.log('Наша программа включает в себя данные:' + prop + ' = ' + appData[prop]);
};
