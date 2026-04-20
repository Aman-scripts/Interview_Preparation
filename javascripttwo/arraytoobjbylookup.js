// Convert array of objects to lookup by id
// Input:[{ id: 1, name: "A" }, { id: 2, name: "B" }]
// Output:{ 1: { id:1, name:"A" }, 2: { id:2, name:"B" } } {not able to solve it in the first attemps}

function arrayToObjLookup(values){
    let result={}

    for(let i=0;i<values.length;i++){
        let item=values[i]
        result[item.id]=item;
    }
return result;

}

const data =[{ id: 1, name: "A" }, { id: 2, name: "B" }]
console.log(arrayToObjLookup(data))