const name = "ritwik"
const repoCount = 50

console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my rep count is ${repoCount}`);


const gameName = new String('ritwikt')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "  ritwik  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ritwik.com/ritwik%20thakur"

console.log(url.replace('%20', '-'))

console.log(url.includes('ritwik'))