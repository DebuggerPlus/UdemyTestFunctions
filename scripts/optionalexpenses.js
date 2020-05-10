
 let OptionalExpenses = {};        

function ChooseOptExpenses () {  
for(let i = 1; i < 4; i++){
   OptionalExpenses[i] = prompt("обязательная статья расходов", '');   
}
}

function OutPut ()
{
for(let i=1; i<4; i++) {
let outputtext = "Статья расходов " + i + "   " + OptionalExpenses[i];
alert(outputtext);
}    
}


ChooseOptExpenses();

OutPut();

