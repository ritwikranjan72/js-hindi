// let myName = "ritwik  "
// let mychannel = "chai    "

// console.log(myName.truelength);

let myHeros = ["thor", "batman"]

let heroPower = {
    thor: "hammer",
    batman: "money",

    getbatmanPower: function(){
        console.log(`Bat power is ${this.batman}`);        
    }
}

Object.prototype.ritwik = function(){
    console.log(`ritwik is present in all objects`);
}

Array.prototype.heyRitwik = function(){
    console.log(`Ritwik says hello`);    
}

// heroPower.ritwik()
// myHeros.ritwik()
// myHeros.heyRitwik()
// heroPower.heyRitwik()

// inheritance

const User = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignement',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);        
}

anotherUsername.trueLength()
"ritwik".trueLength()
"iceTea".trueLength()