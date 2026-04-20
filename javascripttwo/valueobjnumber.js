// Check if all values in object are numbers
// Input:{ a: 1, b: "hello", c: 3 }
// Output:false


function allValuesObjNumber(value){

    // let result=Object.values(value).every(val=>typeof val=='number')
    // return result
    let arr=Object.entries(value)
    let result=arr.every(val=>typeof val=='number')
    return result;
}

const data={ a: 1, b: "hello", c: 3 }
console.log(allValuesObjNumber(data))