// let p1=new Promise();
// let d1=new Date()

function setTimeooutPromisified(ms){
let p= new Promise(resolve=>setTimeout(resolve,ms))
return p
}

function callback(){
    console.log("hi there")
}

//With Promisified {returns you object of promise class}
setTimeooutPromisified(3000).then(callback)

//Without Promises
setTimeout(callback,5*1000)

let ctr=0
for(let i=0;i<1000;i++){
    ctr=ctr+i
}
console.log(ctr)

