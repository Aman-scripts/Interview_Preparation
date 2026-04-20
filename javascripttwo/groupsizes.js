// Chunk object entries into groups of size
// Input:{ a: 1, b: 2, c: 3, d: 4 }, size=2
// Output:[ [["a",1],["b",2]], [["c",3],["d",4]] ] {able to do in the first attempt with few mistakes}

function groupSizes(values,k){
let arr=Object.entries(values)
let result=[]
for(let i=0;i<arr.length;i+=k){
   let slice= arr.slice(i,i+k)
    result.push(slice)
}
return result;

}
let data={ a: 1, b: 2, c: 3, d: 4 }
let size=2

console.log(groupSizes(data,size))