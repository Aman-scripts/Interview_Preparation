// Count even and odd numbers in array
// Input:[1,2,3,4,5,6]
// Output:{ even: 3, odd: 3 } {able to solve in the first attempt with few mistakes}

function evenOddNumbers(values) {

    let result = { even: 0, odd: 0 }
    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) {
            result.even++;
        }
        else {
            result.odd++;
        }
    }

    return result;
}
const data = [1, 2, 3, 4, 5, 6]
console.log(evenOddNumbers(data))


