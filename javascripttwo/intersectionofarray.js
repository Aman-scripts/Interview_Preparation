// Find intersection of all arrays in object
// Input:{ a: [1,2,3], b: [2,3,4], c: [3,4,5] }
// Output:[3]

function intersectionArray(values){

let array=Object.values(values)    
let result=Object.values(values)[0]


for(let i=1;i<array.length;i++){
result=result.filter(element=>array[i].includes(element))
}

return result
}

let data={ a: [1,2,3], b: [2,3,4], c: [3,4,5] }
console.log(intersectionArray(data))