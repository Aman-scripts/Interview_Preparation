console.log("Hello world!");

let color = "Red";
let height = 175
const likePizza = false;

console.log(color, height, likePizza)

function greet(name) {
    console.log(name)
}

greet("Amandeep")
// let message=greet("Amandeep")
// console.log(message)

//Code to find the sum from 1 to 100
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i
}

console.log("Sum of 1 to 100", sum)


function isLegal(age) {

    if (age < 18) {
        return "you are not going to vote"
    }
    else {
        return "you are going to vote"
    }
}

const legal = isLegal(4)
console.log(legal)


// Complex Types [Array's , Object(key value pairs)]


function Legal(user) {

    if (user.age < 18) {
        console.log(`${user.name} is not allowed to vote because age is ${user.age}`)
    }
    else {
        console.log(`${user.name} is allowed to vote because age is ${user.age}`)
    }

}

let user1 = {
    name: "Amandeep",
    age: 26,
    password: "et4625t5"
}

let user2 = {
    name: "Dhruv",
    age: 17,
    password: "n83234lg"
}

Legal(user1)
Legal(user2)


var users = ["harkirat", "raman", "kirat"]

for (let i = 0; i < 3; i++) {
    console.log(users[i])
}


// Write a function taking users as array of objects and print the aget whio is greater than 18 and male


function voteEligible(user) {
    let legalUser = []

    for (let i = 0; i < users.length; i++) {
        if (user[i].age >= 18 && user[i].gender == "male") {
            legalUser.push(user[i])
        }
    }
    return legalUser;
}

const usersOne = [
    {
        name: "Amandeep",
        age: 24,
        gender: "male"
    },
    {
        name: "Dhruv",
        age: 26,
        gender: "male"
    },
        {
        name: "Aisely",
        age: 19,
        gender: "female"
    },
]

console.log(voteEligible(usersOne))