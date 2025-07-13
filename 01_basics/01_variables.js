const accountId = 144553
let accountEmail = "ritwik@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed

accountEmail = "rr@rr.com"
accountPassword = "2121210"
accountCity = "Vancouver"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])