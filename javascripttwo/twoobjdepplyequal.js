// Check if two objects are deeply equal
// Input :{ a: { x: 1, y: 2 } }, { a: { x: 1, y: 2 } }{not able to solve this in the first attemps}
// Output:true

function deeplyEqual(value1,value2){
if(value1===value2) return true;

if(typeof value1!=='object'|| typeof value2!=='object'|| value1===null || value2===null) return false;

let keys1=Object.keys(value1)
let keys2=Object.keys(value2)

if(keys1.length!==keys2.length) return false;

for(let key of keys1){
    if(!deeplyEqual(value1[key],value2[key])) return false;
}

return true;
}

let obj1 = { a: { x: 1, y: 2 } }
let obj2 = { a: { x: 1, y: 2 } }

console.log(deeplyEqual(obj1, obj2))
