// Find student with highest average mark
// Input : { A: [80, 90], B: [70, 75, 85] }
// Output : A {able to solve in the first attempts with few mistakes}

function averageHigestMarks(marks) {

    let maxKey = null
    let highestAverage = -Infinity

    for (let key in marks) {

        let sum = 0
        for (let i = 0; i < marks[key].length; i++) {
            sum += marks[key][i]
        }
        let average = sum / marks[key].length
        if (average > highestAverage) {
            highestAverage = average
            maxKey = key
        }
    }
    return [maxKey, highestAverage];

}

const marksList = { A: [80, 90], B: [70, 75, 85] }

console.log(averageHigestMarks(marksList))