// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 345655435766542326n

// Reference(Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "ritwik",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);