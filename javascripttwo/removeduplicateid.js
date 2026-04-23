// Remove duplicate objects by id
// Input:[{ id: 1, name: "A" },{ id: 2, name: "B" },{ id: 1, name: "A" }]        
// Output:[{ id: 1, name: "A" },{ id: 2, name: "B" }] {able to solve in first attempt with little mistakes}

function duplicateById(value) {
    let result = []

    for (let i = 0; i < value.length; i++) {
        let id = value[i].id
        if (!(id in result)) {
            result.push(value[i])
        }

    }

    return result;
}
let data = [{ id: 1, name: "A" }, { id: 2, name: "B" }, { id: 1, name: "A" }]
console.log(duplicateById(data))

