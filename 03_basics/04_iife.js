// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // name IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('ritwik');

