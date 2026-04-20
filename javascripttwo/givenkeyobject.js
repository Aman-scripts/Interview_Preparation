// Pick only given keys from object
// Input:{ name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
// Output: { name: "Rahul", city: "Noida" }{not able to solve in the first attemps}{able to solve in second attempt}

function givenKeyObject(values,nums){

    let result={}

    for(let key of nums){
        if(key in values){
            result[key]=values[key]
        }
    }
return result;
}

const data={ name: "Rahul", age: 23, city: "Noida" }
const array=["name","city"]
console.log(givenKeyObject(data,array))















