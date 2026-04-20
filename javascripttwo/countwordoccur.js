// Count word occurrences in array {not able to do it in first attemps}
// Input : ["apple", "banana", "apple", "orange", "banana", "apple"]
// Output : { apple: 3, banana: 2, orange: 1 } {not able to solve in the first attempt}{able to do in the second attempt}

function countFruitsOccurence(listFruit){

let result={}
for(let i=0;i<listFruit.length;i++){
    let fruit=listFruit[i]

    if(result[fruit]){
        result[fruit]++;
    }
    else {
        result[fruit]=1;
    }

}
return result;

}

const listFruit = ["apple", "banana", "apple", "orange", "banana", "apple"]

console.log(countFruitsOccurence(listFruit))


