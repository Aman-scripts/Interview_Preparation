// map ,filter,arrow funs

function sum(a,b){
    return a+b;
}
const ans=sum(1,2)
console.log(ans)

const mul=(a,b)=>{
    return a*b;
}

console.log(mul(4,5))

const arr=[1,2,3,4,5]
const res=arr.map((value)=>value*2)
console.log(res,"value")

const input=[2,3,4,5,6,7,8]
const newArray=[]
for(let i=0;i<input.length;i++){
    newArray.push(input[i]*3)
}
console.log(newArray)

//Filtering {Even numbers from array}

const filterArray=[1,2,3,4,5,6,7]
const result=filterArray.filter((value)=>value%2==0)
console.log(result)