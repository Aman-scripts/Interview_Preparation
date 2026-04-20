// Remove falsy values from object
// Input:{ a: 0, b: null, c: "hello", d: undefined, e: 5 }
// Output:{ c: "hello", e: 5 }

function removeFalsyValues(values) {

    let result = {}
    for (let key in values) {
        if (values[key]) {
            result[key] = values[key]
        }

    }
    return result;

}

let data = { a: 0, b: null, c: "hello", d: undefined, e: 5 }
console.log(removeFalsyValues(data))