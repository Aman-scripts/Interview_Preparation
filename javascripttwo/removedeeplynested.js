// Remove deeply nested key from object
// Input:{ a: { b: { c: 1, d: 2 } } }, remove "c"
// Output :{ a: { b: { d: 2 } } }


function removeDeeplyNestedObj(values,k){

}

let data={ a: { b: { c: 1, d: 2 } } }
let remove="c"
console.log(removeDeeplyNestedObj(data,remove))