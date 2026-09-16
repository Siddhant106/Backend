const fs = require('fs');

let a = 30;
let b = "hello";

console.log(b);

function sum(a, b){
    console.log(a+b);
};

// Synchronous
const data = fs.readFileSync("./Day_03/data.json", "utf-8");
console.log(data);

// Asynchronous
fs.readFile("./Day_03/data.json", "utf-8", (err, res) => {
    console.log(res);
})

setTimeout(() => {
    console.log("Time Out");
}, 3000);

console.log(a);
console.log(sum(4, 5));