// Count number of keys in object
// Input:{ a: 1, b: 2, c: 3 } {able to do in the first attempt but with indirectly approach}
// Output:3

function countKeys(values) {

    //Indirect way of counting keys    
    // let array=Object.entries(values)
    // return array.length;

    let length = Object.keys(values).length
    return length

}

const data = { a: 1, b: 2, c: 3 }
console.log(countKeys(data))