// Find the largest value key
// - Input:{ a: 10, b: 50, c: 20 } {not able to solve in the firt attempt}
// - Output: b
    
function findLargest(obj){

let maxKey=null
let maxValue=-Infinity

for(let key in obj){
    if(obj[key]>maxValue){
        maxValue=obj[key]
        maxKey=key;
    }
}
return [maxKey,maxValue];
}

let values={
a: 10, 
b: 50, 
c: 20
}

console.log(findLargest(values))






















