// 1. What is a Callback Function?
// A callback is simply a function passed as an argument to another function. The "outer" function then "calls back" the passed function at a specific time (e.g., after a calculation is done or a timer finishes)
// Simple Callback Example
console.log("\n\n\n");
function greet(name, callback) {
    console.log("Hello 😉 " + name);
    callback(); // This is the "call back"
}
function callMe() {
    console.log("I am the callback function!");
}
greet("Sonu", callMe);



// 2. Why Use Callbacks? (The "Wait" Analogy)
// In a Spring Boot application, when you fetch data from the server, the browser doesn't want to "freeze" while waiting. It says: "Go fetch the data, and when you're done, run this callback function."

// JavaScript
// Example with a built-in function (setTimeout)
console.log("Step 1 - Done 1st: Requesting data from Spring Boot...");

setTimeout(function() {
    console.log("Step 2 - Done 3rd: Data received, I am the callback and I may need the data received !\nSo I must wait until the complete data is received before I can run.");
}, 5000); // Wait 5 seconds -> Our API request took 5 seconds to fetch data from Spring Boot, so we simulate that with setTimeout.

console.log("Step 3 - Done 2nd: I can do other things while waiting... I am running because JS is following the Async flow and while the callback is waiting for the data, I can run and do other things ! So the 'Sync' flow is lost. It's 'Async' flow now !");

// Arrow functions
const add2 = (a, b) => a + b;

// Spread operator
const addAll = (...numbers) => {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
};

// 4. IIFE (Immediately Invoked Function Expression)
// A function that runs as soon as it is defined. It’s used to avoid polluting the global namespace. Isko Alaag se call karne ki zarurat nahi, bas define karte hi run ho jata hai. It’s like a self-executing anonymous function.
(function() {
    console.log("\n\n\nI run immediately!");
})();