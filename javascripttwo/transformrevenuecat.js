// Transform array of orders into revenue per category
// Input : [
//   { id: 1, category: "electronics", price: 100 },
//   { id: 2, category: "clothes", price: 50 },
//   { id: 3, category: "electronics", price: 200 }
// ]

// Output : { electronics: 300, clothes: 50 } {able to solve this on first attempt with few mistakes}

function transformRevenueCategory(values) {
    let result = {}

    for (let i = 0; i < values.length; i++) {
        let category = values[i].category;
        let price = values[i].price
        if (!(category in result)) {

            result[category] = 0
        }
        result[category] += price
    }
    return result;
}

let data = [
    { id: 1, category: "electronics", price: 100 },
    { id: 2, category: "clothes", price: 50 },
    { id: 3, category: "electronics", price: 200 }
]

console.log(transformRevenueCategory(data))
