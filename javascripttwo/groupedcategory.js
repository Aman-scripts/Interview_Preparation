// Build index of ids grouped by category
// Input: [
//   { id: 1, category: "fruit" },
//   { id: 2, category: "veggie" },
//   { id: 3, category: "fruit" }
// ]

// Output:{ fruit: [1,3], veggie: [2] } {able to solve in first attempt with few mistakes}

function groupedCategory(values){
let result={}
for(let i=0;i<values.length;i++){
     let id=values[i].id
     let cat=values[i].category
     if(!(result[cat])){
        result[cat]=[]
     }
     result[cat].push(id)
}
return result
}

let data=[{ id: 1, category: "fruit" },{ id: 2, category: "veggie" },{ id: 3, category: "fruit" }]
console.log(groupedCategory(data))