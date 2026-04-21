// Deep merge two nested objects
// Input:{ a: { x: 1, y: 2 } }
// { a: { y: 3, z: 4 } }
// Output:{ a: { x: 1, y: 3, z: 4 } }

function mergeNestedObj(value1,value2){
let result={}
for(let key in value1){
    if(key in value2){
        if(typeof value1[key]==='object' && typeof value2[key]==='object'){
            result[key]=mergeNestedObj(value1[key],value2[key])
        }
        else{
            result[key]=value2[key]
        }
    }
    else{
        result[key]=value1[key]
    }
}

for(let key in value2){
    if(!(key in value1)){
        result[key]=value2[key]
    }
}

return result
}

let obj1={ a: { x: 1, y: 2 } }
let obj2={ a: { y: 3, z: 4 } }
console.log(mergeNestedObj(obj1,obj2))