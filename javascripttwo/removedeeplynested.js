// Remove deeply nested key from object
// Input:{ a: { b: { c: 1, d: 2 } } }, remove "c"
// Output :{ a: { b: { d: 2 } } } {recursive function all not able to perform this in first attempt}

function removeDeeplyNestedObj(values,k){
for(let key in values){
    if(key===k){
        delete values[key]
    }
    else if(typeof values[key]==='object'&& values[key]!==null){
        removeDeeplyNestedObj(values[key],k)
    }
}
return values;

}

let data={ a: { b: { c: 1, d: 2 } } }
let remove="c"
console.log(removeDeeplyNestedObj(data,remove))