// Unique values across all object arrays
// Input : { x: [1,2,3], y: [2,3,4], z: [4,5] }
// Output : [1,2,3,4,5] {not able to solve in the first attempts with few mistakes} {able to solve it in the second attempt}


function uniqueValues(marks) {

    let result = []

    for (let key in marks) {
        for (let i = 0; i < marks[key].length; i++) {

            let value = marks[key][i]
            if (!result.includes(value)) {
                result.push(value)
            }
        }


    }
    return result;

}

let value = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] }
console.log(uniqueValues(value))






















