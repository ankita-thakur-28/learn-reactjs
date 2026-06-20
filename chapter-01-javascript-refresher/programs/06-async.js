// Chapter 1: Promises & async/await

// ============ PROMISES ============
function simulateFetch(data, delay = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve({ success: true, data });
      } else {
        reject(new Error("No data provided"));
      }
    }, delay);
  });
}

// Using .then()/.catch()
console.log("Fetching with promises...");
simulateFetch({ id: 1, name: "React" })
  .then(response => {
    console.log("Promise resolved:", response);
    return simulateFetch({ id: 2, name: "JSX" });
  })
  .then(response2 => {
    console.log("Second promise:", response2);
  })
  .catch(error => {
    console.error("Promise rejected:", error.message);
  });

// ============ async/await ============
async function fetchData() {
  try {
    console.log("Fetching with async/await...");
    const response1 = await simulateFetch({ id: 1, name: "React" });
    console.log("Async result 1:", response1);

    const response2 = await simulateFetch({ id: 2, name: "JSX" });
    console.log("Async result 2:", response2);

    return { response1, response2 };
  } catch (error) {
    console.error("Async error:", error.message);
  }
}

fetchData().then(result => {
  if (result) console.log("All data:", result);
});

// ============ Promise.all ============
async function fetchMultiple() {
  const urls = [
    simulateFetch({ id: 1 }, 2000),
    simulateFetch({ id: 2 }, 1000),
    simulateFetch({ id: 3 }, 1500)
  ];

  const results = await Promise.all(urls);
  console.log("All promises resolved:", results);
  // Takes ~2s (longest), not 4.5s (sequential)
}

fetchMultiple();

// ============ PATTERN YOU'LL USE IN REACT ============
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to fetch");
    const users = await response.json();
    console.log("Fetched users:", users);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    return [];
  }
}

// Uncomment to test real API:
// fetchUsers();
