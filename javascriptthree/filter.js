
//Filtering
//Given me the even and odds numbers 

const arr=[1,2,3,4,5,6]
const newArray=[];

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        newArray.push(arr[i])
    }
}

console.log(newArray)

const result=arr.filter((item)=>(item%2==0))
console.log(result)

 
