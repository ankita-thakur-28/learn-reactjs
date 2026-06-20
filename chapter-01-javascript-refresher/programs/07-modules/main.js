// Importing from math.js
// Run this with: node --experimental-modules main.js
// or create a package.json with "type": "module"

import multiply, { add, subtract } from "./math.js";

console.log("Add:", add(10, 5));        // 15
console.log("Subtract:", subtract(10, 5)); // 5
console.log("Multiply:", multiply(10, 5)); // 50
