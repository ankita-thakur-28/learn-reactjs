// Chapter 1: Spread & Rest Operators

// ============ SPREAD OPERATOR (...) ============

// Arrays - copying and merging
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log("Combined arrays:", combined);  // [1,2,3,4,5,6]

const copy = [...arr1];  // shallow copy
console.log("Copy of arr1:", copy);

// Objects - copying and merging (used CONSTANTLY in React)
const defaults = { theme: "light", lang: "en" };
const userPrefs = { theme: "dark", fontSize: 16 };

const settings = { ...defaults, ...userPrefs };
console.log("Merged settings:", settings);
// { theme: "dark", lang: "en", fontSize: 16 }
// userPrefs overrides defaults for "theme"

// IMMUTABLE UPDATE PATTERN (critical for React state)
const todo = { id: 1, text: "Learn React", done: false };

// Instead of mutating: todo.done = true
const updatedTodo = { ...todo, done: true };
console.log("Updated todo:", updatedTodo);
console.log("Original unchanged:", todo);

// Adding new properties
const todoWithMeta = { ...todo, createdAt: new Date().toISOString() };
console.log("Todo with meta:", todoWithMeta);

// ============ REST OPERATOR (...) ============
// Collect remaining elements into an array

function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log("Sum:", sum(1, 2, 3, 4, 5));  // 15

// Rest with destructuring
const [winner, runnerUp, ...otherRanks] = ["Gold", "Silver", "Bronze", "4th", "5th"];
console.log("Winner:", winner, "Runner-up:", runnerUp, "Others:", otherRanks);

// Rest with objects (picking specific props)
const person = { name: "Alice", age: 30, city: "NYC", job: "Dev" };
const { name, age, ...rest } = person;
console.log("Name:", name, "Age:", age, "Rest:", rest);  // {city: "NYC", job: "Dev"}
