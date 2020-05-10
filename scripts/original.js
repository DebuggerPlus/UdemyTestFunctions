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
    savings: true
};    


function chooseExpenses() {
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
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}; 

chooseExpenses();


/* let i = 0;
 while(i < 2) {
    i++;
    label: let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');

    if (( ( typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("doen");
        appData.expenses[a] = b;
        else {
            console.log("некорректные данные");
            break label;
        }
    }

} */


/* function chooseExpenses(){
    do {
        i++;
         let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                    b = prompt("Во сколько обойдется?", '');
    
        if ( ( typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("doen");
            appData.expenses[a] = b;
            else {
                
                i--;
            }
        }
    
    } while (i <2);
    
} 
chooseExpenses(); */

// let calc = function(a,b) {
//    return (a+b);
// }


function detectLevel(IncomePerDay) {
    let level;

    if(IncomePerDay < 100) {
       level = "Минимльный уровень достатка";
       } else if (IncomePerDay > 100 && IncomePerDay <2000) {
          level = "Средний уровень достатка";
       } else if (IncomePerDay > 2000) {
           level = "Высокий уровень достатка";
       } else {
           level = "Произошла ошибка";}

           
    return level;
}

let textforoutput = detectLevel(appData.moneyPerDay);
alert(textforoutput);

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();