
// CJS: Common JS module
// require("./second")
// const {sum, sub} = require("./seond")

// IIFE fomat :-
/* (function (){
    console.log("I'm second");

    function sum(a, b){
        console.log(a+b);
    };
})(); */

sub(4, 2);
sum(3, 4);
console.log("I'm first");

// I want second.js code in my first.js file