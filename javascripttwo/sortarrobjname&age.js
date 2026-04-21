// Sort array of objects by name then age
// Input:[
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Alice", age: 22 }
// ]
// Output:[
//   { name: "Alice", age: 22 },
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 }
// ]

function sortArrayObj(values){
return values.sort((a,b)=>{
    if(a.name<b.name) return -1;
    if(a.name>b.name) return 1;

    return a.age-b.age;
})
}
let data=[
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 }
]
console.log(sortArrayObj(data))