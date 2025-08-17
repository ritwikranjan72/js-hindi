
function sayMyname(){
    console.log("R");
console.log("I");
console.log("T");
console.log("W");
console.log("I");
console.log("K");
}

// sayMyname()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result  
    return number1 + number2
}

const result = addTwoNumbers(3,5)

// console.log("Result: ", result);



function loginUserMessage(username = "sam"){
    if (!username){
        console.log("Please enter a username");  
        return      
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("ritwik"))
// console.log(loginUserMessage("ritwik"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "ritwik",
    price: 199
}

function handlObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handlObject(user)
handlObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));




