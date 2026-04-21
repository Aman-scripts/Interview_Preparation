// Nested object destructuring
// Input:{ user: { profile: { name: "Alice", age: 25 } } }
// Output:Alice 25


function objDestructing(values){
       let { user: { profile: { name: { firstName, lastName } , age }  } } = values

    return firstName+lastName+ " " + age

}
let data={ user: { profile: { name: {firstName:"Aman",lastName:"deep"}, age: 25 } } }
console.log(objDestructing(data))