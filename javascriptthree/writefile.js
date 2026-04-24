const fs=require('fs')
const content=fs.writeFile('a.txt','hello world there is Im writing',(err,data)=>{
    console.log('Saved')
})

const readFile=fs.readFile('a.txt','utf-8',(err,data)=>{
    console.log(data)
})