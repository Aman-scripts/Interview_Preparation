
// Flatten object of arrays into one array

// Input : { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
// Output : ["apple", "banana", "carrot", "pea"] {not able to solve in the first attemps}

function flattenArray(obj){

    let result=[]
    for(let key in obj){
        result=result.concat(obj[key])
    }
return result;
}

const data = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
console.log(flattenArray(data))

