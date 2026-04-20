// Find longest string among object values
// Input:{ a: "apple", b: "banana", c: "kiwi" } {able to solve in first attempt with few mistakes}
// Output:banana

function longestString(values){
    let longest=""
for(let key in values){
    if(values[key].length>longest.length){
        longest=values[key]
    }
}
return longest
}
let data={ a: "apple", b: "banana", c: "kiwi" }
console.log(longestString(data))