// Chapter 1: map, filter, reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ============ map() ============
// Transform every element - returns new array of same length
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

const labeled = numbers.map(n => `Number ${n}`);
console.log("Labeled:", labeled);

// map in React - rendering lists
const items = ["Apple", "Banana", "Cherry"];
const listItems = items.map((item, index) => `${index + 1}. ${item}`);
console.log("Mapped list:", listItems);

// ============ filter() ============
// Keep elements that pass the test - returns subset
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

const greaterThan5 = numbers.filter(n => n > 5);
console.log("Greater than 5:", greaterThan5);

// Chaining filter + map
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 10);
console.log("Even numbers * 10:", result);

// ============ reduce() ============
// Accumulate values into a single result
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// More complex reduce - grouping
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log("Fruit count:", count);
// { apple: 3, banana: 2, orange: 1 }

// Combined example - what you'll do in React often
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 17, active: true },
  { name: "Charlie", age: 30, active: false },
  { name: "Diana", age: 22, active: true }
];

const activeAdultNames = users
  .filter(user => user.active && user.age >= 18)
  .map(user => user.name);

console.log("Active adult users:", activeAdultNames);
// ["Alice", "Diana"]
