//Arithmetic and Assignment Operators
let balance = 1000;
let productPrice = 200;

// Arithmetic
let total = balance + productPrice; // 1200
let discount = total * 0.10;        // 10% discount (120)

// Assignment Shorthand
balance -= productPrice; // Same as balance = balance - productPrice (800)
balance += 50;           // Add 50 (850)


// 2. Comparison & Logical Operators
let age = 20;
let hasID = true;

// Comparison [00:05:51]
console.log(age >= 18); // true
console.log(age === "20"); // false (Strict equality checks value AND type)

// Logical
if (age >= 18 && hasID) {
  console.log("Entry allowed");
} else {
  console.log("Entry denied");
}

//3. Number formatting methods
const pi = 3.14159;
const amount = 500;
// toFixed: Sets decimal places (Returns a String)
console.log(pi.toFixed(2)); // "3.14"
// toPrecision: Sets total significant digits
console.log(pi.toPrecision(6)); // "3.14159"
// toString: Conversion
console.log(amount.toString().length); // 3


// 4. Math Object Functions
// Rounding
console.log(Math.round(4.6)); // 5 (Nearest)
console.log(Math.ceil(4.1));  // 5 (Always up)
console.log(Math.floor(4.9)); // 4 (Always down)
// Absolute & Extremes
console.log(Math.abs(-500));        // 500
console.log(Math.min(10, 5, 20));   // 5
console.log(Math.max(10, 5, 20));   // 20

//5. Random Number Generation
// Basic 0 to 1
console.log(Math.random()); 
// Range Formula: Math.floor(Math.random() * (max - min + 1)) + min
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100)); // Random number between 1 and 100


/// 6. Bitwise vs Logical (The Challenge)
// Logical AND (Checks truthiness)
console.log(true && false); // false
// Bitwise AND (Checks binary bits)
// 2 in binary is 10
// 3 in binary is 11
// Result is 10 (which is 2)
console.log(2 & 3); // 2
