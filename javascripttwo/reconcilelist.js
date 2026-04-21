// Reconcile two lists (missing + extra items)
// Input:expected:["a","b","c"]
//       actual:["b","c","d"]
// Output: { missing:["a"], extra:["d"] }

function reconcileTwoList(arr1, arr2) {
    let result = { missing: [], extra: [] }

    //find missing
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.missing.push(arr1[i])
        }
    }

    //find extra

    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            result.extra.push(arr2[i])
        }
    }

    return result
}

let list1 = ["a", "b", "c"]
let list2 = ["b", "c", "d"]

console.log(reconcileTwoList(list1, list2))