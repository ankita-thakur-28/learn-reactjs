// Chapter 1: Destructuring

// ============ ARRAY DESTRUCTURING ============
const colors = ["red", "green", "blue", "yellow"];

const [first, second] = colors;
console.log("First two:", first, second);  // red green

// Skip elements with commas
const [primary, , tertiary] = colors;
console.log("Primary & tertiary:", primary, tertiary);  // red blue

// Rest pattern
const [head, ...tail] = colors;
console.log("Head:", head, "Tail:", tail);  // red ["green","blue","yellow"]

// Default values
const [a, b, c, d, e = "purple"] = colors;
console.log("With default:", e);  // purple (doesn't exist in array)

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log("Swapped:", x, y);  // 2 1

// ============ OBJECT DESTRUCTURING ============
const user = {
  id: 101,
  username: "reactdev",
  email: "react@example.com",
  role: "admin"
};

const { username, email } = user;
console.log("User:", username, email);

// Renaming
const { username: userName, email: userEmail } = user;
console.log("Renamed:", userName, userEmail);

// Default values
const { role = "user", city = "Unknown" } = user;
console.log("Role:", role, "City:", city);  // admin Unknown

// Nested destructuring
const post = {
  title: "Learning React",
  author: { name: "Alice", avatar: "alice.jpg" },
  tags: ["react", "javascript"]
};

const { title, author: { name: authorName }, tags: [firstTag] } = post;
console.log("Post:", title, "by", authorName, "tag:", firstTag);

// ============ DESTRUCTURING IN PARAMETERS ============
// This pattern is used EVERYWHERE in React (props)
function printUser({ username, email, role = "user" }) {
  console.log(`${username} (${email}) - ${role}`);
}

printUser(user);  // reactdev (react@example.com) - admin
