// Find most repeated word across categories
// Input:{ fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }
// Output:apple

function repeatedWords(values) {
    let count = {}

    for (let key in values) {
        for (let word of values[key]) {
            count[word] = (count[word] || 0) + 1
        }
    }

    let maxWord = ""
    let maxCount = 0

    for (let word in count) {
        if (count[word] > maxCount) {
            maxCount = count[word]
            maxWord = word
        }
    }
    return maxWord

}

let data = { fruits: ["apple", "apple", "banana"], drinks: ["apple", "tea"] }
console.log(repeatedWords(data))