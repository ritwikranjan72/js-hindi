// singleton

// object literals
// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Ritwik",
    "full name": "Ritwik Thakur",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser.mysym)
// console.log(JsUser[mySym])

JsUser.email = "ritwik@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "ritwik@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());