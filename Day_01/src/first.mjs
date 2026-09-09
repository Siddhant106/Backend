import sum from "./second.mjs";

sum(4, 5);
console.log("Hello ji");

// By defdalt Node.js supports CJS module
// Latest :- MJS module
// MJS :- Modern JS module

// If we want to use MJS module:
// 1) use .mjs extension instead of .js extension
// 2) use package,json file in which we write "type": "module"