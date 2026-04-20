// Transform API response to object (id → name)
// Input:[
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
// ]
// Output:{ 1: "Alice", 2: "Bob" } {able to solve in the first attempt with little mistake}

function apiResponseObj(values){
let result={}

for(let i=0;i<values.length;i++){
    result[values[i].id]=values[i].name
}
return result;

}

let data=[{ id: 1, name: "Alice" },{ id: 2, name: "Bob" }]

console.log(apiResponseObj(data))