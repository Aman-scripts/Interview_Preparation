// Find top N keys by value
// Input:{ a: 10, b: 50, c: 30, d: 40 }, N=2
// Output:["b","d"]

function nKeysValue(values,N){

let result=[]
let arr=Object.entries(values).sort((a,b)=>b[1]-a[1])

for(let i=0;i<N;i++){
result.push(arr[i][0])
}

return result;

}

let data={ a: 10, b: 50, c: 30, d: 40 }
let k=2
console.log(nKeysValue(data,k))