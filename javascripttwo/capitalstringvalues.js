// Capitalize string values inside object
// Input:{ name: "alice", city: "delhi" }
// Output: { name: "Alice", city: "Delhi" } {able to do this in first attempt with few mistakes}

function capitalValues(values){
    for(let key in values){
        let str=values[key]
        values[key]= str.charAt(0).toUpperCase()+str.slice(1)
    }
return values;
}

const data={ name: "alice", city: "delhi" }
console.log(capitalValues(data))
