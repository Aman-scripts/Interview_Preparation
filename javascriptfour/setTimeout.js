// setTimeout(function () {
//     console.log("Hi there")
//     setTimeout(function () {
//         console.log("Hello")
//     }, 3000)

// }, 1000)


function setTimeooutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

// setTimeooutPromisified(1000).then(function () {
//     console.log("hi")
//     setTimeooutPromisified(1000).then(function () {
//         console.log("hi there")
//         setTimeooutPromisified(2000).then(function () {
//             console.log("hi there what are you doing?")
//         })
//     })
// })

setTimeooutPromisified(1000)
.then(function(){
    console.log('Hello')
    return setTimeooutPromisified(3000);
})
.then(function(){
    console.log("Hello What")
    return setTimeooutPromisified(5000);
}).then(function (){
    console.log("Hello what are you doing there")
})