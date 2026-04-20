// Deep flatten nested arrays inside object
// Input:{ a: [1, [2, [3]]], b: [4, [5]] }
// Output :{ a: [1,2,3], b: [4,5] }

function flatten(arr){
    let result = []

    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }

    return result
}

function deepFlatNestedArray(values){
    let result = {}

    for(let key in values){
        result[key] = flatten(values[key])
    }

    return result
}

let data = { a: [1, [2, [3]]], b: [4, [5]] }

console.log(deepFlatNestedArray(data))