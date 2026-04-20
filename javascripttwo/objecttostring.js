// Convert object to query string
// Input:{ name: "Alice", age: 25 } {not able to do this in the first attemps}
// Output: "name=Alice&age=25" 


function objectToQueryString(values){
let arr=Object.entries(values)
let result=[]

for(let i=0;i<arr.length;i++){
    let key=arr[i][0]
    let value=arr[i][1]

    console.log(key,value)

    result.push(key+"="+value)
}

return result.join("&");

}
const data={ name: "Alice", age: 25 }
console.log(objectToQueryString(data))
