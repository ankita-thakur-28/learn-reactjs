// Chapter 1: Arrow Functions

// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function (concise)
const addArrow = (a, b) => a + b;

console.log("Traditional:", add(2, 3));
console.log("Arrow:", addArrow(2, 3));

// Single parameter - parens optional
const double = x => x * 2;
console.log("Double:", double(5));

// No parameters
const greet = () => "Hello!";
console.log(greet());

// Multi-line arrow function needs braces and return
const calculate = (a, b) => {
  const sum = a + b;
  const product = a * b;
  return { sum, product };  // returning object
};

console.log("Calculate:", calculate(3, 4));

// Arrow functions in callbacks (very common in React)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled array:", doubled);

// Key difference: arrow functions don't have their own 'this'
// (Important in React class components, less so with hooks)
const person = {
  name: "Alice",
  greetTraditional: function() {
    console.log("Hi, I'm", this.name);
  },
  greetArrow: () => {
    // console.log("Hi, I'm", this.name);  // 'this' is NOT person
  }
};

person.greetTraditional();  // "Hi, I'm Alice"
person.greetArrow();  // this.name is undefined
