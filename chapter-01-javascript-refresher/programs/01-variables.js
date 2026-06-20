// Chapter 1: Variables - let vs const vs var

// const - cannot be reassigned (always use by default)
const name = "React";
// name = "Angular";  // Error: Assignment to constant variable

// let - can be reassigned (use when needed)
let score = 0;
score = 10;  // OK

// var - function scoped, avoid using
var oldWay = "avoid this";

// Block scoping with let/const
{
  const blockScoped = "only available here";
  let alsoBlockScoped = "same here";
  var notBlockScoped = "leaks out!";
}
// console.log(blockScoped);  // Error
// console.log(alsoBlockScoped);  // Error
console.log(notBlockScoped);  // "leaks out!" - BAD

// Best practice: const by default, let when reassignment needed
const API_URL = "https://api.example.com";
let counter = 0;

console.log("Variables in modern JS:");
console.log("const:", name);
console.log("let:", score);
console.log("Always prefer const over let, never use var");
