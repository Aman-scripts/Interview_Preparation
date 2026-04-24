const fs=require('fs')

fs.readFile('a.txt',"utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data)
})

let s=0
for(let i=0;i<1000000000;i++){
    s+=i
}


// let beforeTime=Date.now();
// for(let i=0;i<100000000000;i++){
//     let currentTime=Date.now();
//     if(currentTime-beforeTime>=1000){
//         console.log(currentTime-beforeTime)
//         break;
//     }
// }

console.log(s)