// Merge two objects (no sum, override second)
// Input:{ a: 10, b: 20 }
// { a: 5, c: 15 }
// Output:{ a: 5, b: 20, c: 15 }{able to solve this in the first attempt}


function mergeTwoObject(obj1,obj2){
return {...obj1,...obj2}
}

let object1={ a: 10, b: 20 }
let object2={ a: 5, c: 15 }
console.log(mergeTwoObject(object1,object2))