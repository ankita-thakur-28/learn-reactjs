# Chapter 1: JavaScript Refresher

Before diving into React, you need solid JavaScript fundamentals. This chapter covers everything you'll use daily in React.

---

## JS Concepts Map

Everything you need before React, connected by how they flow together:

```
                          JAVASCRIPT FUNDAMENTALS
                                  │
          ┌───────────────────────┼───────────────────────┐
          ▼                       ▼                       ▼
   ┌──────────────┐       ┌──────────────┐       ┌──────────────┐
   │  VARIABLES    │       │  FUNCTIONS   │       │   MODULES    │
   │               │       │              │       │              │
   │ const/let     │       │ arrow fn     │       │ export       │
   │ block scope   │       │ this-less    │       │ import       │
   └───────┬───────┘       └──────┬───────┘       └──────┬───────┘
           │                      │                      │
           └──────────────────────┼──────────────────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          ▼                       ▼                       ▼
   ┌──────────────┐       ┌──────────────┐       ┌──────────────┐
   │ DESTRUCTURE  │       │SPREAD / REST │       │TEMPLATE LIT. │
   │              │       │              │       │              │
   │ {name, age}  │       │  ...obj      │       │ `${var}`     │
   │ [a, b]       │       │  ...arr      │       │  multi-line  │
   └───────┬───────┘       └──────┬───────┘       └──────────────┘
           │                      │
           └──────────────────────┼──────────────────────────────┐
                                  │                              │
                    ┌─────────────┴─────────────┐                │
                    ▼                           ▼                ▼
           ┌──────────────┐             ┌──────────────┐   ┌──────────┐
           │   ARRAYS      │             │    ASYNC      │   │ STRINGS  │
           │               │             │               │   │          │
           │ map()         │             │ Promise       │   │ dynamic  │
           │ filter()      │────────────▶│ async/await   │   │ class    │
           │ reduce()      │             │ fetch()       │   │ names    │
           └───────────────┘             └───────────────┘   └──────────┘
                    │                            │
                    ▼                            ▼
           ┌──────────────────────────────────────────┐
           │              REACT READY                  │
           │  These 8 concepts appear in EVERY         │
           │  React component you will write           │
           └──────────────────────────────────────────┘
```

### map()  filter()  reduce()  Pipeline

```
       [1, 2, 3, 4, 5, 6]
               │
               ▼
       ┌───────────────┐
       │   .filter()    │  Keep elements passing test
       │   n => n > 2   │
       └───────┬───────┘
               │
               ▼
          [3, 4, 5, 6]
               │
               ▼
       ┌───────────────┐
       │    .map()      │  Transform each element
       │  n => n * 10   │
       └───────┬───────┘
               │
               ▼
        [30, 40, 50, 60]
               │
               ▼
       ┌───────────────┐
       │   .reduce()    │  Accumulate to single value
       │ (acc,n)=>acc+n │
       └───────┬───────┘
               │
               ▼
             180
```

---

## 1. let, const, var

```js
var x = 10;       // function-scoped, avoid using
let y = 20;       // block-scoped, can reassign
const z = 30;     // block-scoped, cannot reassign
```

- Always use `const` by default
- Use `let` only when you need to reassign
- Never use `var` in modern JS

## 2. Arrow Functions

```js
// Regular function
function sum(a, b) { return a + b; }

// Arrow function
const sum = (a, b) => a + b;

// Single parameter - parens optional
const double = x => x * 2;

// No parameters - parens required
const hello = () => "Hello";
```

Arrow functions don't have their own `this` - they inherit from parent scope. This is crucial in React.

## 3. Template Literals

```js
const name = "React";
const greeting = `Hello ${name}!`;  // "Hello React!"

// Multi-line strings
const html = `
  <div>
    <h1>${name}</h1>
  </div>
`;
```

## 4. Destructuring

```js
// Array destructuring
const [a, b] = [1, 2];        // a=1, b=2
const [first, ...rest] = [1, 2, 3];  // first=1, rest=[2,3]

// Object destructuring
const person = { name: "Alice", age: 25 };
const { name, age } = person;  // name="Alice", age=25

// Renaming during destructuring
const { name: personName } = person;  // personName="Alice"

// Default values
const { city = "Unknown" } = person;

// Nested destructuring
const user = { profile: { bio: "Dev" } };
const { profile: { bio } } = user;  // bio="Dev"

// Destructuring in function parameters (very common in React)
function User({ name, age }) {
  console.log(name, age);
}
```

## 5. Spread & Rest Operators (...)

```js
// Spread - expands elements
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1,2,3,4,5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  // {a:1, b:2, c:3}

// Rest - collects remaining elements
const [first, ...rest] = [1, 2, 3, 4];  // first=1, rest=[2,3,4]
const { name, ...details } = { name: "Alice", age: 25, city: "NYC" };
// name="Alice", details={age:25, city:"NYC"}
```

Spread is used heavily in React for immutable state updates.

## 6. map, filter, reduce

```js
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2);  // [2,4,6,8,10]

// filter - keep elements that pass test
const evens = numbers.filter(n => n % 2 === 0);  // [2,4]

// reduce - accumulate values
const sum = numbers.reduce((acc, n) => acc + n, 0);  // 15

// Chaining
const result = numbers
  .filter(n => n > 2)
  .map(n => n * 3)
  .reduce((acc, n) => acc + n, 0);  // (3+4+5)*3 = 36
```

In React, you'll use `map()` constantly to render lists of components.

## 7. Promises & async/await

```js
// Promise
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// async/await (cleaner syntax)
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

React uses async/await inside `useEffect` for data fetching.

### Promise Chain vs async/await

```
PROMISE CHAIN (.then hell)             async/await (clean)
───────────────────────────            ───────────────────
                                       async function getData(){
fetch("/api")                            try {
  .then(r => r.json())                     const r = await fetch("/api");
  .then(data => {                          const data = await r.json();
    return fetch(`/user/${data.id}`)       const user = await fetch(`/user/${data.id}`);
  })                                       const details = await user.json();
  .then(user => user.json())               console.log(details);
  .then(details => console.log(details)) } catch(err) {
  .catch(err => console.error(err))        console.error(err)
                                         }
                                       }
```

### Sync vs Async Execution Order

```
┌──────────────────────────────────────────────────────────────┐
│                          CALL STACK                           │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  Sync code runs first (top to bottom)                 │    │
│  │  console.log("1")  ──────────────────────────────▶ 1  │    │
│  │  setTimeout(..., 0)  ─── goes to Web API queue        │    │
│  │  console.log("3")  ──────────────────────────────▶ 3  │    │
│  │  Promise.resolve().then(...) ─── goes to Microtask    │    │
│  │  console.log("5")  ──────────────────────────────▶ 5  │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  MICROTASK QUEUE (Promises)     runs before Macrotasks│    │
│  │  .then(() => log("2"))  ─────────────────────────▶ 2 │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  MACROTASK QUEUE (setTimeout)    runs last             │    │
│  │  setTimeout(() => log("4"))  ─────────────────────▶ 4 │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                               │
│                        Output:  1  3  5  2  4                 │
└──────────────────────────────────────────────────────────────┘
```

## 8. ES Modules (import/export)

```js
// file: utils.js
export const add = (a, b) => a + b;
export default function greet(name) {
  return `Hello ${name}`;
}

// file: main.js
import greet, { add } from "./utils.js";
```

---

## Programs

Open and run each file in `programs/` in order:

1. `01-variables.js` - let, const, var
2. `02-functions.js` - arrow functions
3. `03-destructuring.js` - array & object destructuring
4. `04-spread-rest.js` - spread and rest operators
5. `05-array-methods.js` - map, filter, reduce
6. `06-async.js` - promises and async/await
7. `07-modules/` - ES modules example

## Mini Project

Build the **User Directory** app in `projects/user-directory/`:
- Fetch users from an API
- Filter and display user cards
- Practice all JS concepts in one mini app

---

## Key Takeaways for React

| JS Concept | Where Used in React |
|------------|-------------------|
| Arrow functions | Component definitions, callbacks |
| Destructuring | Props destructuring in components |
| Spread operator | Immutable state updates |
| map() | Rendering lists of components |
| filter() | Filtering data before rendering |
| async/await | Data fetching in useEffect |
| Modules | Importing React, components, utils |
| Template literals | Dynamic class names, strings |
