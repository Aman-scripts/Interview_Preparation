const fs=require('fs')

const content=fs.readFileSync('a.txt',"utf-8")
console.log(content)


for(let i=0;i<5;i++){
    console.log(i)
}