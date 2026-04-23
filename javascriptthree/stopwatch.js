let counter=0;
function callback(){
    console.log(counter)
    counter+=1;
}
setTimeout(callback,1000)
setInterval(callback,1000)

let x=0;
for(let i=0;i<4000000000;i++){
x=x+1;
}
console.log(x)