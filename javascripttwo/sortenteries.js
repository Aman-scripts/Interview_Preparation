// Sort object entries by values (ascending)
// Input:{ a: 3, b: 1, c: 2 }
// Output:[["b",1], ["c",2], ["a",3]]{not able to solve in the first attempt}{able to solve it in the first attemps}

function sortObject(values) {
    let result = [];
    let array = Object.entries(values) // for converting object into array's
    array.sort((a,b)=>a[1]-b[1])
    return array;
}

const data = { a: 3, b: 1, c: 2 }
console.log(sortObject(data))

