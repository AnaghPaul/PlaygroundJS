Promise.all([
  new Promise((resolve, reject) => reject("Third")),
  new Promise((resolve) => setTimeout(() => resolve("First"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("Second"), 10000)),
])
  .then((results) => console.log("All Results:", results)) 
  .catch((error) => console.log("Error:", error));
