function calculateTime(n) {
    let sum = 0
    let beforeTime = Date.now()
    for (let i = 0; i <= n; i++) {
        sum += i
    }

    let afterTime = Date.now()
    let timeTaken = (afterTime - beforeTime)/1000 //convert ms to sec
    return timeTaken
}

console.log(calculateTime(100))
console.log(calculateTime(1000))
console.log(calculateTime(10000))
console.log(calculateTime(100000))
console.log(calculateTime(1000000))
console.log(calculateTime(10000000))
