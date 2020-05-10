
 let OptionalExpenses = {
        1: '',
        2: '',
        3: ''
    };

function ChooseOptExpenses () {  

   OptionalExpenses[1] = prompt("обязательная статья расходов", '');
   OptionalExpenses[2] = prompt("Обязательная статья расходов2", '');
   OptionalExpenses[3] = prompt("Обязательная статья расходов 3", '');
}

ChooseOptExpenses();

alert("Статья1: " + OptionalExpenses[1]);
alert("Статья2: " + OptionalExpenses[2]);
alert("Статья3: " + OptionalExpenses[3]);
