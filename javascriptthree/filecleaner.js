// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


// const fs=require('fs')
// fs.readFile('clean.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     const cleaned = data.replace(/\s+/g, ' ').trim();
//     fs.writeFile('clean.txt',cleaned,(err)=>{
//         if(err) throw err;
//         console.log('Filed Cleaned Sucessfully')
//     })
// })


// function wait(n) {
//     let p = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, n * 1000);
//     });
//     return p;
//   }


// wait(2).then(()=>{
//     console.log("Done after 2 seconds")
// })


function sleep(milliseconds) {
  return new Promise((resolve) => {
    const start = Date.now();

    //Busy wait loop
    while (Date.now() - start < milliseconds) {
      //Do nothing
    }

    resolve();
  })
}
console.log("A");
sleep(6000).then(() => {
  console.log("B");
});

console.log("C");