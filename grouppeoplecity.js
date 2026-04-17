// Group people by city
// Input : [
//   { name: "A", city: "Delhi" },
//   { name: "B", city: "Mumbai" },
//   { name: "C", city: "Delhi" }
// ]

// Output : { Delhi: ["A", "C"], Mumbai: ["B"] } {not able to solve in the first attempt}{able to solve in second attempt}

function groupPeopleCity(data){

    let mapCity={}
    for(let i=0;i<data.length;i++){
        let person=data[i]
        let city=person.city
        let name=person.name

        if(!mapCity[city]){
            mapCity[city]=[]
        }
        mapCity[city].push(name)
    }
return mapCity;

}

let peopleData = [
    { name: "A", city: "Delhi" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Delhi" }
]

console.log(groupPeopleCity(peopleData))


