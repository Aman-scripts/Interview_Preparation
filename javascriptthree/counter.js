// let counter=0;

// const updateCounter=()=>{
// console.log(counter)
// counter++;
// }
// setInterval(updateCounter,1000)

let counter = 0;


const updateCounter = () => {
  counter++;
  console.log(counter);

  
setInterval(updateCounter, 1000);
};

updateCounter()