const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB call, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()        
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);    
})

const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "Ritwik", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
  .then((user) => {
    console.log(user);          // whole object
    return user.username;       // return username
  })
  .then((username) => {
    console.log(username);      // logs "Ritwik"
  })
  .catch((error) => {
    console.log(error);
  });
