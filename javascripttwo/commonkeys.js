// Find common keys between two objects
// Input:{ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }{not able to solve in first attempt}
// Output:["b","c"]

function commonKeysObj(values1, values2) {
    let result = [];

    for (let key in values1) {
        if (key in values2) {
            result.push(key)
        }

    }

    return result;
}
let obj1 = { a: 1, b: 2, c: 3 }
let obj2 = { b: 4, c: 5, d: 6 }

console.log(commonKeysObj(obj1, obj2))