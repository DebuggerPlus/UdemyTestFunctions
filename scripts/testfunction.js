

function  InComeLevel(IncomePerDay) {
    let level;

    if(IncomePerDay < 100) {
       level = "Минимльный уровень достатка";
       } else if (IncomePerDay > 100 && IncomePerDay < 2000) {
          level = "Средний уровень достатка";
       } else if (IncomePerDay > 2000) {
           level = "Высокий уровень достатка";
       } else {
           level = "Произошла ошибка";}

    return level;
}


/*function InComeLevel(incomeperday) {
    
    let level;
    if(incomeperday = 100) {level = "okey";}
    return level;
}
*/

let outputtext = InComeLevel(100);
alert(outputtext);
