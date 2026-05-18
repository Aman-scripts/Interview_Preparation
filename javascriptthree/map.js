// //given an array, give me back a new array in which every value is multiplied by 2

// const input=[1,2,3,4,5]
// const data=input.map((item)=>{
//     return item*2
// })

// console.log(data)

// const newArray=[]
// for(let i=0;i<input.length;i++){
//     newArray.push(input[i]*2)
// }

// console.log(newArray)


// //Creates a map function that takes two inputs an array and a callback function and transform the array into new array


// function mapTest(arr,transformation){
//  let newArray=[]
//     for(let i=0;i<arr.length;i++){
//         //transformed one item
//         let transformationValue=transformation(arr[i])

//         //stored transformed value
//         newArray.push(transformationValue)
//     }
//     return newArray
// }

// function transformation(value){
// return value*2;
// }

// let array=[1,2,3,4,5]


// let result=mapTest(array,transformation)
// console.log(result)
