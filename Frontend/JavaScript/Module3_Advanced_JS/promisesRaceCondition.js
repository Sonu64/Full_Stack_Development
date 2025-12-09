// ----------------------------------------------------
// 1. ASYNC FUNCTION (Returns the initial Promise)
// ----------------------------------------------------
const fetchData = (shouldResolve) => {
  console.log("A. (SYNC) Starting async operation..."); // 👈 RUNS IMMEDIATELY, as it is a simple line inside a function. So if the function is called, this line will run 1st.

  return new Promise((resolve, reject) => {
    // This timer starts and IMMEDIATELY hands off to the Web API.
    setTimeout(() => {
      if (shouldResolve) {
        resolve("Data is Ready!"); // 👈 RUNS AFTER 2000ms
      } else {
        reject("Data failed!");
      }
    }, 2000); // 2-second delay
  });
};

// ----------------------------------------------------
// 2. SYNCHRONOUS SETUP AND ASSIGNMENT
// ----------------------------------------------------
const finalPromise = fetchData(false) // P1: Initial Promise // Function body runs and 1st line is printed
  .then((data) => {
    // This handler runs LATE
    console.log("E. (ASYNC) Inside .then() handler. Data:", data);
    console.log("F. (ASYNC) Check P3 Status:", finalPromise); // 👈👈 STILL PENDING!
    return data;
  })
  .catch((error) => {
    console.log("Error:", error);
    console.log(finalPromise);
  }); // P3: Final Promise (assigned to finalPromise)

// ----------------------------------------------------
// 3. SYNCHRONOUS CODE (Runs First)
// ----------------------------------------------------
console.log(
  "B. (SYNC) Promise setup is complete. 2 seconds timer running in Web API."
); // 👈 RUNS IMMEDIATELY
console.log("C. (SYNC) Checking P3 Status immediately:", finalPromise); // 👈 PENDING!
console.log("D. (SYNC) Program continues..."); // 👈 RUNS IMMEDIATELY

setTimeout(() => {
  console.log(finalPromise);
}, 3000);
