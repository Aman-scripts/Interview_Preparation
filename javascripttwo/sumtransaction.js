// Sum all transactions per user
// Input:[
//           { user: "A", amount: 100 },
//           { user: "B", amount: 200 },
//           { user: "A", amount: 50 }
//         ]
// Output: { A: 150, B: 200 }{not able to solve in first attempt}

function transactionsSumUser(values){
let result={}
let sum=0;
for(let i=0;i<values.length;i++){
    let user=values[i].user
    let amount=values[i].amount
    if(!(user in result)){
      result[user]=0
    }
result[user]+=amount
}
return result;
}

const data =[{ user: "A", amount: 100 },{ user: "B", amount: 200 },{ user: "A", amount: 50 } ]
console.log(transactionsSumUser(data))