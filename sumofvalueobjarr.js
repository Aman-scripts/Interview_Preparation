// Input : { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
// Output : { food: 60, travel: 20, bills: 100 }
// {Not able to solve in the first attempt}{able to solve in the second attemps}

function expenses(listExpense) {
    let result = {}
    for (let key in listExpense) {
        let sum = 0;
        for (let i = 0; i < listExpense[key].length; i++) {
            sum += listExpense[key][i]
        }
        result[key] = sum;
    }
    return result;

}

const expensesList = {
    food: [10, 20, 30],
    travel: [5, 10],
    bills: [40, 60]

}

console.log(expenses(expensesList))

















