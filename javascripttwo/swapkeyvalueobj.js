// Swap keys and values of object
// Input : { a: "x", b: "y", c: "z" }
// Output : { x: "a", y: "b", z: "c" } {not able to solve in the first attempt}{able to solve in the second attempt}

function swapKeyValues(values){
let result={}
for (let key in values){
    let value=values[key]
    result[value]=key
}

return result;

}


let swapKeyValueData={ a: "x", b: "y", c: "z" }

console.log(swapKeyValues(swapKeyValueData))























