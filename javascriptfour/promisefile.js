// //without the promisified version

const fs = require('fs')

// function callback(err, data) {
//     if (err) {
//         console.log('error while reading the file')
//     }
//     else {
//         console.log(data)
//     }

// }

// fs.readFile('a.txt', 'utf-8', callback)

//With promisified Version

function fsReadFilePromisified(filePath, encoding) {
    let p = new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
            reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
    return p;
}

function callback(data){
    console.log(data)
}

function callbackErr(){
    console.log('error  while reading the file')
}

fsReadFilePromisified('a.txt','utf-8').then(callback).catch(callbackErr)